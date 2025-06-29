import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Play } from 'lucide-react';

const Trainer: React.FC = () => {
  const videos = [
    {
      title: "Deadlift Technique",
      thumbnail: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
      duration: "3:45"
    },
    {
      title: "Bench Press Form",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg",
      duration: "4:20"
    },
    {
      title: "Squat Mastery",
      thumbnail: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg",
      duration: "5:15"
    },
    {
      title: "Muscle Building Tips",
      thumbnail: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      duration: "6:30"
    }
  ];

  return (
    <section id="trainer" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, #00ff41 0%, transparent 70%)',
            'radial-gradient(circle at 70% 50%, #ff0041 0%, transparent 70%)',
            'radial-gradient(circle at 30% 50%, #00ff41 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            MEET YOUR
            <span className="block bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              TRAINER
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Trainer Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-400 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative bg-gray-800 rounded-2xl p-8">
                <img
                 src="https://raw.githubusercontent.com/alishad846/A-Square-Fitness-gym-website/main/aftab.jpg"
                  alt="Trainer"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-black text-white mb-2">Aftab Alam</h3>
                <p className="text-green-400 font-bold mb-4">CERTIFIED STRENGTH COACH</p>
                <p className="text-gray-300 leading-relaxed">
                  10+ years of experience in muscle building and strength training. 
                  Specialized in contest preparation and body transformation. 
                  Helped 500+ clients achieve their fitness goals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              { icon: Users, label: "Clients Trained", value: "500+" },
              { icon: Award, label: "Years Experience", value: "10+" },
              { icon: Target, label: "Success Rate", value: "95%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="p-3 bg-gradient-to-r from-green-400 to-red-500 rounded-full">
                  <stat.icon size={24} className="text-black" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Training Videos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-black text-white text-center mb-12">
            TRAINING <span className="text-green-400">VIDEOS</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-green-400 to-red-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play size={24} className="text-black ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold mb-1">{video.title}</h4>
                    <p className="text-green-400 text-sm">{video.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainer;