import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <img 
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-5"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #00ff4120 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #ff004120 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #00ff4120 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block p-8 rounded-full bg-gradient-to-r from-green-400 to-red-500 shadow-2xl">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-6xl font-black text-white"
            >
              A²
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight">
            A SQUARE
            <span className="block bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              FITNESS
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl text-green-400 mb-12 font-bold tracking-wider"
        >
          PUSH BEYOND LIMITS
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.button
            className="px-12 py-6 bg-gradient-to-r from-green-400 to-red-500 text-black text-xl font-black rounded-full shadow-lg flex items-center space-x-3 mx-auto group"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,255,65,0.3)",
              background: "linear-gradient(to right, #22c55e, #ef4444)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>TRAIN WITH US</span>
            <motion.div
              className="group-hover:translate-x-2 transition-transform"
            >
              <ArrowRight size={24} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-green-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;