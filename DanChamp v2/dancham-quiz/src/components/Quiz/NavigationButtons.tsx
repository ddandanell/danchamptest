import React from 'react';
import { Button } from '../UI/Button';

interface NavigationButtonsProps {
  onNext: () => void;
  onBack: () => void;
  canGoNext: boolean;
  canGoBack: boolean;
  isLastQuestion: boolean;
  nextLabel: string;
  backLabel: string;
  finishLabel: string;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onBack,
  canGoNext,
  canGoBack,
  isLastQuestion,
  nextLabel,
  backLabel,
  finishLabel,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-stretch sm:items-center gap-2 sm:gap-2 mt-4 sm:mt-6 px-2 sm:px-0">
      <Button
        variant="secondary"
        onClick={onBack}
        disabled={!canGoBack}
        className="w-full sm:w-auto sm:min-w-[100px] min-h-[40px] sm:min-h-[44px] text-sm sm:text-base touch-manipulation"
      >
        {backLabel}
      </Button>
      <Button
        variant="primary"
        onClick={onNext}
        disabled={!canGoNext}
        className="w-full sm:w-auto sm:min-w-[100px] min-h-[40px] sm:min-h-[44px] text-sm sm:text-base touch-manipulation"
      >
        {isLastQuestion ? finishLabel : nextLabel}
      </Button>
    </div>
  );
};
