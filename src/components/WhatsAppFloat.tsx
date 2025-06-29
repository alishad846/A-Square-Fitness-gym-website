import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "918619555677"; // Example number
    const message = "Hi! I'm interested in joining A Square Fitness. Can you provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      {/* Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute bottom-20 right-0 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg mb-2 whitespace-nowrap"
      >
        <div className="text-sm font-medium">Need help? Chat with us!</div>
        <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800 transform translate-y-full"></div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.7)",
            "0 0 0 10px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppFloat;