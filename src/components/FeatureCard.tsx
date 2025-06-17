import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  delay = 0,
  index = 0
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateY: index % 2 === 0 ? -15 : 15,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: delay + (index * 0.1),
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1, 
      rotate: 0,
      background: 'rgba(212, 175, 55, 0.1)'
    },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      background: 'rgba(212, 175, 55, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const contentVariants = {
    rest: { y: 0 },
    hover: { 
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div 
      className="card card-hover p-6 flex flex-col items-center text-center group cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      animate="rest"
      style={{ perspective: 1000 }}
    >
      <motion.div 
        className="feature-icon"
        variants={iconVariants}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + (index * 0.1) + 0.3,
            ease: 'easeOut'
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
      
      <motion.div variants={contentVariants}>
        <motion.h3 
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + (index * 0.1) + 0.4 
          }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + (index * 0.1) + 0.5 
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;