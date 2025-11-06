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
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-dark mb-3 sm:mb-4 flex items-center gap-2">
        <span className="text-2xl sm:text-3xl">✨</span>
        <span>{language === 'da' ? 'Fordele' : 'Benefits'}</span>
      </h3>
      <ul className="space-y-1.5 sm:space-y-2">
        {benefits.map((benefit, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-[#f8f9fa] to-white hover:from-[#c41e3a]/5 hover:to-[#f8f9fa] transition-all duration-300"
          >
            <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
            <span className="text-navy-dark text-xs sm:text-sm md:text-base leading-relaxed font-medium">{benefit}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
