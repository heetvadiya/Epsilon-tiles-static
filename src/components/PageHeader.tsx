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
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;