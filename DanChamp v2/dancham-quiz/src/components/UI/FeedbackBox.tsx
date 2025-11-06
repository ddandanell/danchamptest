import React from 'react';
import { motion } from 'framer-motion';

interface FeedbackBoxProps {
  text: string;
  delay?: number;
}

const feedbackEntrance = {
  initial: { opacity: 0, y: 20, height: 0 },
  animate: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      delay: 0.3,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const FeedbackBox: React.FC<FeedbackBoxProps> = ({ text, delay = 0 }) => {
  return (
    <motion.div
      variants={feedbackEntrance}
      initial="initial"
      animate="animate"
      className="bg-[#f8f9fa] border-l-4 border-[#c41e3a] rounded-lg p-4 sm:p-5 mt-4 sm:mt-5 shadow-sm"
      role="region"
      aria-live="polite"
    >
      <p className="text-sm sm:text-base text-[#1a1f3a] leading-relaxed">{text}</p>
    </motion.div>
  );
};

