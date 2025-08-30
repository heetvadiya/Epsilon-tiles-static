import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Eye, ChevronDown, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products, categories, Product } from '../data/products';


interface ProductSectionProps {
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  maxProducts?: number;
  initialProductCount?: number;
  loadMoreCount?: number;
  layout?: 'grid' | 'masonry';
  className?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title = "Premium SPC Flooring Collection",
  subtitle = "Discover our range of luxury vinyl plank flooring that combines style, durability, and performance.",
  showFilters = true,
  maxProducts,
  initialProductCount = 8,
  loadMoreCount = 6,
  layout = 'grid',
  className = ""
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [displayedCount, setDisplayedCount] = useState<number>(initialProductCount);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for smooth transitions
    const timer = setTimeout(() => {
      let filtered = products;

      // Category filter
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }

      // Search filter
      if (searchTerm) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.features.some(feature => 
            feature.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      // Sort products
      filtered = filtered.sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'category':
            return a.category.localeCompare(b.category);
          case 'features':
            return b.features.length - a.features.length;
          default:
            return 0;
        }
      });

      setFilteredProducts(filtered);
      setIsLoading(false);
      
      // Reset displayed count when filters change (only if maxProducts is not set)
      if (!maxProducts) {
        setDisplayedCount(initialProductCount);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, sortBy, initialProductCount, maxProducts]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    
    // Add new products smoothly without skeleton loading
    setTimeout(() => {
      setDisplayedCount(prev => prev + loadMoreCount);
      setIsLoadingMore(false);
    }, 200);
  };

  const handleShowcase = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const getGridClasses = () => {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
  };

  // Get products to display (limited by maxProducts prop or displayedCount)
  const getDisplayedProducts = () => {
    if (maxProducts) {
      return filteredProducts.slice(0, maxProducts);
    }
    return filteredProducts.slice(0, displayedCount);
  };

  // Check if there are more products to load
  const hasMoreProducts = () => {
    if (maxProducts) return false; // No pagination when maxProducts is set
    return displayedCount < filteredProducts.length;
  };

  return (
    <motion.section
      className={`py-20 ${className} ${'bg-white'}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          variants={headerVariants}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            'text-gray-900'
          }`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${
            'text-gray-600'
          }`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Filters and Controls */}
        {showFilters && (
          <motion.div
            className="rounded-2xl shadow-lg p-6 mb-8 border bg-white border-gray-100"
            variants={filterVariants}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  'text-gray-400'
                }`} size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg transition-colors bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none border rounded-lg px-4 py-3 pr-8 transition-colors cursor-pointer bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  'text-gray-400'
                }`} size={16} />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border rounded-lg px-4 py-3 pr-8 transition-colors cursor-pointer bg-white border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="name">Sort by Name</option>
                  <option value="category">Sort by Category</option>
                  <option value="features">Sort by Features</option>
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  'text-gray-400'
                }`} size={16} />
              </div>
            </div>

            {/* Filter Summary */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className={'text-gray-600'}>
                Showing {getDisplayedProducts().length} of {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              {selectedCategory !== 'All' && (
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {selectedCategory}
                </span>
              )}
              {searchTerm && (
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  "{searchTerm}"
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              className={getGridClasses()}
              variants={loadingVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key="loading"
            >
              {[...Array(initialProductCount)].map((_, index) => (
                <motion.div
                  key={index}
                  className={`aspect-[4/3] rounded-2xl ${
                    'bg-gray-100'
                  } animate-pulse`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.3,
                        delay: index * 0.05
                      }
                    }
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className={getGridClasses()}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              key={`${selectedCategory}-${searchTerm}-${sortBy}`}
            >
              {getDisplayedProducts().map((product, index) => (
                <div
                  key={product.id}
                >
                  <ProductCard
                    product={product}
                    index={index}
                    onShowcase={handleShowcase}
                    layout='grid'
                    showQuickActions={true}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`text-6xl mb-4 ${
              'text-gray-300'
            }`}>
              🔍
            </div>
            <h3 className={`text-2xl font-semibold mb-2 ${
              'text-gray-900'
            }`}>
              No products found
            </h3>
            <p className={`mb-6 ${
              'text-gray-600'
            }`}>
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setSortBy('name');
              }}
              className="btn btn-primary"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {!isLoading && hasMoreProducts() && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 ${isLoadingMore ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
              whileHover={{ scale: isLoadingMore ? 1 : 1.05 }}
              whileTap={{ scale: isLoadingMore ? 1 : 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Plus size={20} className="mr-2" />
                {isLoadingMore ? 'Loading...' : `Load More (${filteredProducts.length - displayedCount} remaining)`}
              </span>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-primary/10 -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Loading progress bar */}
              {isLoadingMore && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ProductSection; 