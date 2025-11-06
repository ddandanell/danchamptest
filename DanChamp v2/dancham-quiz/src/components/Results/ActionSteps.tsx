import React from 'react';
import { motion } from 'framer-motion';

interface ActionStepsProps {
  steps: string[];
  language?: 'da' | 'en';
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const ActionSteps: React.FC<ActionStepsProps> = ({ steps, language = 'da' }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-dark mb-3 sm:mb-4 flex items-center gap-2">
        <span className="text-2xl sm:text-3xl">🚀</span>
        <span>{language === 'da' ? 'Næste Skridt' : 'Next Steps'}</span>
      </h3>
      <ol className="space-y-2 sm:space-y-3">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r from-white to-[#f8f9fa] hover:from-[#c41e3a]/5 hover:to-white transition-all duration-300 border-l-4 border-[#c41e3a]"
          >
            <motion.span 
              className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#c41e3a] to-[#a01829] text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              {index + 1}
            </motion.span>
            <span className="text-navy-dark text-xs sm:text-sm md:text-base leading-relaxed pt-0.5 sm:pt-1 font-medium">
              {step}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};
