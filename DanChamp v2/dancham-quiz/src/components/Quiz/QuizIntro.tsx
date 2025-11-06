import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI/Button';
import { Language } from '../../types/quiz.types';
import { useTranslation } from '../../hooks/useTranslation';

interface QuizIntroProps {
  onStart: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as const },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const detailsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const bounceAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 1.2,
  },
};

export const QuizIntro: React.FC<QuizIntroProps> = ({ onStart, language, onLanguageChange }) => {
  const { t } = useTranslation(language);

  const content = {
    da: {
      headline: 'Er DanCham noget for mig',
      paragraph1: 'Godt spørgsmål. Lad os finde ud af det.',
      paragraph2: 'Denne quiz spørger dig om din situation, dine mål og hvad du faktisk søger i et business-netværk. Til sidst får du en personlig profil og konkrete svar på om (og hvordan) DanCham giver mening for dig.',
      paragraph3: '',
      tagline: '**2 minutter. Nul bullshit. Personlige svar**',
      startButton: 'Start nu',
    },
    en: {
      headline: 'Is DanCham something for me',
      paragraph1: 'Good question. Let\'s find out.',
      paragraph2: 'This quiz asks you about your situation, your goals and what you actually seek in a business network. At the end you get a personal profile and concrete answers on whether (and how) DanCham makes sense for you.',
      paragraph3: '',
      tagline: '**2 minutes. No bullshit. Personal answers**',
      startButton: 'Start now',
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        className="w-full max-w-2xl mx-auto text-left px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 bg-gray-50 rounded-lg relative"
      >
        {/* Logo - Above headline */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-start mb-6 sm:mb-8"
        >
          <img
            src="/image.png"
            alt="DanCham - Danish-Indonesian Business Chamber"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-6 sm:mb-8 leading-tight"
        >
          {currentContent.headline}
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-grey-text mb-4 sm:mb-6 leading-relaxed"
        >
          {currentContent.paragraph1}
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-grey-text mb-6 sm:mb-8 leading-relaxed"
        >
          {currentContent.paragraph2}
        </motion.p>

        {/* Start Button with bounce animation */}
        <motion.div 
          variants={buttonVariants} 
          initial="hidden" 
          animate="visible"
          className="flex justify-center sm:justify-start mb-6 sm:mb-8"
        >
          <motion.div animate={bounceAnimation}>
            <Button
              variant="primary"
              onClick={onStart}
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 min-h-[48px] sm:min-h-[52px] md:min-h-[56px] touch-manipulation shadow-button-hover font-semibold"
            >
              {currentContent.startButton}
            </Button>
          </motion.div>
        </motion.div>

        {/* Tagline with icons - Under button */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 text-base sm:text-lg text-danish-red font-semibold"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">⏱️</span>
            <span>{language === 'da' ? '2 minutter' : '2 minutes'}</span>
          </div>
          <span className="text-danish-red">·</span>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✨</span>
            <span>{language === 'da' ? 'Nul bullshit' : 'No bullshit'}</span>
          </div>
          <span className="text-danish-red">·</span>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">💡</span>
            <span>{language === 'da' ? 'Personlige svar' : 'Personal answers'}</span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-grey-light"
        >
          <p className="text-sm sm:text-base text-grey-text leading-relaxed">
            {language === 'da' ? (
              <>
                Vil du være medlem eller vide mere?{' '}
                <a
                  href="mailto:admin@dancham.id"
                  className="text-danish-red hover:text-red-hover font-semibold underline underline-offset-2 transition-colors"
                >
                  Skriv til admin@dancham.id
                </a>
              </>
            ) : (
              <>
                Want to become a member or learn more?{' '}
                <a
                  href="mailto:admin@dancham.id"
                  className="text-danish-red hover:text-red-hover font-semibold underline underline-offset-2 transition-colors"
                >
                  Contact admin@dancham.id
                </a>
              </>
            )}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
