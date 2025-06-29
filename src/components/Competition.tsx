import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Trophy, Target, Users, Award, Star } from 'lucide-react';

const Competition: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: "Contest Preparation",
      description: "Complete preparation for national and state level bodybuilding competitions."
    },
    {
      icon: Target,
      title: "Posing Training",
      description: "Professional posing coaching to showcase your physique with confidence."
    },
    {
      icon: Users,
      title: "Personal Coaching",
      description: "One-on-one training sessions tailored for competitive excellence."
    },
    {
      icon: Award,
      title: "Nutrition Plans",
      description: "Customized meal plans for peak conditioning and muscle definition."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'linear-gradient(45deg, #00ff4120 0%, transparent 50%, #ff004120 100%)',
              'linear-gradient(45deg, #ff004120 0%, transparent 50%, #00ff4120 100%)',
              'linear-gradient(45deg, #00ff4120 0%, transparent 50%, #ff004120 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Medal size={64} className="text-yellow-400" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            NATIONAL & STATE LEVEL
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CONTEST PREPARATION
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Take your physique to the competitive stage. Our specialized contest prep program 
            has produced 10+ state-level winners and numerous national competitors.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 text-center overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={32} className="text-black" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                SUCCESS <span className="text-yellow-400">STORIES</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  "🏆 Mr. Maharashtra 2023 - 1st Place",
                  "🥇 State Bodybuilding Championship - Gold Medal",
                  "🏅 National Qualifier - Top 5 Finish",
                  "⭐ 95% Success Rate in Competitions"
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <Star size={16} className="text-yellow-400 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-75"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative bg-gray-900 rounded-2xl p-6">
                <img
                  src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg"
                  alt="Competition Success"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <p className="text-yellow-400 font-bold">Ready to compete?</p>
                  <p className="text-gray-400 text-sm">Join our elite competition prep program</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competition;