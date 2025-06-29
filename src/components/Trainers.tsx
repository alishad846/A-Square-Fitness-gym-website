import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface TrainersProps {
  theme: any;
}

const Trainers: React.FC<TrainersProps> = ({ theme }) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const trainers = [
    {
      name: "Alex Rivera",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg",
      bio: "Former Olympic weightlifter specializing in powerlifting and functional strength training.",
      achievements: ["NASM Certified", "Olympic Training Center", "500+ Success Stories"]
    },
    {
      name: "Maya Chen",
      specialty: "HIIT & Cardio",
      experience: "6 years",
      rating: 4.8,
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
      bio: "High-energy trainer focused on metabolic conditioning and cardiovascular excellence.",
      achievements: ["ACE Certified", "Marathon Runner", "Group Fitness Expert"]
    },
    {
      name: "Marcus Johnson",
      specialty: "Bodybuilding & Nutrition",
      experience: "10 years",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      bio: "Professional bodybuilder with expertise in muscle building and nutrition optimization.",
      achievements: ["IFBB Pro", "Nutrition Specialist", "Transformation Expert"]
    }
  ];

  return (
    <section id="trainers" className={`py-20 ${theme.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-6`}>
            ELITE TRAINERS
          </h2>
          <p className={`text-xl ${theme.colors.textSecondary} max-w-3xl mx-auto`}>
            Learn from the best. Our certified trainers bring years of experience and proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group perspective-1000"
            >
              <motion.div
                className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div className={`${theme.colors.surface} backdrop-blur-md rounded-xl overflow-hidden shadow-lg backface-hidden`}>
                  <div className="relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                    <div className="absolute bottom-4 left-4">
                      <h3 className={`text-xl font-bold text-white ${theme.fonts.heading}`}>
                        {trainer.name}
                      </h3>
                      <p className="text-gray-200">{trainer.specialty}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className={`${theme.colors.text} font-semibold`}>{trainer.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar size={16} />
                        <span>{trainer.experience}</span>
                      </div>
                    </div>

                    <motion.button
                      className={`w-full py-2 px-4 bg-gradient-to-r ${theme.colors.primary} text-white rounded-lg font-semibold`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Profile
                    </motion.button>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 ${theme.colors.surface} backdrop-blur-md rounded-xl p-6 backface-hidden rotate-y-180 flex flex-col justify-center`}>
                  <h3 className={`text-xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-4`}>
                    {trainer.name}
                  </h3>
                  <p className={`${theme.colors.textSecondary} mb-6 leading-relaxed`}>
                    {trainer.bio}
                  </p>

                  <div className="space-y-2">
                    {trainer.achievements.map((achievement, i) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <Award size={16} className={`${theme.colors.textSecondary}`} />
                        <span className={`${theme.colors.text} text-sm`}>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`mt-6 py-2 px-4 bg-gradient-to-r ${theme.colors.primary} text-white rounded-lg font-semibold`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Session
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;