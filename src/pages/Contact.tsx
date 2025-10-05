import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [captchaValue, setCaptchaValue] = React.useState<string | null>(null);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  
  // Get reCAPTCHA site key from environment variables
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Ldled8rAAAAAK71QcgL9910YQ9cI9u3CBybtIwn';

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted with captcha:', captchaValue);
    alert('Message sent successfully!');
    
    // Reset reCAPTCHA
    recaptchaRef.current?.reset();
    setCaptchaValue(null);
  };
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, quotes, or consultation"
        backgroundImage="https://360.epsiloninc.in/uploads/preview/2730_ACACIA_BROWN.jpg"
      />
      
      <section className="section container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our SPC flooring products or need personalized recommendations? Our team of experts is here to help you find the perfect flooring solution for your space.
            </p>
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Visit Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-6 rounded-xl shadow-sm border border-border text-center hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">Visit Us</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Corporate Office</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  410, Golden Market,<br />
                  Ravvapor road, Morbi-363641<br />
                  (GUJ.) INDIA
                </p>
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm font-medium text-primary mb-1">Factory</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sr. No. 847/1 & 847/1/1,<br />
                  At Ghuntu, Lakhadipur road,<br />
                  8-A National Highway,<br />
                  Morbi-363642 (GUJ.) INDIA
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-6 rounded-xl shadow-sm border border-border text-center hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Email Us</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-primary mb-2">General Inquiries</p>
                <a 
                  href="mailto:info@epsilontile.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  info@epsilontile.com
                </a>
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm font-medium text-primary mb-2">Export Inquiries</p>
                <a 
                  href="mailto:export@epsilontile.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  export@epsilontile.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Call Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-6 rounded-xl shadow-sm border border-border text-center hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Call Us</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Phone</p>
                <div className="space-y-1">
                  <a 
                    href="tel:+919712712701" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 9712712701
                  </a>
                  <a 
                    href="tel:+919712712702" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +91 9712712702
                  </a>
                </div>
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-sm font-medium text-primary mb-2">Customer Care</p>
                <a 
                  href="tel:+912822356097" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  +91 2822356097
                </a>
              </div>
            </div>
          </motion.div>

          {/* Business Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-6 rounded-xl shadow-sm border border-border text-center hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary" size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Mon - Fri</span>
                <span className="font-medium">9am - 6pm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-medium">9am - 1pm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium text-red-500">Closed</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border/50">
                All times in IST
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-border">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Send Us a Message</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Ready to transform your space? Let's discuss your flooring needs.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="input w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="input w-full"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="quotation">Request Quotation</option>
                  <option value="installation">Installation Support</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="input w-full"
                  placeholder="Tell us about your flooring needs..."
                  required
                ></textarea>
              </div>
              
              {/* reCAPTCHA v2 */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaSiteKey}
                  onChange={handleCaptchaChange}
                  theme="light"
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button type="submit" variant="primary" className="px-12 py-3 text-lg">
                  Send Message
                </Button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Expert Team</p>
                  <p className="text-sm text-muted-foreground">Professional flooring consultants</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Quality Assured</p>
                  <p className="text-sm text-muted-foreground">Premium SPC flooring products</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Quick Response</p>
                  <p className="text-sm text-muted-foreground">24-hour response guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <div className="bg-muted rounded-lg overflow-hidden h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.5564380780849!2d70.8246783167412!3d22.794097395388377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598db930b83f67%3A0x6b37f7cd00695d6b!2sEPSILON%20TILE%20LLP!5e0!3m2!1sen!2sin!4v1751635349752!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="EPSILON TILE LLP Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;