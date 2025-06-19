import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with any questions about FLORA SPC flooring. How can I assist you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const floraContext = `
You are a helpful assistant for FLORA by Epsilon, a premium SPC (Stone Polymer Composite) flooring company. Here's key information about our products:

COMPANY: FLORA by Epsilon - Premium SPC Flooring Solutions

PRODUCTS:
- SPC Collection with Wood, Stone, and Modern collections
- Available sizes: 7"x48", 9"x48", 9"x60"
- Thickness options: 4.0mm, 5.0mm, 6.0mm
- Underpad: IXPE 1.0mm & 1.5mm
- Wear Layer: 12 & 20 mil

KEY FEATURES:
- Water Resistant: Handles moisture elegantly
- Highly Durable: Long-lasting strength and style
- Scratch Resistant: Maintains pristine look
- Easy to Install: Uniclic® tongue and groove system
- Anti-Slippery: Safety-focused design
- Fire Resistant: Combines elegance with fire safety
- Sound Insulation: Noise-proof for quiet spaces
- Stain Resistant: Easy maintenance
- Non-Volatile: Safe for children, no harmful emissions

CONSTRUCTION LAYERS:
1. UV Coating Layer
2. Wear Layer
3. Decor Film
4. SPC Core Sheet (limestone & PVC)
5. Quick Installation Layer
6. Underlayment (IXPE)

INSTALLATION:
- Patented Uniclic® click-lock system
- Can be installed over most floor surfaces
- Suitable for residential and light commercial use
- Requires 48-hour acclimation at 60°-85°F
- Humidity should be 30%-55%

CONTACT:
- Email: info@florabyepsilon.com
- Phone: +1 (234) 567-890
- Address: 123 Design Avenue, New York, NY 10001
- Hours: Monday-Friday, 9am-6pm EST

Always provide helpful, accurate information about FLORA SPC flooring. Keep responses concise but informative.
`;

  const predefinedResponses = {
    greeting: [
      "Hello! I'm here to help you with FLORA SPC flooring. What would you like to know?",
      "Hi there! How can I assist you with our premium SPC flooring today?",
      "Welcome! I'm ready to answer your questions about FLORA flooring products."
    ],
    products: [
      "FLORA offers premium SPC flooring in Wood, Stone, and Modern collections. Our products feature water resistance, high durability, and easy installation. Would you like to know about a specific collection?",
      "Our SPC flooring comes in various sizes (7\"x48\", 9\"x48\", 9\"x60\") with different thickness options (4.0mm, 5.0mm, 6.0mm). Each product includes IXPE underlayment for comfort and sound insulation."
    ],
    installation: [
      "FLORA SPC flooring features our patented Uniclic® tongue and groove design for easy installation. It can be installed over most floor surfaces and is suitable for both residential and light commercial use.",
      "Installation is straightforward with our click-lock system. The flooring should be acclimated for 48 hours before installation, and you'll need basic tools like a utility knife, tape measure, and tapping block."
    ],
    benefits: [
      "FLORA SPC flooring offers exceptional benefits: 100% water resistant, highly durable, scratch resistant, easy to install, anti-slip surface, fire resistant, sound insulation, and completely safe for children with no harmful emissions.",
      "Our SPC core construction provides superior stability and durability compared to traditional flooring. It won't warp, swell, or crack, making it perfect for high-moisture areas like kitchens and bathrooms."
    ],
    maintenance: [
      "Maintaining FLORA SPC flooring is simple! Regular sweeping and occasional mopping with a gentle cleaner is all you need. Avoid harsh chemicals, wax, or abrasive cleaners. The surface is stain-resistant and easy to clean.",
      "For best results, maintain room temperature between 60°-85°F and humidity between 40%-70%. Use furniture pads to protect against scratches and clean spills promptly."
    ],
    contact: [
      "You can reach us at info@florabyepsilon.com or call +1 (234) 567-890. Our team is available Monday-Friday, 9am-6pm EST. We're also located at 123 Design Avenue, New York, NY 10001.",
      "For quotes and consultations, feel free to contact our specialists. We offer personalized recommendations based on your specific needs and space requirements."
    ],
    default: [
      "That's a great question! For detailed information about our SPC flooring, I'd recommend browsing our collection or contacting our specialists directly. Is there anything specific about FLORA flooring I can help you with?",
      "I'd be happy to help you learn more about FLORA SPC flooring. You can explore our products, learn about installation, or get in touch with our team for personalized assistance."
    ]
  };

  const getResponseCategory = (message: string): keyof typeof predefinedResponses => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'greeting';
    }
    if (lowerMessage.includes('product') || lowerMessage.includes('collection') || lowerMessage.includes('size') || lowerMessage.includes('thickness')) {
      return 'products';
    }
    if (lowerMessage.includes('install') || lowerMessage.includes('installation') || lowerMessage.includes('how to')) {
      return 'installation';
    }
    if (lowerMessage.includes('benefit') || lowerMessage.includes('advantage') || lowerMessage.includes('feature') || lowerMessage.includes('water') || lowerMessage.includes('durable')) {
      return 'benefits';
    }
    if (lowerMessage.includes('clean') || lowerMessage.includes('maintain') || lowerMessage.includes('care')) {
      return 'maintenance';
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return 'contact';
    }
    
    return 'default';
  };

  const getRandomResponse = (category: keyof typeof predefinedResponses): string => {
    const responses = predefinedResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get API key from environment variables
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      console.log('Gemini API Key:', apiKey);
      let botResponse = '';

      if (apiKey && apiKey !== 'your_gemini_api_key_here') {
        try {
          console.log('Attempting to call Gemini API...');
          
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `${floraContext}\n\nUser question: ${message}\n\nPlease provide a helpful response about FLORA SPC flooring based on the context above. Keep it concise and informative.`
                }]
              }],
              generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 200,
              }
            })
          });

          console.log('API Response status:', response.status);
          
          if (response.ok) {
            const data = await response.json();
            console.log('API Response data:', data);
            
            botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            
            // Clean up the response
            botResponse = botResponse.trim();
            
            // If response is too long, truncate it
            if (botResponse.length > 300) {
              botResponse = botResponse.substring(0, 297) + '...';
            }
            
            console.log('Bot response from API:', botResponse);
          } else {
            const errorText = await response.text();
            console.error('Gemini API error response:', response.status, errorText);
            
            // Check for specific error types
            if (response.status === 403) {
              console.error('API Key might be invalid or lacking permissions');
            } else if (response.status === 429) {
              console.error('Rate limit exceeded');
            }
          }
        } catch (apiError) {
          console.error('Gemini API network error:', apiError);
          
          // Check if it's a CORS error
          if (apiError instanceof TypeError && apiError.message.includes('fetch')) {
            console.error('This might be a CORS error. Consider using a backend proxy.');
          }
        }
      } else {
        console.log('No API key found, using predefined responses');
      }

      // Use predefined responses if API is not available or didn't return a response
      if (!botResponse) {
        console.log('Falling back to predefined responses');
        const category = getResponseCategory(message);
        botResponse = getRandomResponse(category);
      }

      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      
      // Fallback response
      const category = getResponseCategory(message);
      const fallbackResponse = getRandomResponse(category);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot size={20} className="mr-2" />
                <span className="font-medium">FLORA Assistant</span>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto h-64 bg-background">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-start max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser ? 'bg-primary ml-2' : 'bg-muted mr-2'
                      }`}>
                        {message.isUser ? (
                          <User size={12} className="text-white" />
                        ) : (
                          <Bot size={12} className="text-muted-foreground" />
                        )}
                      </div>
                      <div className={`px-3 py-2 rounded-lg ${
                        message.isUser 
                          ? 'bg-primary text-white' 
                          : 'bg-muted text-foreground'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-muted mr-2 flex items-center justify-center">
                        <Bot size={12} className="text-muted-foreground" />
                      </div>
                      <div className="bg-muted px-3 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about FLORA flooring..."
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;