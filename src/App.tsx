import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Trainer from './components/Trainer';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Competition from './components/Competition';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
      }}
    >
      <Hero />
      <Trainer />
      <Services />
      <Achievements />
      <Competition />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </motion.div>
  );
}

export default App;