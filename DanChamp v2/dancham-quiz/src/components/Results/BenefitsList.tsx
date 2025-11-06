import React from 'react';
import { motion } from 'framer-motion';

interface BenefitsListProps {
  benefits: string[];
  language: 'da' | 'en';
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export const BenefitsList: React.FC<BenefitsListProps> = ({ benefits, language }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-bold text-navy-dark mb-3 sm:mb-4">
        {language === 'da' ? 'Fordele' : 'Benefits'}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {benefits.map((benefit, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 sm:gap-3"
          >
            <span className="text-danish-red text-base sm:text-lg mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
            <span className="text-navy-dark text-sm sm:text-base leading-relaxed">{benefit}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
