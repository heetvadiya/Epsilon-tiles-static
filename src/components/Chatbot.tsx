import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User } from 'lucide-react';

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
You are FLORA, the virtual assistant for FLORA by Epsilon, a premium brand specializing in SPC (Stone Polymer Composite) flooring. Your role is to provide friendly, concise, and expert guidance to users about FLORA's products, installation, care, and company information. Always be professional, approachable, and helpful.

Brand: FLORA by Epsilon
Industry: Premium SPC Flooring

Product Lines:
- Wood, Stone, and Modern SPC collections
- Sizes: 7"x48", 9"x48", 9"x60"
- Thickness: 4.0mm, 5.0mm, 6.0mm
- Underpad: IXPE 1.0mm & 1.5mm
- Wear Layer: 12 & 20 mil

Key Features:
- 100% Water Resistant
- Highly Durable & Scratch Resistant
- Easy Uniclic® Installation
- Anti-Slip, Fire Resistant, Sound Insulating
- Stain Resistant, Child-Safe, Non-Volatile

Construction Layers:
1. UV Coating
2. Wear Layer
3. Decor Film
4. SPC Core (limestone & PVC)
5. Quick Installation Layer
6. IXPE Underlayment

Installation:
- Patented Uniclic® click-lock system
- Installs over most floor surfaces
- 48-hour acclimation at 60°-85°F
- Humidity: 30%-55%
- Suitable for residential & light commercial use

Care & Maintenance:
- Sweep regularly, mop with gentle cleaner
- Avoid harsh chemicals, wax, abrasives
- Maintain 60°-85°F, humidity 40%-70%
- Use furniture pads, clean spills promptly

Contact:
- Email: info@florabyepsilon.com
- Contact Person: Mr. Vishal Boda
- Phone: +91 9712712701
- Address: 123 Design Avenue, New York, NY 10001
- Hours: Mon-Fri, 9am-6pm EST

Always answer as a knowledgeable FLORA assistant. If unsure, recommend contacting a FLORA specialist. Keep responses clear, friendly, and on-brand.`;

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
      "You can reach us at info@epsilontile.com or export@epsilontile.com. You can call us at +91 9712712701/02 or our customer care at +91 2822356097.",
      "Our corporate office is located at 410, Golden Market, Ravvapor road, Morbi-363641 (GUJ.) INDIA. Our factory is at Sr. No. 847/1 & 847/1/1, At Ghuntu, Lakhadipur road, 8-A National Highway, Morbi-363642 (GUJ.) INDIA."
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

          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{
                  parts: [{
                    text: `${floraContext}\n\nUser question: ${message}\n\nPlease provide a helpful response about FLORA SPC flooring based on the context above. Keep it concise and informative.`
                  }]
                }]
              })
            }
          );

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

            console.log('Bot response:', botResponse);
          } else {
            console.error('API request failed:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error calling Gemini API:', error);
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
        className="fixed bottom-5 right-6 z-50 w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-40 w-[24rem] h-[32rem] max-h-[calc(100vh-6rem)] bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-black backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white text-lg tracking-tight">FLORA CHATBOT</h3>
                <p className="text-sm text-gray-200 mt-0.5">How can I help you today?</p>
              </div>
              <motion.button
                onClick={toggleChat}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors text-gray-200 hover:text-gray-600"
                whileTap={{ scale: 0.95 }}
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 scrollbar-none">
              <div className="space-y-2">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`max-w-[85%]`}>
                      <div className={`px-4 py-1.5 rounded-lg ${message.isUser
                          ? 'bg-gray-900 rounded-br-sm'
                          : 'bg-white text-gray-900 border border-gray-200 rounded-bl-sm'
                        }`}>
                        <p className={`text-sm leading-relaxed ${message.isUser ? 'text-white' : 'text-gray-900'}`}>{message.text}</p>
                        <p className={`text-xs ${message.isUser ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
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
                    <div className="max-w-[85%]">
                      <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg rounded-bl-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200/50">
              <form onSubmit={handleSubmit} className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about FLORA flooring..."
                    className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent bg-white transition-all duration-200"
                    disabled={isTyping}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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