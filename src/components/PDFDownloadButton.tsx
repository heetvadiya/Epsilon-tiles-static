import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';
import Button from './Button';
import { X } from 'lucide-react';

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

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ pdfUrl, label = 'Download PDF' }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.from('pdf_downloads').insert([
        {
          full_name: form.fullName,
          place: form.place,
          email: form.email,
          phone: form.phone,
          pdf_url: pdfUrl,
        },
      ]);
      if (error) throw error;
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
        setForm(initialForm);
        // Trigger download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1200);
    } catch (err: any) {
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="card max-w-md w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Close"
                type="button"
                disabled={loading}
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-2 text-center">Download PDF</h3>
              <p className="text-muted-foreground mb-6 text-center text-sm">
                Please fill out the form to access the PDF.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                {success && <div className="text-green-600 text-sm text-center">Thank you! Your download will begin shortly.</div>}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full mt-2 px-8 py-3"
                  isLoading={loading}
                  disabled={loading}
                >
                  Submit & Download
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PDFDownloadButton; 