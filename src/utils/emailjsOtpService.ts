// EmailJS Frontend-Only OTP Service
// Production-ready email verification system

import emailjs from '@emailjs/browser';
import { supabase } from '../supabaseClient';

// EmailJS Configuration (get these from EmailJS dashboard)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

// OTP Configuration  
const OTP_EXPIRY_MINUTES = 5;
const OTP_MAX_ATTEMPTS = 3;

export interface EmailJSOTPRequest {
  email: string;
  fullName: string;
  purpose: string;
}

export interface EmailJSOTPVerification {
  email: string;
  otpCode: string;
}

// Generate 6-digit OTP
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Store OTP in database
const storeOTP = async (email: string, otpCode: string, purpose: string) => {
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + OTP_EXPIRY_MINUTES);

  const { data, error } = await supabase
    .from('simple_otp_codes')
    .insert([
      {
        email,
        otp_code: otpCode,
        purpose,
        expires_at: expiresAt.toISOString(),
        verified: false,
        attempts: 0
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Send OTP via EmailJS
const sendOTPEmailJS = async (email: string, otpCode: string, fullName: string) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
    throw new Error('EmailJS configuration missing. Please check environment variables.');
  }

  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address provided');
  }

  const templateParams = {
    to_email: email,
    to_name: fullName,
    reply_to: email,
    from_name: 'FLORA by Epsilon',
    otp_code: otpCode,
    expiry_minutes: OTP_EXPIRY_MINUTES,
    company_name: 'FLORA by Epsilon',
    product_line: 'Premium SPC Flooring'
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS error: ${response.status} - ${response.text}`);
    }

    return { success: true };
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
  }
};

// Send OTP (EmailJS version)
export const sendEmailJSOTP = async ({ email, fullName, purpose }: EmailJSOTPRequest) => {
  try {
    // Generate OTP
    const otpCode = generateOTP();
    
    // Store in database
    await storeOTP(email, otpCode, purpose);
    
    // Send email via EmailJS
    await sendOTPEmailJS(email, otpCode, fullName);
    
    return { 
      success: true, 
      message: 'Verification code sent to your email'
    };
  } catch (error) {
    console.error('Send EmailJS OTP Error:', error);
    throw error;
  }
};

// Verify OTP (same as before)
export const verifyEmailJSOTP = async ({ email, otpCode }: EmailJSOTPVerification) => {
  try {
    // Get latest OTP for email
    const { data: otpRecord, error: fetchError } = await supabase
      .from('simple_otp_codes')
      .select('*')
      .eq('email', email)
      .eq('verified', false)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !otpRecord) {
      return { 
        success: false, 
        error: 'No valid OTP found. Please request a new one.' 
      };
    }

    // Check attempts limit
    if (otpRecord.attempts >= OTP_MAX_ATTEMPTS) {
      return { 
        success: false, 
        error: 'Maximum attempts exceeded. Please request a new OTP.' 
      };
    }

    // Increment attempts
    await supabase
      .from('simple_otp_codes')
      .update({ attempts: otpRecord.attempts + 1 })
      .eq('id', otpRecord.id);

    // Verify code
    if (otpRecord.otp_code !== otpCode) {
      const remaining = OTP_MAX_ATTEMPTS - (otpRecord.attempts + 1);
      return { 
        success: false, 
        error: `Invalid code. ${remaining} attempt(s) remaining.` 
      };
    }

    // Mark as verified
    await supabase
      .from('simple_otp_codes')
      .update({ verified: true })
      .eq('id', otpRecord.id);

    return { 
      success: true, 
      message: 'OTP verified successfully!' 
    };
  } catch (error) {
    console.error('Verify EmailJS OTP Error:', error);
    return { 
      success: false, 
      error: 'Verification failed. Please try again.' 
    };
  }
};
