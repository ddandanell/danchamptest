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
      className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 lg:p-16 max-w-5xl mx-auto"
    >
      {/* Title and Subtitle - Inside the card */}
      {(title || subtitle) && (
        <div className="text-center mb-8 sm:mb-10">
          {title && (
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 sm:mb-4 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-grey-text px-2">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 sm:mb-4">
          {profile.title[language]}
        </h2>
        <p className="text-base sm:text-lg text-grey-text mb-4 sm:mb-6">{profile.tagline[language]}</p>
        <p className="text-sm sm:text-base text-navy-dark leading-relaxed">{profile.description[language]}</p>
      </div>

      <div className="border-t border-[#e0e0e0] pt-8 mb-8">
        <BenefitsList benefits={profile.benefits[language]} language={language} />
      </div>

      <div className="border-t border-[#e0e0e0] pt-8 mb-8">
        <h3 className="text-lg sm:text-xl font-bold text-navy-dark mb-4">
          {language === 'da' ? 'Du Møder' : 'You Will Meet'}
        </h3>
        <p className="text-sm sm:text-base text-grey-text leading-relaxed">
          {profile.youllMeet[language]}
        </p>
      </div>

      <div className="border-t border-[#e0e0e0] pt-8">
        <ActionSteps steps={profile.nextSteps[language]} />
      </div>
    </motion.div>
  );
};

