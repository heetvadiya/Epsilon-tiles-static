import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Move } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
  onSliderChange?: (position: number) => void;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  className = '',
  title = 'Room Transformation',
  beforeLabel = 'Before',
  afterLabel = 'After',
  onSliderChange
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloadImages = () => {
      const images = [beforeImage, afterImage];
      let loaded = 0;
      
      images.forEach(src => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          setLoadedImages(loaded);
          if (loaded === images.length) {
            setIsImagesLoaded(true);
          }
        };
        img.src = src;
      });
    };

    preloadImages();
  }, [beforeImage, afterImage]);

  useEffect(() => {
    onSliderChange?.(sliderPosition);
  }, [sliderPosition, onSliderChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const resetSlider = () => {
    setSliderPosition(50);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3
      }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5
      }
    }
  };

  if (!isImagesLoaded) {
    return (
      <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-gray-600 text-sm">
              Loading images... {loadedImages}/2
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      {title && (
        <motion.div
          className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2"
          variants={labelVariants}
        >
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </motion.div>
      )}

      {/* Reset Button */}
      <motion.button
        onClick={resetSlider}
        className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-2 hover:bg-white transition-colors"
        variants={labelVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <RotateCcw size={20} className="text-gray-700" />
      </motion.button>

      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
          variants={sliderVariants}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize hover:bg-primary hover:text-white transition-colors">
            <Move size={20} />
          </div>
        </motion.div>

        {/* Labels */}
        <motion.div
          className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium"
          variants={labelVariants}
        >
          {beforeLabel}
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium"
          variants={labelVariants}
        >
          {afterLabel}
        </motion.div>

        {/* Instruction Text */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-700 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Move size={16} className="inline mr-2" />
          Drag to compare
        </motion.div>

        {/* Overlay for dragging */}
        {isDragging && (
          <div className="absolute inset-0 z-30 cursor-ew-resize" />
        )}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: '50%' }}
          animate={{ width: `${sliderPosition}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default BeforeAfterSlider; 