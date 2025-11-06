import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Language } from '../../types/quiz.types';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  currentQuestion?: number;
  totalQuestions?: number;
  language?: Language;
  onStop?: () => void;
  questionTitle?: string;
  onQuestionChange?: (questionNumber: number) => void;
  onLanguageChange?: (lang: Language) => void;
  showProgress?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentQuestion = 0, 
  totalQuestions = 8,
  language = 'da',
  onStop,
  questionTitle,
  onQuestionChange,
  onLanguageChange,
  showProgress: showProgressProp
}) => {
  const showProgress = showProgressProp !== undefined ? showProgressProp : currentQuestion > 0;
  const navigate = useNavigate();

  const handleStop = () => {
    if (window.confirm(language === 'da' ? 'Er du sikker på, at du vil afslutte quizzen?' : 'Are you sure you want to exit the quiz?')) {
      if (onStop) {
        onStop();
      } else {
        navigate('/');
      }
    }
  };

  return (
    <header className="w-full bg-white border-b border-grey-light sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5">
        <div className="flex items-center justify-center gap-4 relative">
          {/* Stop Button - Left corner */}
          {showProgress && (
            <button
              onClick={handleStop}
              className="absolute left-0 text-grey-text hover:text-danish-red text-sm sm:text-base font-medium transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
              aria-label={language === 'da' ? 'Afslut quiz' : 'Exit quiz'}
            >
              <span>✕</span>
              <span className="hidden sm:inline">{language === 'da' ? 'Stop' : 'Stop'}</span>
            </button>
          )}

          {/* Language Toggle - Right corner */}
          {onLanguageChange && (
            <div className="absolute right-0 flex-shrink-0">
              <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            </div>
          )}

          {/* Logo - Centered */}
          <div className="flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0"
            >
              <img
                src="/image copy.png"
                alt="DanCham - Danish-Indonesian Business Chamber"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

