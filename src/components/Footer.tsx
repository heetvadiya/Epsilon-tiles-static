import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  // Choose logo based on theme
  const logoSrc = theme === 'dark' 
    ? "/Flora_by_epsilon_Logo__2_-removebg-preview.png" 
    : "/Flora by epsilon Logo (1).png";

  return (
    <footer className="bg-muted text-muted-foreground pt-16 pb-8 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logoSrc}
                alt="FLORA by Epsilon" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm md:text-base">
              Timeless Luxury in Every Step. Premium SPC flooring solutions crafted for exceptional durability and refined aesthetics.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Why SPC?', path: '/why-spc' },
                { name: 'Collection', path: '/collection' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Specifications', path: '/specifications' },
                { name: 'Packing Details', path: '/packing' },
                { name: 'Installation Guide', path: '/installation-guide' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="flex items-center hover:text-primary transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} FLORA by Epsilon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;