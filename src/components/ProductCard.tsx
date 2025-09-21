import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Info } from 'lucide-react';


interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    images: string[];
    category: string;
    sizes: string[];
    thickness: {
      core: string;
      options: string[];
    };
    underpad: {
      type: string;
      thickness: string;
    };
    wearLayer: {
      thickness: string;
      options: string[];
    };
    features: string[];
    viewUrl: string;
  };
  index?: number;
  onShowcase?: (product: any) => void;
  showQuickActions?: boolean;
  layout?: 'grid' | 'masonry';
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  index = 0, 
  onShowcase,
  showQuickActions = true,
  layout = 'grid'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleCardClick = () => {
    if (!isFlipped) {
      onShowcase?.(product);
    }
  };

  const handleFlipToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShowcase?.(product);
  };

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.08
      }
    }
  };

  const aspectRatio = layout === 'masonry' ? 'aspect-[4/5]' : 'aspect-[4/3]';

  if (!isFlipped) {
    // Front Side - Simple card with image and name
    return (
      <motion.div 
        className={`relative cursor-pointer ${aspectRatio} group`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onClick={handleCardClick}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500 bg-white">
          {/* Image */}
          <div className="relative h-4/5 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback image if the original fails to load
                e.currentTarget.src = 'https://360.epsiloninc.in/uploads/preview/1147_FANCY_OAK.jpg';
              }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {product.category}
            </div>

            {/* Flip Button */}
            <button
              onClick={handleFlipToggle}
              className="absolute top-3 right-3 bg-gray-900/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-gray-900/90 transition-colors"
            >
              <Info size={16} />
            </button>

            {/* View Product Button - shown on hover */}
            <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={handleCardClick}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                style={{ 
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  filter: 'brightness(1.0)'
                }}
              >
                <Eye size={16} className="mr-2 inline" />
                View Details
              </button>
            </div>
          </div>

          {/* Product Name */}
          <div className="h-1/5 flex items-center justify-center p-4">
            <h3 className="text-lg font-bold text-center text-gray-900">
              {product.name}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  }

  // Back Side - Details
  return (
    <motion.div 
      className={`relative cursor-pointer ${aspectRatio}`}
      initial={{ rotateY: 180 }}
      animate={{ rotateY: 0 }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1000 }}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="p-6 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              {product.name}
            </h3>
            <button
              onClick={handleFlipToggle}
              className="p-2 rounded-full transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
          </div>

          {/* Features */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((feature, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: 'Size', value: product.sizes[0] },
                { label: 'Core', value: product.thickness.core },
                { label: 'Underpad', value: product.underpad.thickness },
                { label: 'Wear Layer', value: product.wearLayer.thickness }
              ].map((spec, idx) => (
                <div
                  key={spec.label}
                  className={`p-3 rounded-lg ${
                    'bg-gray-50'
                  }`}
                >
                  <div className={`font-medium mb-1 ${
                    'text-gray-900'
                  }`}>
                    {spec.label}
                  </div>
                  <div className={`text-xs ${
                    'text-gray-600'
                  }`}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-6">
            <button
              onClick={handleExploreClick}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <Eye size={16} className="mr-2" />
              Explore Product
            </button>
            
            <a
              href={product.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <ArrowRight size={16} className="mr-2" />
              View 360°
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;