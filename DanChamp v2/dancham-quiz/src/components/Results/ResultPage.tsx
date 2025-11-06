import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useQuizState } from '../../hooks/useQuizState';
import { useTranslation } from '../../hooks/useTranslation';
import { profiles } from '../../data/profiles';
import { ProfileCard } from './ProfileCard';
import { Button } from '../UI/Button';

export const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { profileId } = useParams<{ profileId: string }>();
  const { calculatedProfile, language, reset } = useQuizState();
  const { t } = useTranslation(language);
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleReset = () => {
    reset();
    navigate('/');
  };

  // Use profileId from URL params, fallback to calculatedProfile from state
  const profile = profiles.find((p) => p.id === (profileId || calculatedProfile));

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <p>Profile not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-white to-off-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c41e3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a1f3a]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#c41e3a]/3 to-[#1a1f3a]/3 rounded-full blur-3xl"></div>
      </div>
      
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.3}
        />
      )}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <ProfileCard 
          profile={profile} 
          language={language}
          title={t('results.title')}
          subtitle={t('results.subtitle')}
        />

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-10 sm:mt-14 px-2 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              onClick={handleReset}
              className="w-full sm:w-auto min-h-[52px] sm:min-h-[60px] text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('results.retake')}
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              onClick={() => window.location.href = 'https://dancham.id'}
              className="w-full sm:w-auto min-h-[52px] sm:min-h-[60px] text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {t('results.getStarted')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

