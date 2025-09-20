-- EmailJS OTP System Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Create simple OTP codes table for email verification
CREATE TABLE IF NOT EXISTS simple_otp_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  otp_code VARCHAR(6) NOT NULL,
  purpose VARCHAR(50) NOT NULL DEFAULT 'PDF_DOWNLOAD',
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  attempts INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_simple_otp_email ON simple_otp_codes(email);
CREATE INDEX IF NOT EXISTS idx_simple_otp_verified ON simple_otp_codes(verified);
CREATE INDEX IF NOT EXISTS idx_simple_otp_expires_at ON simple_otp_codes(expires_at);
CREATE INDEX IF NOT EXISTS idx_simple_otp_email_verified ON simple_otp_codes(email, verified);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_simple_otp_codes_updated_at ON simple_otp_codes;

-- Create new trigger
CREATE TRIGGER update_simple_otp_codes_updated_at 
    BEFORE UPDATE ON simple_otp_codes 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add RLS (Row Level Security) policies
ALTER TABLE simple_otp_codes ENABLE ROW LEVEL SECURITY;

-- Policy for public access (since we're handling this at application level)
CREATE POLICY "Allow public access to simple_otp_codes" ON simple_otp_codes
  FOR ALL USING (true);

-- Update existing pdf_downloads table to add verified column (if not exists)
ALTER TABLE pdf_downloads 
ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS verification_method VARCHAR(10) DEFAULT 'email',
ADD COLUMN IF NOT EXISTS verified_at TIMESTAMP WITH TIME ZONE;

-- Create index on pdf_downloads verified column
CREATE INDEX IF NOT EXISTS idx_pdf_downloads_verified ON pdf_downloads(verified);

-- Function to get simple OTP statistics
CREATE OR REPLACE FUNCTION get_simple_otp_statistics(
  start_date DATE DEFAULT CURRENT_DATE - INTERVAL '30 days',
  end_date DATE DEFAULT CURRENT_DATE
)
RETURNS TABLE(
  date DATE,
  total_requests BIGINT,
  successful_verifications BIGINT,
  success_rate NUMERIC(5,2)
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    DATE(s.created_at) as date,
    COUNT(*) as total_requests,
    COUNT(CASE WHEN s.verified = true THEN 1 END) as successful_verifications,
    ROUND(
      (COUNT(CASE WHEN s.verified = true THEN 1 END) * 100.0 / COUNT(*)), 
      2
    ) as success_rate
  FROM simple_otp_codes s
  WHERE DATE(s.created_at) BETWEEN start_date AND end_date
  GROUP BY DATE(s.created_at)
  ORDER BY DATE(s.created_at) DESC;
END;
$$ LANGUAGE plpgsql;

-- Function to cleanup old OTP codes
CREATE OR REPLACE FUNCTION cleanup_old_simple_otp_codes()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    -- Delete expired OTP codes older than 1 hour
    DELETE FROM simple_otp_codes 
    WHERE expires_at < NOW() - INTERVAL '1 hour';
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Function to get recent OTP activity for an email
CREATE OR REPLACE FUNCTION get_recent_simple_otp_activity(
  contact_email VARCHAR,
  hours_back INTEGER DEFAULT 24
)
RETURNS TABLE(
  id UUID,
  email VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE,
  verified BOOLEAN,
  attempts INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    s.id,
    s.email,
    s.created_at,
    s.verified,
    s.attempts
  FROM simple_otp_codes s
  WHERE s.email = contact_email
    AND s.created_at > NOW() - (hours_back || ' hours')::INTERVAL
  ORDER BY s.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- Sample query to test the setup
-- SELECT * FROM get_simple_otp_statistics();

-- Create a view for easy analytics
CREATE OR REPLACE VIEW simple_otp_analytics AS
SELECT 
  DATE(created_at) as date,
  purpose,
  COUNT(*) as requests,
  COUNT(CASE WHEN verified THEN 1 END) as verified,
  ROUND(AVG(attempts), 2) as avg_attempts,
  ROUND(AVG(CASE WHEN verified THEN 1.0 ELSE 0.0 END) * 100, 2) as success_rate
FROM simple_otp_codes
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY DATE(created_at), purpose
ORDER BY date DESC, purpose;

-- Grant necessary permissions (adjust based on your setup)
-- GRANT SELECT, INSERT, UPDATE ON simple_otp_codes TO authenticated;
-- GRANT SELECT ON simple_otp_analytics TO authenticated;
