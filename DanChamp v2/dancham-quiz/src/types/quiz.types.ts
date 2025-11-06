export type Language = 'da' | 'en';

export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<string, string | string[]>;
  language: Language;
  isComplete: boolean;
  calculatedProfile: string | null;
}

export interface QuizActions {
  setAnswer: (questionId: string, answer: string | string[]) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (questionNumber: number) => void;
  setLanguage: (lang: Language) => void;
  calculateProfile: () => string;
  reset: () => void;
}

export interface QuestionOption {
  id: string;
  emoji: string;
  title: {
    da: string;
    en: string;
  };
  subtitle?: {
    da: string;
    en: string;
  };
}

export interface Question {
  id: string;
  questionNumber: number;
  title: {
    da: string;
    en: string;
  };
  type: 'single' | 'multiple';
  required: boolean;
  minSelections?: number;
  maxSelections?: number;
  options: QuestionOption[];
  note?: {
    da: string;
    en: string;
  };
  conditionalFeedback?: (answerId: string) => {
    da: string;
    en: string;
  } | null;
  dynamicFeedback?: (selectedIds: string[]) => {
    da: string;
    en: string;
  } | null;
}

export interface Profile {
  id: string;
  title: {
    da: string;
    en: string;
  };
  tagline: {
    da: string;
    en: string;
  };
  description: {
    da: string;
    en: string;
  };
  benefits: {
    da: string[];
    en: string[];
  };
  youllMeet: {
    da: string;
    en: string;
  };
  nextSteps: {
    da: string[];
    en: string[];
  };
  triggers: {
    businessSituation?: string[];
    denmarkConnection?: string[];
    goals?: string[];
    industry?: string[];
    eventPriorities?: string[];
    experience?: string[];
    hesitations?: string[];
    ageGroup?: string[];
  };
}

export interface ValidationRule {
  type: 'single' | 'multiple';
  required: boolean;
  min?: number;
  max?: number;
}

export type ValidationRules = Record<string, ValidationRule>;

