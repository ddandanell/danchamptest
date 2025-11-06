import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { QuizState, QuizActions, Language } from '../types/quiz.types';
import { matchProfile } from '../utils/profileMatcher';
import { profiles } from '../data/profiles';

interface QuizStore extends QuizState, QuizActions {}

export const useQuizState = create<QuizStore>()(
  persist(
    (set, get) => ({
      currentQuestion: 1,
      answers: {},
      language: (localStorage.getItem('dancham-quiz-lang') as Language) || 'da',
      isComplete: false,
      calculatedProfile: null,

      setAnswer: (questionId: string, answer: string | string[]) => {
        set((state) => ({
          answers: { ...state.answers, [questionId]: answer },
        }));
      },

      nextQuestion: () => {
        const state = get();
        const maxQuestions = 8;
        if (state.currentQuestion < maxQuestions) {
          set({ currentQuestion: state.currentQuestion + 1 });
        } else {
          // Calculate profile when completing last question
          const profileId = matchProfile(state.answers, profiles);
          set({
            currentQuestion: maxQuestions,
            calculatedProfile: profileId,
            isComplete: true,
          });
        }
      },

      previousQuestion: () => {
        set((state) => ({
          currentQuestion: Math.max(state.currentQuestion - 1, 1),
        }));
      },

      goToQuestion: (questionNumber: number) => {
        const maxQuestions = 8;
        const validQuestion = Math.max(1, Math.min(questionNumber, maxQuestions));
        set({ currentQuestion: validQuestion });
      },

      setLanguage: (lang: Language) => {
        set({ language: lang });
        localStorage.setItem('dancham-quiz-lang', lang);
      },

      calculateProfile: () => {
        const { answers } = get();
        const profileId = matchProfile(answers, profiles);
        set({ calculatedProfile: profileId, isComplete: true });
        return profileId;
      },

      reset: () => {
        set({
          currentQuestion: 0,
          answers: {},
          isComplete: false,
          calculatedProfile: null,
        });
      },
    }),
    {
      name: 'dancham-quiz-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        language: state.language,
        answers: state.answers,
        currentQuestion: state.currentQuestion,
      }),
    }
  )
);

