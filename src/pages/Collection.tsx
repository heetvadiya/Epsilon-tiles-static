import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProductSection from '../components/ProductSection';
import { useTheme } from '../context/ThemeContext';

const Collection: React.FC = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
    >
      <PageHeader 
        title="Premium Flooring Collections" 
        subtitle="Discover our complete range of luxury SPC flooring designed for exceptional quality, durability, and timeless elegance"
        backgroundImage="https://images.pexels.com/photos/6508935/pexels-photo-6508935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <motion.div 
        className="section"
        variants={sectionVariants}
      >
        <ProductSection
          title="Complete SPC Flooring Collection"
          subtitle="Browse our comprehensive range of premium SPC flooring options, each crafted to meet the highest standards of quality and style. From classic wood looks to contemporary stone patterns, find the perfect flooring solution for your space."
          showFilters={true}
          layout="grid"
          className="pt-0"
          initialProductCount={8}
          loadMoreCount={8}
        />
      </motion.div>

      {/* Call to Action Section */}
      <motion.section 
        className={`relative py-16 text-white overflow-hidden`}
        variants={sectionVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with our flooring experts for personalized recommendations and professional installation services.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Samples
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Collection;