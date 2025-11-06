import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizState } from '../../hooks/useQuizState';
import { useTranslation } from '../../hooks/useTranslation';
import { questions, validationRules } from '../../data/questions';
import { QuestionCard } from './QuestionCard';
import { NavigationButtons } from './NavigationButtons';

const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as const },
  },
};

export const QuizContainer: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentQuestion,
    answers,
    language,
    setAnswer,
    nextQuestion,
    previousQuestion,
    calculateProfile,
    isComplete,
    calculatedProfile,
  } = useQuizState();

  const { t } = useTranslation(language);

  // Ensure we start at question 1 when coming to /quiz route
  useEffect(() => {
    if (currentQuestion === 0) {
      nextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isComplete && calculatedProfile) {
      navigate(`/result/${calculatedProfile}`);
    }
  }, [isComplete, calculatedProfile, navigate]);

  const currentQuestionData = useMemo(() => {
    return questions.find((q) => q.questionNumber === currentQuestion);
  }, [currentQuestion]);

  const validateAnswer = (questionId: string, answer: string | string[]): boolean => {
    const rule = validationRules[questionId];
    if (!rule) return true;

    if (rule.type === 'single') {
      return answer !== undefined && answer !== null && answer !== '';
    }

    if (rule.type === 'multiple') {
      const answerArray = Array.isArray(answer) ? answer : [];
      const min = rule.min || 0;
      const max = rule.max || Infinity;
      return answerArray.length >= min && answerArray.length <= max;
    }

    return true;
  };

  const handleAnswerSelect = (answerId: string) => {
    if (!currentQuestionData) return;

    let newAnswer: string | string[];

    if (currentQuestionData.type === 'single') {
      // For single choice, always allow changing selection
      newAnswer = answerId;
    } else {
      // For multiple choice, allow toggling selections
      const currentAnswers = Array.isArray(answers[currentQuestionData.id])
        ? (answers[currentQuestionData.id] as string[])
        : [];
      
      // Get max from validation rules
      const rule = validationRules[currentQuestionData.id];
      const maxSelections = rule?.max || Infinity;

      if (currentAnswers.includes(answerId)) {
        // Allow deselecting even if it goes below min (user can add more later)
        newAnswer = currentAnswers.filter((id) => id !== answerId);
      } else if (currentAnswers.length < maxSelections) {
        // Allow selecting if under max
        newAnswer = [...currentAnswers, answerId];
      } else {
        // Max selections reached - don't allow more
        return;
      }
    }

    setAnswer(currentQuestionData.id, newAnswer);
  };

  const canProceed = useMemo(() => {
    if (!currentQuestionData) return false;
    const answer = answers[currentQuestionData.id];
    return validateAnswer(currentQuestionData.id, answer || '');
  }, [currentQuestionData, answers]);

  const handleNext = () => {
    if (canProceed) {
      if (currentQuestion === 8) {
        calculateProfile();
        // Navigation will happen via useEffect when isComplete becomes true
      } else {
        nextQuestion();
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion === 1) {
      navigate('/');
    } else {
      previousQuestion();
    }
  };

  if (!currentQuestionData) {
    return null;
  }

  const selectedAnswers = answers[currentQuestionData.id] || (currentQuestionData.type === 'multiple' ? [] : '');

  return (
    <div className="min-h-screen bg-off-white py-4 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <QuestionCard
              question={currentQuestionData}
              selectedAnswers={selectedAnswers}
              onAnswerSelect={handleAnswerSelect}
              language={language}
            />
            <NavigationButtons
              onNext={handleNext}
              onBack={handleBack}
              canGoNext={canProceed}
              canGoBack={currentQuestion > 1}
              isLastQuestion={currentQuestion === 8}
              nextLabel={t('common.next')}
              backLabel={t('common.back')}
              finishLabel={t('common.finish')}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

