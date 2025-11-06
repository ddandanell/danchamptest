import React from 'react';
import { Language } from '../../types/quiz.types';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <button
        onClick={() => onLanguageChange('da')}
        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 touch-manipulation min-h-[40px] sm:min-h-[44px] ${
          language === 'da'
            ? 'bg-danish-red text-white shadow-md'
            : 'bg-white text-navy-dark hover:bg-off-white active:bg-off-white'
        }`}
        aria-label="Switch to Danish"
      >
        DA
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 touch-manipulation min-h-[40px] sm:min-h-[44px] ${
          language === 'en'
            ? 'bg-danish-red text-white shadow-md'
            : 'bg-white text-navy-dark hover:bg-off-white active:bg-off-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
