import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale' | 'rotate' | 'slideInLeft' | 'slideInRight' | 'stagger';
  staggerChildren?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  staggerChildren = 0.1,
  duration = 0.8,
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -60, scale: 0.95 },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'left':
      case 'slideInLeft':
        return {
          hidden: { opacity: 0, x: -80, rotateY: -15 },
          visible: { 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'right':
      case 'slideInRight':
        return {
          hidden: { opacity: 0, x: 80, rotateY: 15 },
          visible: { 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8, rotateZ: -5 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            rotateZ: 0,
            transition: {
              duration,
              delay,
              ease: [0.34, 1.56, 0.64, 1]
            }
          }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotateZ: -10, scale: 0.9 },
          visible: { 
            opacity: 1, 
            rotateZ: 0, 
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'stagger':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.3,
              delay,
              staggerChildren,
              delayChildren: 0.2
            }
          }
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: 'easeOut'
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;