import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { features } from '../data/features';
import PDFDownloadButton from '../components/PDFDownloadButton';

const WhySPC: React.FC = () => {
  const layerData = [
    { name: 'UV Coating Layer', desc: 'Protects from fading and staining', color: 'bg-gradient-to-r from-primary/20 to-primary/30', icon: Shield },
    { name: 'Wear Layer', desc: 'Provides scratch and dent resistance', color: 'bg-gradient-to-r from-primary/30 to-primary/50', icon: Shield },
    { name: 'Decor Film Layer', desc: 'Delivers realistic wood or stone aesthetics', color: 'bg-gradient-to-r from-primary/50 to-primary/70', icon: Layers },
    { name: 'SPC Core', desc: 'Dense, stable, and waterproof foundation', color: 'bg-gradient-to-r from-primary/70 to-primary/90', icon: Shield },
    { name: 'Underlayment', desc: 'Enhances comfort and sound absorption', color: 'bg-gradient-to-r from-primary/90 to-primary', icon: Droplets }
  ];

  const comparisonData = [
    { feature: 'Water Resistance', spc: 'Excellent', laminate: 'Poor', hardwood: 'Poor', ceramic: 'Excellent' },
    { feature: 'Durability', spc: 'Excellent', laminate: 'Good', hardwood: 'Good', ceramic: 'Excellent' },
    { feature: 'Comfort Underfoot', spc: 'Very Good', laminate: 'Fair', hardwood: 'Good', ceramic: 'Poor' },
    { feature: 'Installation Ease', spc: 'Excellent', laminate: 'Good', hardwood: 'Poor', ceramic: 'Poor' },
    { feature: 'Maintenance', spc: 'Minimal', laminate: 'Moderate', hardwood: 'High', ceramic: 'Moderate' },
    { feature: 'Acoustic Properties', spc: 'Very Good', laminate: 'Poor', hardwood: 'Fair', ceramic: 'Poor' },
    { feature: 'Radiant Heat Compatible', spc: 'Yes', laminate: 'Limited', hardwood: 'Limited', ceramic: 'Yes' },
  ];

  return (
    <div>
      <PageHeader 
        title="Why Choose SPC Flooring?" 
        subtitle="Discover the revolutionary benefits of Stone Polymer Composite flooring technology"
        backgroundImage="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="slideInLeft" duration={0.8}>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-6">What is SPC Flooring?</h2>
              <p className="mb-4">
                Stone Polymer Composite (SPC) flooring represents the latest evolution in resilient flooring technology. Unlike traditional luxury vinyl, SPC features a rigid core composed of limestone powder, polyvinyl chloride, and stabilizers to create an incredibly stable and durable foundation.
              </p>
              <p className="mb-6">
                This innovative construction delivers exceptional performance benefits that surpass traditional flooring options, making it ideal for both residential and commercial applications where beauty and durability are paramount.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/collection" 
                  className="btn btn-primary px-8 py-3"
                >
                  Explore Our Collection
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="slideInRight" duration={0.8}>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                rotateX: 2
              }}
              transition={{ duration: 0.4 }}
              style={{ perspective: 1000 }}
            >
              <img 
                src="https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SPC Flooring Close-up" 
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Layer Construction with Advanced Animations */}
      <section className="section bg-muted py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" direction="scale">
            <h2 className="mb-4">SPC Layer Construction</h2>
            <p className="text-muted-foreground">
              SPC flooring's exceptional performance stems from its advanced multi-layer construction, with each layer contributing specific benefits.
            </p>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {layerData.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  className={`${layer.color} p-6 rounded-lg shadow-sm relative overflow-hidden`}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      x: index % 2 === 0 ? -100 : 100,
                      rotateY: index % 2 === 0 ? -15 : 15
                    },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      rotateY: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: index % 2 === 0 ? 10 : -10,
                    transition: { duration: 0.3 }
                  }}
                  style={{ perspective: 1000 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <layer.icon size={120} className="absolute top-4 right-4" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl font-bold mb-1 flex items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <layer.icon size={24} className="mr-3" />
                      {layer.name}
                    </motion.h3>
                    <motion.p 
                      className="text-card-foreground/80"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {layer.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits & Features with Staggered Grid Animation */}
      <section className="section container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="scale">
            <h2 className="mb-4">Unmatched Benefits</h2>
            <p className="text-muted-foreground">
              FLORA SPC flooring combines innovative technology with luxurious design to deliver unparalleled performance and beauty.
            </p>
          </AnimatedSection>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card p-6"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60,
                  rotateX: -15,
                  scale: 0.8
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <motion.div 
                className="feature-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <feature.icon size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Comparison Section with Table Animation */}
      <section className="section bg-muted py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" direction="scale">
            <h2 className="mb-4">How SPC Compares</h2>
            <p className="text-muted-foreground">
              See how FLORA SPC flooring compares to traditional flooring options across key performance metrics.
            </p>
          </AnimatedSection>
          
          <div className="overflow-x-auto">
            <motion.table 
              className="w-full border-collapse min-w-[800px] bg-card rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.thead
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">FLORA SPC</th>
                  <th className="p-4 text-center">Laminate</th>
                  <th className="p-4 text-center">Hardwood</th>
                  <th className="p-4 text-center">Ceramic Tile</th>
                </tr>
              </motion.thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr 
                    key={row.feature}
                    className={`${index % 2 === 0 ? 'bg-card' : 'bg-background'} border-b border-border`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ 
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <motion.td 
                      className="p-4 text-center font-semibold text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      {row.spc}
                    </motion.td>
                    <td className="p-4 text-center">{row.laminate}</td>
                    <td className="p-4 text-center">{row.hardwood}</td>
                    <td className="p-4 text-center">{row.ceramic}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>
      
      {/* Download Specs */}
      <section className="section container">
        <div className="text-center">
          <AnimatedSection direction="scale">
            <h2 className="mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              FLORA SPC flooring meets or exceeds all industry standards for performance and safety. Download our comprehensive technical documentation for detailed specifications.
            </p>
            
            <PDFDownloadButton
              pdfUrl="/pdfs/specifications.pdf"
              label="Download Full Specifications"
            />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonial with Floating Animation */}
      <section className="py-20 bg-primary/10 overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto" direction="scale">
            <motion.div 
              className="text-6xl text-primary mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              "
            </motion.div>
            <motion.blockquote 
              className="text-2xl md:text-3xl font-serif italic mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              After evaluating numerous flooring options for our global hotel chain, FLORA SPC flooring proved to be the perfect solution for combining luxury aesthetics with commercial-grade durability and sustainability.
            </motion.blockquote>
            <motion.cite 
              className="text-lg font-medium block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              — James Harrington, Chief Design Officer, Luxury Hotels International
            </motion.cite>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA with Parallax Effect */}
      <section className="section container">
        <motion.div 
          className="bg-card shadow-lg rounded-lg p-8 md:p-12 text-center overflow-hidden relative"
          whileInView={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          
          <AnimatedSection direction="scale">
            <h2 className="mb-4">Ready to Experience the Difference?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore FLORA's premium SPC flooring collections and discover the perfect solution for your residential or commercial space.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/collection" className="btn btn-primary btn-lg px-8 py-4">
                  View Collections
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-outline btn-lg px-8 py-4">
                  Contact a Specialist
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </motion.div>
      </section>
    </div>
  );
};

export default WhySPC;