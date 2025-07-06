import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Maximize, Eye, Info, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../data/products';

interface ProductShowcaseProps {
  product: Product;
  onClose?: () => void;
}

interface RoomContext {
  id: string;
  name: string;
  image: string;
  beforeImage: string;
  afterImage: string;
}

const roomContexts: RoomContext[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'office',
    name: 'Office',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeImage: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    beforeImage: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState<'specifications' | 'features' | 'installation'>('specifications');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('living-room');
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex justify-between items-center mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="text-white hover:text-primary transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <h1 className="text-2xl font-bold text-white">{product.name}</h1>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-primary transition-colors"
            >
              <Maximize size={20} />
            </button>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12"
            variants={itemVariants}
          >
            {/* Media Stage - 60% width */}
            <div className="lg:col-span-3 space-y-6">
              {/* Primary Media */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={product.images[activeImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={handleVideoToggle}
                    className="bg-white/90 text-gray-900 p-4 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </motion.button>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Interactive Hotspots */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full cursor-pointer"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-3/4 right-1/3 w-4 h-4 bg-primary rounded-full cursor-pointer"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      activeImageIndex === index ? 'ring-2 ring-primary' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Product Info Panel - 40% width */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white sticky top-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      Premium Collection
                    </span>
                    <span className="text-sm text-gray-300">
                      {product.features.length} Key Features
                    </span>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {product.sizes.length}
                    </div>
                    <div className="text-sm text-gray-400">Size Options</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {product.thickness.core}
                    </div>
                    <div className="text-sm text-gray-400">Core Thickness</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {product.wearLayer.thickness}
                    </div>
                    <div className="text-sm text-gray-400">Wear Layer</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {product.underpad.thickness}
                    </div>
                    <div className="text-sm text-gray-400">Underpad</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.button
                    className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye size={20} className="inline mr-2" />
                    View 360° Experience
                  </motion.button>
                  <motion.button
                    className="w-full border border-white/20 text-white py-4 px-6 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Quote
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Details Hub */}
          <motion.div
            className="bg-white rounded-2xl p-8 mb-12"
            variants={itemVariants}
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              {[
                { id: 'specifications', label: 'Specifications' },
                { id: 'features', label: 'Features' },
                { id: 'installation', label: 'Installation' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 px-6 font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Dimensions</h3>
                      <div className="space-y-2">
                        {product.sizes.map((size, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-gray-600">Size {index + 1}:</span>
                            <span className="font-medium">{size}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Core</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Thickness:</span>
                          <span className="font-medium">{product.thickness.core}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Material:</span>
                          <span className="font-medium">Stone Polymer</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Wear Layer</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Thickness:</span>
                          <span className="font-medium">{product.wearLayer.thickness}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Type:</span>
                          <span className="font-medium">Premium Urethane</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium">{feature}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Premium quality feature ensuring long-lasting performance and satisfaction.
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'installation' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-primary mb-2">1</div>
                        <h3 className="font-semibold mb-2">Preparation</h3>
                        <p className="text-sm text-gray-600">
                          Ensure subfloor is clean, dry, and level before installation.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-primary mb-2">2</div>
                        <h3 className="font-semibold mb-2">Installation</h3>
                        <p className="text-sm text-gray-600">
                          Click-lock system allows for easy, floating installation.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-primary mb-2">3</div>
                        <h3 className="font-semibold mb-2">Finishing</h3>
                        <p className="text-sm text-gray-600">
                          Install trim and transitions for a professional finish.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Room Visualization */}
          <motion.div
            className="bg-white rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6">See in Different Rooms</h3>
            
            {/* Room Selector */}
            <div className="flex space-x-4 mb-8">
              {roomContexts.map((room) => (
                <motion.button
                  key={room.id}
                  onClick={() => setSelectedRoom(room.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedRoom === room.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {room.name}
                </motion.button>
              ))}
            </div>

            {/* Room Visualization */}
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                {roomContexts
                  .filter(room => room.id === selectedRoom)
                  .map((room) => (
                    <motion.img
                      key={room.id}
                      src={room.image}
                      alt={`${product.name} in ${room.name}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductShowcase; 