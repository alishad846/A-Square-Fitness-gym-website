import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Clock, Trophy, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeaturesProps {
  theme: any;
}

const Features: React.FC<FeaturesProps> = ({ theme }) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      icon: Zap,
      title: "High-Tech Equipment",
      description: "State-of-the-art machines with AI-powered form correction and performance tracking."
    },
    {
      icon: Target,
      title: "Personalized Programs",
      description: "Custom workout plans tailored to your goals, fitness level, and preferences."
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals with years of experience in fitness and nutrition."
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock gym access and virtual support."
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Gamified fitness tracking with rewards, challenges, and milestone celebrations."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols, emergency systems, and sanitization standards."
    }
  ];

  return (
    <section id="features" className={`py-20 ${theme.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-6`}>
            ELITE FITNESS FEATURES
          </h2>
          <p className={`text-xl ${theme.colors.textSecondary} max-w-3xl mx-auto`}>
            Experience fitness like never before with our cutting-edge facilities and innovative approach to training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${theme.colors.surface} backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${theme.colors.primary} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={32} className="text-white" />
              </motion.div>

              <h3 className={`text-xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-4`}>
                {feature.title}
              </h3>

              <p className={`${theme.colors.textSecondary} leading-relaxed`}>
                {feature.description}
              </p>

              <motion.div
                className={`mt-6 w-0 h-1 bg-gradient-to-r ${theme.colors.primary} group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;