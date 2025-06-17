import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react';
import { getBlogPostById, BlogPost as BlogPostType } from '../data/blog';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  
  useEffect(() => {
    if (id) {
      const blogPost = getBlogPostById(id);
      if (blogPost) {
        setPost(blogPost);
      }
    }
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h2>Article not found</h2>
        <Link to="/blog" className="mt-4 link">
          Return to Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Blog
          </Link>
        </div>
        
        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/90 text-white text-sm px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-muted-foreground mb-8 gap-6">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              {post.readTime} min read
            </div>
          </div>
        </motion.div>
        
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden mb-10"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .split('\n')
              .map(line => {
                // Handle markdown headings
                if (line.startsWith('# ')) {
                  return `<h1>${line.substring(2)}</h1>`;
                } else if (line.startsWith('## ')) {
                  return `<h2>${line.substring(3)}</h2>`;
                } else if (line.startsWith('### ')) {
                  return `<h3>${line.substring(4)}</h3>`;
                } else if (line.startsWith('- ')) {
                  return `<li>${line.substring(2)}</li>`;
                } else if (line.trim() === '') {
                  return '<br />';
                } else {
                  return `<p>${line}</p>`;
                }
              })
              .join('') 
          }}
        />
        
        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;