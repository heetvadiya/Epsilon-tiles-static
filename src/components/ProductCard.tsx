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
    thickness: string;
    size: string;
    wearLayer: string;
  };
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1, rotateZ: 0 },
    hover: { 
      scale: 1.1, 
      rotateZ: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const overlayVariants = {
    rest: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: 1, 
      scale: 1,
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
      className="card overflow-hidden group cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      initial="rest"
      style={{ perspective: 1000 }}
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover"
          variants={imageVariants}
        />
        
        {/* Animated overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
          variants={overlayVariants}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Link 
              to={`/collection/${product.id}`}
              className="btn btn-primary btn-sm backdrop-blur-sm"
            >
              <Eye size={16} className="mr-1" />
              360° View
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating category badge */}
        <motion.div
          className="absolute top-4 left-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {product.category}
          </span>
        </motion.div>
      </div>
      
      <motion.div className="p-4" variants={contentVariants}>
        <motion.h3 
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
        >
          {product.name}
        </motion.h3>
        
        <motion.div 
          className="space-y-1 text-sm text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
        >
          <p>Size: {product.size}</p>
          <p>Thickness: {product.thickness}</p>
          <p>Wear Layer: {product.wearLayer}</p>
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