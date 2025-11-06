import React from 'react';
import { motion } from 'framer-motion';
import { Question, QuestionOption } from '../../types/quiz.types';
import { Card } from '../UI/Card';
import { Language } from '../../types/quiz.types';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string | string[];
  onAnswerSelect: (answerId: string) => void;
  language: Language;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswers,
  onAnswerSelect,
  language,
}) => {
  const isSelected = (optionId: string): boolean => {
    if (question.type === 'single') {
      return selectedAnswers === optionId;
    }
    return Array.isArray(selectedAnswers) && selectedAnswers.includes(optionId);
  };

  const handleOptionClick = (optionId: string) => {
    onAnswerSelect(optionId);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
      {/* Question Title - Larger and above all options */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-dark mb-6 sm:mb-8 text-center leading-tight px-2">
        {question.title[language]}
      </h2>

      {/* Question Note */}
      {question.note && (
        <p className="text-xs text-grey-text mb-3 sm:mb-4 text-center italic px-2">
          {question.note[language]}
        </p>
      )}

      {/* Options - Max 4 options per question */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2 sm:gap-2.5 mb-4 sm:mb-5"
      >
        {question.options.map((option: QuestionOption) => (
          <motion.div key={option.id} variants={itemVariants}>
            <Card
              selected={isSelected(option.id)}
              onClick={() => handleOptionClick(option.id)}
              hoverable
              className="w-full min-h-[55px] sm:min-h-[60px] touch-manipulation"
            >
              <div className="flex items-start gap-2">
                <span className="text-lg sm:text-xl flex-shrink-0">{option.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold text-sm sm:text-base mb-0.5 leading-tight ${
                      isSelected(option.id) ? 'text-white' : 'text-navy-dark'
                    }`}
                  >
                    {option.title[language]}
                  </h4>
                  {option.subtitle && (
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected(option.id) ? 'text-white/90' : 'text-grey-text'
                      }`}
                    >
                      {option.subtitle[language]}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
