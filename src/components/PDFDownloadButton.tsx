import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';
import Button from './Button';
import { X, Mail, CheckCircle, Clock, RotateCcw } from 'lucide-react';
import { sendEmailJSOTP, verifyEmailJSOTP } from '../utils/emailjsOtpService';

interface PDFDownloadButtonProps {
  pdfUrl: string;
  label?: string;
}

const initialForm = {
  fullName: '',
  place: '',
  email: '',
  phone: '',
};

type Step = 'form' | 'otp' | 'success';

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ pdfUrl, label = 'Download PDF' }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('form');
  const [form, setForm] = useState(initialForm);
  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    if (value.length <= 6) {
      setOtpCode(value);
      setOtpError(null);
    }
  };

  const validate = () => {
    if (!form.fullName.trim() || !form.place.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please fill in all fields.');
      return false;
    }
    // Simple email regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    // Simple phone validation (10+ digits)
    if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ''))) {
      setError('Please enter a valid phone number.');
      return false;
    }
    setError(null);
    return true;
  };

  const startCountdown = () => {
    setCanResend(false);
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Send OTP using EmailJS
      await sendEmailJSOTP({
        email: form.email,
        fullName: form.fullName,
        purpose: 'PDF_DOWNLOAD'
      });
      
      setStep('otp');
      startCountdown();
    } catch (err: any) {
      setError('Failed to send verification code. Please try again.');
      console.error('EmailJS Send Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;
    
    setOtpLoading(true);
    setOtpError(null);
    
    try {
      // Resend using EmailJS
      await sendEmailJSOTP({
        email: form.email,
        fullName: form.fullName,
        purpose: 'PDF_DOWNLOAD'
      });
      
      startCountdown();
    } catch (err: any) {
      setOtpError('Failed to resend code. Please try again.');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length !== 6) {
      setOtpError('Please enter a 6-digit verification code.');
      return;
    }
    
    setOtpLoading(true);
    setOtpError(null);
    
    try {
      // Verify OTP using EmailJS service
      const result = await verifyEmailJSOTP({
        email: form.email,
        otpCode: otpCode
      });
      
      if (!result.success) {
        setOtpError(result.error || 'Invalid verification code.');
        return;
      }
      
      // Store download record
      await supabase.from('pdf_downloads').insert([
        {
          full_name: form.fullName,
          place: form.place,
          email: form.email,
          phone: form.phone,
          pdf_url: pdfUrl,
          verified: true,
          verification_method: 'email',
          verified_at: new Date().toISOString()
        },
      ]);
      
      setStep('success');
      
      // Start download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Close modal after download
        setTimeout(() => {
          handleClose();
        }, 2000);
      }, 1500);
      
    } catch (err: any) {
      setOtpError('Verification failed. Please try again.');
      console.error('EmailJS Verify Error:', err);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStep('form');
    setForm(initialForm);
    setOtpCode('');
    setError(null);
    setOtpError(null);
    setCountdown(0);
    setCanResend(true);
  };

  const handleBackToForm = () => {
    setStep('form');
    setOtpCode('');
    setOtpError(null);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'form':
        return (
          <>
            <h3 className="text-2xl font-bold mb-2 text-center">Download PDF</h3>
            <p className="text-muted-foreground mb-6 text-center text-sm">
              Please fill out the form to access the PDF.
            </p>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input
                className="input"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                disabled={loading}
                required
              />
              <input
                className="input"
                type="text"
                name="place"
                placeholder="Place"
                value={form.place}
                onChange={handleChange}
                disabled={loading}
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
              <input
                className="input"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
                required
              />
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-2 px-8 py-3"
                isLoading={loading}
                disabled={loading}
              >
                Send Verification Code
              </Button>
            </form>
          </>
        );

      case 'otp':
        return (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Check Your Email</h3>
              <p className="text-muted-foreground text-sm">
                We've sent a 6-digit verification code to
                <br />
                <span className="font-medium text-foreground">{form.email}</span>
              </p>
            </div>
            
            <form className="space-y-4" onSubmit={handleOtpSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Verification Code</label>
                <input
                  className="input text-center text-2xl tracking-widest font-mono"
                  type="text"
                  placeholder="000000"
                  value={otpCode}
                  onChange={handleOtpChange}
                  disabled={otpLoading}
                  maxLength={6}
                  required
                />
                <p className="text-xs text-muted-foreground text-center">
                  Enter the 6-digit code sent to your email
                </p>
              </div>
              
              {otpError && <div className="text-red-500 text-sm text-center">{otpError}</div>}
              
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                isLoading={otpLoading}
                disabled={otpLoading || otpCode.length !== 6}
              >
                Verify & Download
              </Button>
            </form>
            
            <div className="mt-6 text-center space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>
                  {countdown > 0 ? `Resend in ${countdown}s` : 'Didn\'t receive the code?'}
                </span>
              </div>
              
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={!canResend || otpLoading}
                className="text-primary hover:text-primary/80 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1"
              >
                <RotateCcw size={14} />
                <span>Resend Code</span>
              </button>
              
              <button
                type="button"
                onClick={handleBackToForm}
                className="text-muted-foreground hover:text-foreground text-sm underline"
              >
                Change Email Address
              </button>
            </div>
          </>
        );

      case 'success':
        return (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-600">Verified Successfully!</h3>
            <p className="text-muted-foreground mb-4">
              Your PDF download will begin shortly...
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
              <span>Preparing your download</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
        {label}
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
          >
            <motion.div
              className="card max-w-md w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                onClick={handleClose}
                aria-label="Close"
                type="button"
                disabled={loading || otpLoading}
              >
                <X size={20} />
              </button>
              
              <motion.div
                key={step}
                initial={{ 
                  opacity: 0, 
                  x: step === 'otp' ? 20 : step === 'success' ? 20 : 0 
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PDFDownloadButton; 