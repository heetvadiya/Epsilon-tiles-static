import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const NotFound: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Collection', path: '/collection', icon: Search },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Installation Guide', path: '/installation-guide', icon: ArrowLeft },
  ];

  return (
    <div>
      <PageHeader 
        title="Page Not Found" 
        subtitle="The page you're looking for seems to have wandered off like a misplaced floor plank"
        backgroundImage="https://360.epsiloninc.in/uploads/preview/5072_DARK_PADAUK.jpg"
      />
      
      <section className="section container">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Animation */}
          <AnimatedSection direction="scale" className="mb-12">
            <motion.div 
              className="relative mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-200 leading-none"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(103, 126, 234, 0.3)",
                    "0 0 30px rgba(103, 126, 234, 0.5)",
                    "0 0 20px rgba(103, 126, 234, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.h1>
              
              {/* Floating floor planks animation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-sm shadow-lg"
                    style={{
                      top: `${30 + i * 15}%`,
                      left: `${40 + i * 8}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Error Message */}
          <AnimatedSection direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Oops! This Floor Needs Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              It looks like the page you're trying to reach has been removed, relocated, or never existed. 
              Just like a damaged floor plank, sometimes things need to be replaced with something better!
            </p>
          </AnimatedSection>

          {/* Quick Navigation */}
          <AnimatedSection direction="up" delay={0.2} className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Let's get you back on solid ground:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Link 
                    to={link.path}
                    className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 group"
                  >
                    <link.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {link.name}
                    </h4>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Main CTA */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <Link to="/collection">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Collection
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <AnimatedSection direction="up" className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              While you're here, discover what makes FLORA special:
            </h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Premium Quality",
                description: "Industry-leading SPC flooring with unmatched durability and style",
                image: "https://360.epsiloninc.in/uploads/preview/6508_EMORY_OAK.jpg"
              },
              {
                title: "Easy Installation", 
                description: "Click-lock technology for quick and professional installation",
                image: "https://360.epsiloninc.in/uploads/preview/1756_CLASSIC_OAK.jpg"
              },
              {
                title: "Waterproof Design",
                description: "100% waterproof construction perfect for any room in your home",
                image: "https://360.epsiloninc.in/uploads/preview/8272_ASPEN_WHITE.jpg"
              }
            ].map((feature, index) => (
              <AnimatedSection 
                key={feature.title}
                direction="up" 
                delay={0.1 * index}
                className="text-center"
              >
                <motion.div
                  className="relative h-48 mb-4 rounded-lg overflow-hidden shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                
                <h4 className="font-semibold text-lg mb-2 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <AnimatedSection direction="scale">
            <h3 className="text-2xl font-bold mb-4">
              Still can't find what you're looking for?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Our flooring experts are here to help you find the perfect solution for your space.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
