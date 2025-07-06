import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
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
  };
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.1 + 0.2,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1 + 0.3
      }
    }
  };

  return (
    <motion.div 
      className="card card-hover group cursor-pointer relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      style={{ perspective: 1000 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          variants={imageVariants}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <motion.div 
          className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        >
          {product.category}
        </motion.div>

        {/* Hover overlay with view details */}
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="text-white text-center"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Eye size={32} className="mx-auto mb-2" />
            <p className="text-sm font-medium">View Details</p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div className="p-4" variants={contentVariants}>
        <motion.h3 
          className="text-xl font-semibold mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
        >
          {product.name}
        </motion.h3>
        
        <motion.div 
          className="space-y-2 text-sm text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
        >
          {/* Size */}
          <div className="flex justify-between">
            <span className="font-medium">SIZE:</span>
            <span className="text-right">{product.sizes.join(' / ')}</span>
          </div>
          
          {/* Thickness */}
          <div className="flex justify-between">
            <span className="font-medium">THICKNESS (CORE):</span>
            <span className="text-right">{product.thickness.core}</span>
          </div>
          
          {/* Underpad */}
          <div className="flex justify-between">
            <span className="font-medium">UNDERPAD ({product.underpad.type}):</span>
            <span className="text-right">{product.underpad.thickness}</span>
          </div>
          
          {/* Wear Layer */}
          <div className="flex justify-between">
            <span className="font-medium">WEAR LAYER:</span>
            <span className="text-right">{product.wearLayer.thickness}</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
        >
          <Link 
            to={`/collection/${product.id}`}
            className="inline-flex items-center link group"
          >
            View Details
            <ArrowRight 
              size={16} 
              className="ml-1 transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;