import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, quotes, or consultation"
        backgroundImage="https://images.pexels.com/photos/6508802/pexels-photo-6508802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border h-full">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our SPC flooring products or need personalized recommendations? Our team of experts is here to help you find the perfect flooring solution for your space.
              </p>
              
              <div className="space-y-8">
                {/* Offices - Side by Side */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-medium">Visit Us</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Corporate Office</p>
                      <p className="text-muted-foreground text-sm">
                        410, Golden Market,<br />
                        Ravvapor road, Morbi-363641<br />
                        (GUJ.) INDIA
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Factory</p>
                      <p className="text-muted-foreground text-sm">
                        Sr. No. 847/1 & 847/1/1,<br />
                        At Ghuntu, Lakhadipur road,<br />
                        8-A National Highway,<br />
                        Morbi-363642 (GUJ.) INDIA
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Email and Phone - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email Us</h3>
                      <div className="space-y-1">
                        <p className="text-muted-foreground text-sm">
                          <a href="mailto:info@epsilontile.com" className="hover:text-primary transition-colors">
                            info@epsilontile.com
                          </a>
                        </p>
                        <p className="text-muted-foreground text-sm">
                          <a href="mailto:export@epsilontile.com" className="hover:text-primary transition-colors">
                            export@epsilontile.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Call Us</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-primary mb-1">Phone:</p>
                          <p className="text-muted-foreground text-sm">
                            <a href="tel:+919712712701" className="hover:text-primary transition-colors">
                              +91 9712712701
                            </a> / 
                            <a href="tel:+919712712702" className="hover:text-primary transition-colors">
                              02
                            </a>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary mb-1">Customer Care:</p>
                          <p className="text-muted-foreground text-sm">
                            <a href="tel:+912822356097" className="hover:text-primary transition-colors">
                              +91 2822356097
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9am - 6pm IST<br />
                      Saturday: 9am - 1pm IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border h-full">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="input w-full"
                    placeholder="Tell us about your flooring needs, room size, or any specific requirements..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for updates and special offers
                  </label>
                </div>
                
                <Button type="submit" variant="primary" className="w-full px-8 py-3">
                  Send Message
                </Button>
              </form>

              {/* Additional Info - Moved from left side */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="text-primary" size={20} />
                    </div>
                    <p className="text-sm font-medium">Expert Team</p>
                    <p className="text-xs text-muted-foreground">Professional Support</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="text-primary" size={20} />
                    </div>
                    <p className="text-sm font-medium">Quality Assured</p>
                    <p className="text-xs text-muted-foreground">Premium Products</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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