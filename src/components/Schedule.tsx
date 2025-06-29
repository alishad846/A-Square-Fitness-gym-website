import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ScheduleProps {
  theme: any;
}

const Schedule: React.FC<ScheduleProps> = ({ theme }) => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const schedule = {
    Monday: [
      { time: '06:00', class: 'Morning HIIT', trainer: 'Maya Chen', spots: 8, maxSpots: 12 },
      { time: '09:00', class: 'Strength Training', trainer: 'Alex Rivera', spots: 5, maxSpots: 8 },
      { time: '18:00', class: 'Evening Flow', trainer: 'Marcus Johnson', spots: 10, maxSpots: 15 },
    ],
    Tuesday: [
      { time: '07:00', class: 'Cardio Blast', trainer: 'Maya Chen', spots: 6, maxSpots: 10 },
      { time: '12:00', class: 'Lunch Power', trainer: 'Alex Rivera', spots: 4, maxSpots: 8 },
      { time: '19:00', class: 'Bodybuilding', trainer: 'Marcus Johnson', spots: 3, maxSpots: 6 },
    ],
    Wednesday: [
      { time: '06:30', class: 'Functional Fitness', trainer: 'Alex Rivera', spots: 7, maxSpots: 12 },
      { time: '17:30', class: 'HIIT Circuit', trainer: 'Maya Chen', spots: 9, maxSpots: 15 },
      { time: '20:00', class: 'Strength & Size', trainer: 'Marcus Johnson', spots: 2, maxSpots: 8 },
    ],
    // Add more days as needed
  };

  const currentSchedule = schedule[selectedDay as keyof typeof schedule] || [];

  const getAvailabilityColor = (spots: number, maxSpots: number) => {
    const percentage = spots / maxSpots;
    if (percentage < 0.3) return 'text-red-400';
    if (percentage < 0.7) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <section id="schedule" className={`py-20 ${theme.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-6`}>
            CLASS SCHEDULE
          </h2>
          <p className={`text-xl ${theme.colors.textSecondary} max-w-3xl mx-auto`}>
            Join our dynamic classes led by expert trainers. Book your spot and elevate your fitness journey.
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {days.map((day, index) => (
            <motion.button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedDay === day
                  ? `bg-gradient-to-r ${theme.colors.primary} text-white shadow-lg`
                  : `${theme.colors.surface} ${theme.colors.text} hover:scale-105`
              }`}
              whileHover={{ scale: selectedDay === day ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {day}
            </motion.button>
          ))}
        </div>

        {/* Schedule Grid */}
        <motion.div
          className="max-w-4xl mx-auto"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentSchedule.map((item, index) => (
                <motion.div
                  key={`${selectedDay}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${theme.colors.surface} backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group`}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${theme.colors.primary}`}>
                          <Clock size={16} className="text-white" />
                        </div>
                        <span className={`text-lg font-semibold ${theme.colors.text}`}>
                          {item.time}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-1`}>
                        {item.class}
                      </h3>
                      
                      <p className={`${theme.colors.textSecondary}`}>
                        with {item.trainer}
                      </p>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Users size={16} className={theme.colors.textSecondary} />
                        <span className={`font-semibold ${getAvailabilityColor(item.spots, item.maxSpots)}`}>
                          {item.spots}/{item.maxSpots} spots
                        </span>
                      </div>

                      <motion.button
                        className={`px-6 py-2 bg-gradient-to-r ${theme.colors.primary} text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed`}
                        whileHover={{ scale: item.spots > 0 ? 1.05 : 1 }}
                        whileTap={{ scale: item.spots > 0 ? 0.95 : 1 }}
                        disabled={item.spots === 0}
                      >
                        {item.spots === 0 ? 'Full' : 'Book Now'}
                      </motion.button>
                    </div>
                  </div>

                  {/* Progress bar for availability */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${theme.colors.primary}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.spots / item.maxSpots) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;