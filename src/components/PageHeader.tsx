import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/6958526/pexels-photo-6958526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
}) => {
  return (
    <div 
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-gray-900 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Light overlay with gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90"></div>
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            textShadow: '2px 2px 8px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5)',
            filter: 'brightness(0.9)'
          }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              textShadow: '1px 1px 6px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.5)',
              filter: 'brightness(0.85)'
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;