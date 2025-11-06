import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    <div className="min-h-screen bg-off-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 relative">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <ProfileCard 
          profile={profile} 
          language={language}
          title={t('results.title')}
          subtitle={t('results.subtitle')}
        />

        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-2 sm:px-0">
          <Button
            variant="secondary"
            onClick={handleReset}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] touch-manipulation"
          >
            {t('results.retake')}
          </Button>
          <Button
            variant="primary"
            onClick={() => window.location.href = 'https://dancham.id'}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] touch-manipulation"
          >
            {t('results.getStarted')}
          </Button>
        </div>
      </div>
    </div>
  );
};

