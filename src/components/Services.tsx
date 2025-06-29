import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Target, Heart, Bike, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Muscle Building",
      description: "Comprehensive muscle building programs designed for maximum hypertrophy and strength gains.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Target,
      title: "Weight Lifting",
      description: "Professional weightlifting coaching with focus on proper form and progressive overload.",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Heart,
      title: "Cardio Training",
      description: "High-intensity cardio workouts to improve cardiovascular health and endurance.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Bike,
      title: "Cycling",
      description: "Indoor and outdoor cycling programs for fat loss and lower body strength development.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Zap,
      title: "Running",
      description: "Structured running programs for speed, endurance, and overall athletic performance.",
      color: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
              SERVICES
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized training programs designed to transform your physique and push your limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 overflow-hidden">
                {/* Hover Effect Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon size={32} className="text-black" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-black text-white mb-4 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;