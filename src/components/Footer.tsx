import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/a_square_fitnesss?utm_source=ig_web_button_share_sheet&igsh=aTlnZWtob3prbTF1', label: 'Instagram', color: 'hover:text-pink-400' },
    //{ icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Youtube, href: 'https://www.youtube.com/@AftabFitness/featured', label: 'YouTube', color: 'hover:text-red-400' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-green-400 to-red-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-2xl font-black text-black">A²</div>
              </motion.div>
              <span className="text-2xl font-black text-white">A SQUARE FITNESS</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your limits with professional muscle training and competition preparation. 
              Your fitness journey starts here.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-sm">
                  A SQUARE FITNESS, station road, near shahtri school, Lalgarh<br />Bikaner, Rajasthan 334001
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-sm">+91 86195 55677</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-sm">infoatasquarefitness@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Gym Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-black text-white mb-6 flex items-center">
              <Clock size={20} className="text-green-400 mr-2" />
              GYM HOURS
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-white font-bold">5:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white font-bold">Closed</span>
              </div>

            </div>

            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-green-400/10 to-red-500/10 rounded-xl border border-green-400/20"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-sm font-bold text-green-400 mb-2">
                SPECIAL HOURS
              </h4>
              <div className="text-sm text-gray-400">
                <div>Competition Prep: 24/7 Access</div>
                <div>Personal Training: By Appointment</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-black text-white mb-6">
              CONNECT WITH US
            </h3>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 ${social.color} transition-colors border border-gray-700 hover:border-green-400/50`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>© 2025 A Square Fitness. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;