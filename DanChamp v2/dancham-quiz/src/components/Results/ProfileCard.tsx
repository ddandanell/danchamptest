import React from 'react';
import { motion } from 'framer-motion';
import { Profile } from '../../types/quiz.types';
import { BenefitsList } from './BenefitsList';
import { ActionSteps } from './ActionSteps';

interface ProfileCardProps {
  profile: Profile;
  language: 'da' | 'en';
  title?: string;
  subtitle?: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, language, title, subtitle }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-white via-white to-[#f8f9fa] rounded-3xl shadow-2xl border border-[#e0e0e0] p-8 sm:p-10 md:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c41e3a]/5 to-transparent rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#1a1f3a]/5 to-transparent rounded-full blur-3xl -z-0"></div>
      <div className="relative z-10">
      {/* Title and Subtitle - Inside the card with large icon */}
      {(title || subtitle) && (
        <motion.div 
          className="text-center mb-4 sm:mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="text-5xl sm:text-6xl md:text-7xl"
              >
                🎯
              </motion.div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1a1f3a] via-[#c41e3a] to-[#1a1f3a] bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="text-5xl sm:text-6xl md:text-7xl"
              >
                🎯
              </motion.div>
            </div>
          )}
          {subtitle && (
            <motion.p 
              className="text-xs sm:text-sm text-grey-text px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}

      <motion.div 
        className="mb-6 text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 sm:mb-4 leading-tight">
          {profile.title[language]}
        </h2>
        <motion.p 
          className="text-sm sm:text-base text-[#c41e3a] font-semibold mb-3 sm:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {profile.tagline[language]}
        </motion.p>
        <motion.p 
          className="text-xs sm:text-sm md:text-base text-navy-dark leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {profile.description[language]}
        </motion.p>
      </motion.div>

      <motion.div 
        className="border-t border-[#e0e0e0] pt-6 mb-6 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <BenefitsList benefits={profile.benefits[language]} language={language} />
      </motion.div>

      <motion.div 
        className="border-t border-[#e0e0e0] pt-6 mb-6 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-dark mb-3 sm:mb-4 flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">🤝</span>
          <span>{language === 'da' ? 'Du Møder' : 'You Will Meet'}</span>
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-grey-text leading-relaxed">
          {profile.youllMeet[language]}
        </p>
      </motion.div>

      <motion.div 
        className="border-t border-[#e0e0e0] pt-6 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <ActionSteps steps={profile.nextSteps[language]} language={language} />
      </motion.div>
      </div>
    </motion.div>
  );
};

