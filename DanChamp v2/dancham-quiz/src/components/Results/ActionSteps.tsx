import React from 'react';
import { motion } from 'framer-motion';

interface ActionStepsProps {
  steps: string[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const ActionSteps: React.FC<ActionStepsProps> = ({ steps }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-bold text-navy-dark mb-3 sm:mb-4">Næste Skridt</h3>
      <ol className="space-y-3 sm:space-y-4">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 sm:gap-4"
          >
            <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-danish-red text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
              {index + 1}
            </span>
            <span className="text-navy-dark text-sm sm:text-base leading-relaxed pt-0.5 sm:pt-1">
              {step}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};
