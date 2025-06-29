import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Users, Award, Star, Zap, TrendingUp, Heart, Flame } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Transformations", color: "from-green-400 to-green-600" },
    { icon: Trophy, number: "10+", label: "State Level Winners", color: "from-yellow-400 to-yellow-600" },
    { icon: Target, number: "20kg", label: "Avg Fat Loss", color: "from-red-400 to-red-600" },
    { icon: Medal, number: "15+", label: "Competition Medals", color: "from-blue-400 to-blue-600" },
    { icon: Award, number: "95%", label: "Success Rate", color: "from-purple-400 to-purple-600" },
    { icon: Star, number: "4.9", label: "Client Rating", color: "from-orange-400 to-orange-600" },
    { icon: Zap, number: "1000+", label: "Workout Sessions", color: "from-cyan-400 to-cyan-600" },
    { icon: TrendingUp, number: "85%", label: "Muscle Gain Rate", color: "from-pink-400 to-pink-600" },
    { icon: Heart, number: "100%", label: "Dedication", color: "from-red-500 to-pink-500" },
    { icon: Flame, number: "24/7", label: "Support Available", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, #00ff4110 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, #ff004110 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, #00ff4110 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            OUR
            <span className="block bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              ACHIEVEMENTS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300 text-center overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <achievement.icon size={24} className="text-black" />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-2xl md:text-3xl font-black text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {achievement.number}
                </motion.div>

                {/* Label */}
                <div className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  {achievement.label}
                </div>

                {/* Animated Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.color} w-0 group-hover:w-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;