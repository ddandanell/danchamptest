import { Language } from '../types/quiz.types';

export type Translation = {
  [key in Language]: {
    common: {
      next: string;
      back: string;
      start: string;
      submit: string;
      finish: string;
      loading: string;
      error: string;
      selectOne: string;
      selectUpTo: string;
      required: string;
    };
    intro: {
      title: string;
      subtitle: string;
      details: string;
      description: string;
      whatIsIt: string;
      whatYouGet: string;
      howItWorks: string;
      startButton: string;
    };
    progress: {
      question: string;
      of: string;
    };
    results: {
      yourProfile: string;
      title: string;
      subtitle: string;
      whoYouAre: string;
      whatYouGet: string;
      youWillMeet: string;
      nextSteps: string;
      membership: string;
      joinNow: string;
      getStarted: string;
      bookCall: string;
      shareResult: string;
      retake: string;
    };
  };
};

export const translations: Translation = {
  da: {
    common: {
      next: 'Næste',
      back: 'Tilbage',
      start: 'Start Quiz',
      submit: 'Se Mit Resultat',
      finish: 'Afslut',
      loading: 'Indlæser...',
      error: 'Noget gik galt. Prøv venligst igen.',
      selectOne: 'Vælg én',
      selectUpTo: 'Vælg op til',
      required: 'Dette spørgsmål er påkrævet',
    },
    intro: {
      title: 'Hvad kan dansk-indonesisk business gøre for dig?',
      subtitle: 'En interaktiv quiz der finder din perfekte match i DanCham-netværket',
      details: '8 spørgsmål · 2 minutter · Personlige anbefalinger til sidst',
      description: '8 spørgsmål · 2 minutter · Personlige anbefalinger til sidst',
      whatIsIt: 'Hvad er denne quiz?',
      whatYouGet: 'Hvad får du ud af den?',
      howItWorks: 'Sådan virker det',
      startButton: 'Start Quiz',
    },
    progress: {
      question: 'Spørgsmål',
      of: 'af',
    },
    results: {
      yourProfile: 'Din DanCham-Profil:',
      title: 'Dit Resultat',
      subtitle: 'Baseret på dine svar, passer dette medlemskab bedst til dig:',
      whoYouAre: 'Hvem du er',
      whatYouGet: 'Hvad du får ud af DanCham',
      youWillMeet: 'Medlemmer du vil møde',
      nextSteps: 'Anbefalede første skridt',
      membership: 'Dit medlemskab',
      joinNow: 'Tilmeld dig nu',
      getStarted: 'Kom I Gang',
      bookCall: 'Book gratis intro-samtale',
      shareResult: 'Del dit resultat',
      retake: 'Tag quizzen igen',
    },
  },
  en: {
    common: {
      next: 'Next',
      back: 'Back',
      start: 'Start Quiz',
      submit: 'See My Result',
      finish: 'Finish',
      loading: 'Loading...',
      error: 'Something went wrong. Please try again.',
      selectOne: 'Select one',
      selectUpTo: 'Select up to',
      required: 'This question is required',
    },
    intro: {
      title: 'What can Danish-Indonesian business do for you?',
      subtitle: 'An interactive quiz that finds your perfect match in the DanCham network',
      details: '8 questions · 2 minutes · Personal recommendations at the end',
      description: '8 questions · 2 minutes · Personal recommendations at the end',
      whatIsIt: 'What is this quiz?',
      whatYouGet: 'What do you get from it?',
      howItWorks: 'How it works',
      startButton: 'Start Quiz',
    },
    progress: {
      question: 'Question',
      of: 'of',
    },
    results: {
      yourProfile: 'Your DanCham Profile:',
      title: 'Your Result',
      subtitle: 'Based on your answers, this membership fits you best:',
      whoYouAre: 'Who you are',
      whatYouGet: 'What you get from DanCham',
      youWillMeet: 'Members you will meet',
      nextSteps: 'Recommended first steps',
      membership: 'Your membership',
      joinNow: 'Join now',
      getStarted: 'Get Started',
      bookCall: 'Book free intro call',
      shareResult: 'Share your result',
      retake: 'Retake quiz',
    },
  },
};
