import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data/features';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  // Take first 4 products for the featured section
  const featuredProducts = products.slice(0, 4);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center text-white overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/4450335/pexels-photo-4450335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-32 left-16 w-6 h-6 bg-primary/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* Hero Content */}
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={heroItemVariants}
              className="flex items-center mb-4"
            >
              <Sparkles className="mr-2 text-primary" size={24} />
              <span className="text-primary font-medium">Premium SPC Flooring</span>
            </motion.div>
            
            <motion.h1 
              className="mb-6"
              variants={heroItemVariants}
            >
              Timeless Luxury in Every Step – FLORA by Epsilon
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl"
              variants={heroItemVariants}
            >
              Premium SPC flooring crafted with exquisite detail for those who demand the finest in durability, aesthetics, and environmental consciousness.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={heroItemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/collection" 
                  className="btn btn-primary btn-lg px-8 py-4"
                >
                  Explore Collection
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/why-spc" 
                  className="btn btn-outline btn-lg text-white border-white hover:bg-white/20 hover:text-white px-8 py-4"
                >
                  Learn About SPC
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="slideInLeft" duration={0.8}>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-6">Redefining Premium Flooring</h2>
              <p className="mb-4">
                FLORA by Epsilon combines cutting-edge technology with timeless design to create SPC (Stone Polymer Composite) flooring that exceeds the highest expectations for both residential and commercial spaces.
              </p>
              <p className="mb-6">
                Unlike traditional flooring, our innovative stone-core construction delivers exceptional durability, water resistance, and dimensional stability—all while preserving the authentic look and feel of natural materials.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="btn btn-outline px-8 py-3">
                  About Our Journey
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="slideInRight" duration={0.8}>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                rotateX: 2
              }}
              transition={{ duration: 0.4 }}
              style={{ perspective: 1000 }}
            >
              <img 
                src="https://images.pexels.com/photos/7061066/pexels-photo-7061066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FLORA SPC Flooring Installation" 
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-muted py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" direction="scale">
            <motion.h2 
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Signature Features
            </motion.h2>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our premium SPC flooring combines innovative technology with luxurious design to deliver unmatched performance and beauty.
            </motion.p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {features.slice(0, 8).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={<feature.icon size={24} />}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" direction="up">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Featured Collections
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our most popular SPC flooring options, crafted to elevate any interior with the perfect balance of beauty and performance.
          </motion.p>
        </AnimatedSection>
        
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
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/collection" className="btn btn-primary px-8 py-3">
              View All Collections
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-white overflow-hidden">
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
        
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center" direction="scale">
            <motion.h2 
              className="mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Space
            </motion.h2>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to elevate your interior with FLORA's premium SPC flooring? Connect with our design consultants for personalized recommendations.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-primary btn-lg px-8 py-4">
                  Contact Us
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white/20 hover:text-white px-8 py-4">
                  Request a Quote
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;