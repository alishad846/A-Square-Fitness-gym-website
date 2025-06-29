import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PricingProps {
  theme: any;
}

const Pricing: React.FC<PricingProps> = ({ theme }) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Gym access (6am-10pm)',
        'Basic equipment access',
        'Locker room access',
        'Mobile app access',
        '1 free fitness assessment'
      ],
      popular: false,
      icon: Check
    },
    {
      name: 'Premium',
      price: 59,
      period: 'month',
      description: 'Ideal for serious fitness enthusiasts',
      features: [
        '24/7 gym access',
        'All equipment access',
        'Group classes included',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Guest passes (2/month)',
        'Priority booking'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate package for fitness professionals',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Private training room access',
        'Meal prep service',
        'Recovery suite access',
        'Unlimited guest passes',
        '24/7 trainer support',
        'Custom workout programs'
      ],
      popular: false,
      icon: Zap
    }
  ];

  return (
    <section id="pricing" className={`py-20 ${theme.colors.background} relative overflow-hidden`}>
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${theme.colors.accent} 0%, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-6`}>
            MEMBERSHIP PLANS
          </h2>
          <p className={`text-xl ${theme.colors.textSecondary} max-w-3xl mx-auto`}>
            Choose the perfect plan to match your fitness goals and lifestyle. All plans include our premium facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${theme.colors.surface} backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group ${
                plan.popular ? 'ring-2 ring-current scale-105' : ''
              }`}
              whileHover={{ y: -10, scale: plan.popular ? 1.05 : 1.02 }}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${theme.colors.primary} text-white px-6 py-2 rounded-full text-sm font-semibold`}
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="text-center mb-8">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${theme.colors.primary} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <plan.icon size={32} className="text-white" />
                </motion.div>

                <h3 className={`text-2xl font-bold ${theme.colors.text} ${theme.fonts.heading} mb-2`}>
                  {plan.name}
                </h3>
                
                <p className={`${theme.colors.textSecondary} mb-6`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-bold ${theme.colors.text}`}>
                    ${plan.price}
                  </span>
                  <span className={`${theme.colors.textSecondary} ml-2`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-5 h-5 bg-gradient-to-r ${theme.colors.primary} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className={`${theme.colors.text}`}>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? `bg-gradient-to-r ${theme.colors.primary} text-white shadow-lg`
                    : `border-2 border-current ${theme.colors.text} hover:bg-white/10`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.popular ? 'START NOW' : 'CHOOSE PLAN'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className={`${theme.colors.textSecondary} mb-4`}>
            All plans include a 7-day free trial. No commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className={`${theme.colors.textSecondary}`}>✓ No joining fees</span>
            <span className={`${theme.colors.textSecondary}`}>✓ Cancel anytime</span>
            <span className={`${theme.colors.textSecondary}`}>✓ Money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;