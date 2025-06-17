import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { blogPosts, blogCategories } from '../data/blog';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => post.category === selectedCategory);
      setFilteredPosts(filtered);
    }
  }, [selectedCategory]);

  return (
    <div>
      <PageHeader 
        title="Blog & Articles" 
        subtitle="Expert insights on SPC flooring technology, design trends, and installation tips"
        backgroundImage="https://images.pexels.com/photos/6508794/pexels-photo-6508794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="section container">
        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {blogCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card card-hover h-full flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <User size={14} className="mr-1 text-muted-foreground" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="link"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  There are currently no articles in this category.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;