import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      transformation: "Lost 25kg in 8 months",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg",
      beforeAfter: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
      rating: 5,
      text: "Aftab Alam sir completely transformed my life. His dedication and personalized approach helped me achieve what I thought was impossible. The muscle building program was intense but incredibly effective.",
      achievement: "State Level Competitor"
    },
    {
      name: "Amit Patel",
      transformation: "Gained 15kg muscle mass",
      image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg",
      beforeAfter: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      rating: 5,
      text: "The competition prep program is world-class. Aftab Alam sir's expertise in posing and nutrition helped me win my first bodybuilding competition. Highly recommended for serious athletes.",
      achievement: "Mr. Mumbai Winner"
    },
    {
      name: "Sneha Reddy",
      transformation: "Body fat reduced from 35% to 18%",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      beforeAfter: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
      rating: 5,
      text: "Amazing transformation journey! The cardio and strength training combination worked perfectly. Aftab Alam sir's motivation and scientific approach made all the difference.",
      achievement: "Fitness Model"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #00ff41 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #ff0041 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #00ff41 0%, transparent 50%)',
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
            SUCCESS
            <span className="block bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              TRANSFORMATIONS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real people, real results. See how A Square Fitness has transformed lives.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 left-6 text-green-400 opacity-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={48} />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Before/After Images */}
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name} - After`}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-2 left-2 bg-green-400 text-black px-2 py-1 rounded text-xs font-bold">
                      AFTER
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].beforeAfter}
                      alt={`${testimonials[currentIndex].name} - Before`}
                      className="w-full h-48 object-cover rounded-xl opacity-75"
                    />
                    <div className="absolute bottom-2 left-2 bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold">
                      BEFORE
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <motion.div
                    className="flex justify-start mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star size={20} className="text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.p
                    className="text-lg text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="text-xl font-black text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-green-400 font-bold mb-2">
                      {testimonials[currentIndex].transformation}
                    </p>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-400 to-red-500 text-black text-sm rounded-full font-bold">
                      {testimonials[currentIndex].achievement}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-green-400 to-red-500'
                      : 'bg-gray-600 opacity-50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-700 transition-colors border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;