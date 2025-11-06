import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../../types/quiz.types';

interface ProgressBarProps {
  current: number;
  total: number;
  language: Language;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, language }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full mb-4 sm:mb-6">
      {/* Progress Numbers */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <span className="text-danish-red text-lg sm:text-xl font-bold">
            {current}
          </span>
          <span className="text-grey-text text-sm sm:text-base">
            {language === 'da' ? 'af' : 'of'}
          </span>
          <span className="text-navy-dark text-lg sm:text-xl font-semibold">
            {total}
          </span>
        </div>
        <span className="text-grey-text text-xs sm:text-sm">
          {Math.round(progress)}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 sm:h-2.5 bg-grey-light rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-danish-red to-red-light"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
    </div>
  );
};
