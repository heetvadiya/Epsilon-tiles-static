import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle, ArrowRight, ZoomIn, X, Eye, Maximize2 } from 'lucide-react';
import { getProductById, getRelatedProducts, Product } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const view360Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (id) {
      const productData = getProductById(id);
      if (productData) {
        setProduct(productData);
        setSelectedImage(productData.image);
        setRelatedProducts(getRelatedProducts(id));
      }
    }
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const scrollTo360View = () => {
    view360Ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Generate tile images for visualization (4 rectangular tiles)
  const tileImages = product ? [
    product.images[0] || product.image,
    product.images[1] || product.image,
    product.images[2] || product.image,
    product.images[3] || product.image,
    product.images[4] || product.image // Repeat main image for 4th tile
  ] : [];

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2>Product not found</h2>
        <Link to="/collection" className="mt-4 link">
          Return to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/collection" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Collections
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Hero Image */}
            <motion.div 
              className="bg-muted rounded-lg overflow-hidden aspect-square relative group cursor-zoom-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setZoomedImage(selectedImage)}
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ZoomIn size={32} className="text-white drop-shadow-lg" />
                </motion.div>
              </div>
            </motion.div>

            {/* Tile Gallery - 4 Horizontal Rectangular Tiles */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Individual Tile Preview</h3>
              <div className="grid grid-cols-2 gap-4">
                {tileImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-zoom-in bg-background-secondary rounded-lg overflow-hidden border border-border snap-start"
                    style={{ 
                      aspectRatio: '1/4',
                      height: '360px',
                      width: '100px'
                    }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setZoomedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} tile ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Maximize2 size={20} className="text-white drop-shadow-lg" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <div className="text-lg text-primary font-medium mb-4">{product.category}</div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Available Sizes */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-lg mb-4">Available Sizes</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.sizes.map((size, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium">{size}</span>
                    <CheckCircle size={16} className="text-primary" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Key Features - 2x2 Grid */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-lg mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                onClick={scrollTo360View}
                className="btn btn-primary w-full py-4 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={20} />
                <span>View 360° Interactive Display</span>
              </motion.button>
              
              <Link 
                to="/contact"
                className="btn btn-outline w-full py-4 text-center block"
              >
                Request a Quote
              </Link>
            </div>
            
            {/* Help Section */}
            <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
              <p className="text-sm mb-2">
                <strong>Need samples or have questions?</strong> Our flooring experts are here to help.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Contact us
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 360° View Section */}
        <motion.div 
          ref={view360Ref}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">360° Interactive View</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our {product.name} in an immersive 360° environment. 
              Rotate, zoom, and explore every detail of this premium flooring option.
            </p>
          </div>
          
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted"
            style={{ height: '700px' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <iframe 
              src={product.viewUrl}
              width="100%" 
              height="100%"
              allowFullScreen
              style={{ border: 'none' }}
              title={`360° view of ${product.name}`}
              className="rounded-2xl"
            />
          </motion.div>
        </motion.div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={zoomedImage}
                alt="Zoomed product"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;