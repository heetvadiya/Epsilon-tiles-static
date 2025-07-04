import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
    setIsResourcesOpen(false);
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why SPC?', path: '/why-spc' },
    { name: 'Collection', path: '/collection' },
    { name: 'Contact', path: '/contact' },
  ];

  const resourcesLinks = [
    { name: 'Specifications', path: '/specifications' },
    { name: 'Packing Details', path: '/packing' },
    { name: 'Installation Guide', path: '/installation-guide' },
  ];

  const headerVariants = {
    transparent: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      transition: { duration: 0.3 }
    },
    scrolled: {
      backgroundColor: theme === 'dark' ? 'rgba(25, 25, 25, 0.9)' : 'rgba(245, 245, 240, 0.9)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: { duration: 0.3 }
    }
  };

  const navItemVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -2, 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  // Choose logo based on theme
  const logoSrc = theme === 'dark' 
    ? "/light-logo.png" 
    : "/dark-logo.png";

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 py-4"
      variants={headerVariants}
      animate={isScrolled ? 'scrolled' : 'transparent'}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          whileHover="hover"
          className="flex-shrink-0"
        >
          <Link to="/" className="flex items-center">
            <img 
              src={logoSrc}
              alt="FLORA by Epsilon" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              variants={navItemVariants}
              initial="initial"
              whileHover="hover"
              custom={index}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          
          {/* Resources Dropdown */}
          <div className="relative">
            <motion.button
              className="nav-link flex items-center"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              variants={navItemVariants}
              initial="initial"
              whileHover="hover"
            >
              Resources
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} 
              />
            </motion.button>
            
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary btn-sm ml-4 px-6 py-2">
              Inquire
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex items-center text-foreground z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={mobileNavItemVariants}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `block py-2 ${isActive ? 'text-primary font-medium' : 'text-foreground'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Mobile Resources */}
              <motion.div variants={mobileNavItemVariants}>
                <div className="py-2 text-foreground font-medium">Resources</div>
                <div className="ml-4 space-y-2">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block py-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                variants={mobileNavItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="btn btn-primary btn-sm self-start mt-2 px-6 py-2"
                >
                  Inquire
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;