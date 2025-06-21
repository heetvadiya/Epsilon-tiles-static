import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Eye, Grid } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import Product360Card from '../components/Product360Card';
import { products, categories } from '../data/products';
import { products360, categories360 } from '../data/360products';

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filtered360Products, setFiltered360Products] = useState(products360);
  const [activeTab, setActiveTab] = useState<'regular' | '360'>('regular');

  useEffect(() => {
    // Filter regular products
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);

    // Filter 360 products
    const filtered360 = products360.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    setFiltered360Products(filtered360);
  }, [selectedCategory, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const tabVariants = {
    inactive: { 
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(115, 115, 115)',
      scale: 1
    },
    active: { 
      backgroundColor: 'rgb(203, 218, 94)',
      color: 'white',
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div>
      <PageHeader 
        title="Our Collections" 
        subtitle="Explore our premium SPC flooring collections designed for exceptional quality and timeless elegance"
        backgroundImage="https://images.pexels.com/photos/6508935/pexels-photo-6508935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="section container">
        {/* Collection Type Tabs */}
        <motion.div 
          className="flex justify-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-muted rounded-lg p-1 flex">
            <motion.button
              onClick={() => setActiveTab('regular')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeTab === 'regular' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
              variants={tabVariants}
              animate={activeTab === 'regular' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Grid size={18} className="mr-2" />
              Product Collection
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('360')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeTab === '360' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
              variants={tabVariants}
              animate={activeTab === '360' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={18} className="mr-2" />
              360° View Collection
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Filters */}
        <motion.div 
          className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={filterVariants}
          >
            <motion.div
              className="flex items-center mb-2 mr-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Filter size={18} className="mr-2 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
            </motion.div>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-muted hover:bg-muted-foreground/10 hover:scale-105'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="relative w-full md:w-64"
            variants={filterVariants}
          >
            <motion.input
              type="text"
              placeholder="Search collections..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileFocus={{ scale: 1.02 }}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </motion.div>
        </motion.div>
        
        {/* Products Grid with Advanced Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + selectedCategory + searchTerm}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'regular' ? (
              // Regular Products
              filteredProducts.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  layout
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateY: 0,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.8, 
                        rotateY: 15,
                        transition: { duration: 0.3 }
                      }}
                      whileHover={{ 
                        y: -10,
                        rotateX: 5,
                        transition: { duration: 0.3 }
                      }}
                      style={{ perspective: 1000 }}
                    >
                      <ProductCard product={product} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3 
                    className="text-2xl mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    No products found
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Try adjusting your filter or search criteria
                  </motion.p>
                </motion.div>
              )
            ) : (
              // 360° Products
              filtered360Products.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  layout
                >
                  {filtered360Products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateY: 0,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.8, 
                        rotateY: 15,
                        transition: { duration: 0.3 }
                      }}
                      whileHover={{ 
                        y: -10,
                        rotateX: 5,
                        transition: { duration: 0.3 }
                      }}
                      style={{ perspective: 1000 }}
                    >
                      <Product360Card product={product} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3 
                    className="text-2xl mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    No 360° products found
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Try adjusting your filter or search criteria
                  </motion.p>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Info Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">
              {activeTab === '360' ? 'Experience Our Products in 360°' : 'Discover Our Premium Collection'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {activeTab === '360' 
                ? 'Explore our flooring products with immersive 360° views. See every detail, texture, and finish before making your decision.'
                : 'Browse our comprehensive collection of premium SPC flooring options, each designed to elevate your space with exceptional quality and style.'
              }
            </p>
            {activeTab === 'regular' && (
              <motion.button
                onClick={() => setActiveTab('360')}
                className="btn btn-primary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={18} className="mr-2" />
                Try 360° View Collection
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collection;