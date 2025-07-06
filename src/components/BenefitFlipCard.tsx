import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../data/features';

interface BenefitFlipCardProps {
  feature: Feature;
  index: number;
  backgroundImage?: string;
}

const BenefitFlipCard: React.FC<BenefitFlipCardProps> = ({ feature, index, backgroundImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fallback image if backgroundImage is undefined
  const bgImage = backgroundImage || 'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const cardVariants = {
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
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      className="relative h-64 w-full perspective-1000"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => !isMobile && setIsFlipped(true)}
      onHoverEnd={() => !isMobile && setIsFlipped(false)}
      onClick={handleInteraction}
      whileHover={!isMobile ? { 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      } : {}}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white">
            <motion.div
              className="mb-4 p-3 rounded-full bg-white/20 backdrop-blur-sm"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 10,
                transition: { duration: 0.2 }
              }}
            >
              <feature.icon size={32} className="text-white drop-shadow-lg" />
            </motion.div>
            
            <motion.h3 
              className="text-xl font-bold text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                filter: 'brightness(1.1)'
              }}
            >
              {feature.title}
            </motion.h3>
            
            {/* Subtle hint for interaction */}
            <motion.div
              className="mt-4 text-xs text-white/80 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              {isMobile ? 'Tap to learn more' : 'Hover to learn more'}
            </motion.div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="h-full bg-gradient-to-br from-card to-card/90 dark:from-card dark:to-muted border border-border">
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <motion.div
                className="mb-4 p-2 rounded-full bg-primary/20"
                initial={{ scale: 0 }}
                animate={{ scale: isFlipped ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <feature.icon size={24} className="text-primary" />
              </motion.div>
              
              <motion.h3 
                className="text-lg font-semibold mb-3 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isFlipped ? 1 : 0, 
                  y: isFlipped ? 0 : 20 
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isFlipped ? 1 : 0, 
                  y: isFlipped ? 0 : 20 
                }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {feature.description}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BenefitFlipCard; 