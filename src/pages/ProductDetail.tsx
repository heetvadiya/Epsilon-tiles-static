import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { getProductById, getRelatedProducts, Product } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
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
          <div className="space-y-4">
            <motion.div 
              className="bg-muted rounded-lg overflow-hidden aspect-square"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`w-24 h-24 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                    selectedImage === image 
                      ? 'ring-2 ring-primary' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <div className="text-lg text-primary font-medium mb-4">{product.category}</div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Size</h3>
                <p>{product.size}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Thickness</h3>
                <p>{product.thickness}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Wear Layer</h3>
                <p>{product.wearLayer}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">Underpad</h3>
                <p>{product.underpad}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8 space-x-4">
              <a 
                href={product.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full md:w-auto mb-4 py-4 px-2"
              >
                View 360° Interactive Display
              </a>
              
              <Link 
                to="/contact"
                className="btn btn-outline w-full md:w-auto py-4 px-2"
              >
                Request a Quote
              </Link>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                Need samples or have questions? Our flooring experts are here to help.
              </p>
              <Link 
                to="/contact"
                className="mt-2 inline-flex items-center text-primary hover:underline"
              >
                Contact us
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;