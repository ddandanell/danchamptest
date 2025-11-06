import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { QuizIntro } from './components/Quiz/QuizIntro';
import { QuizContainer } from './components/Quiz/QuizContainer';
import { ResultPage } from './components/Results/ResultPage';
import { Header } from './components/UI/Header';
import { Footer } from './components/UI/Footer';
import { useQuizState } from './hooks/useQuizState';
import { questions } from './data/questions';

// Wrapper component for QuizIntro to handle navigation
const QuizIntroWrapper: React.FC = () => {
  const { language, setLanguage } = useQuizState();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <QuizIntro
      onStart={handleStart}
      language={language}
      onLanguageChange={setLanguage}
    />
  );
};

function AppContent() {
  const { language, setLanguage, currentQuestion, goToQuestion } = useQuizState();
  const location = useLocation();

  // Show header on all pages (intro, quiz, and result)
  const showHeader = true;

  // Get current question title for header - only show on quiz page
  const currentQuestionTitle = useMemo(() => {
    // Only show question title when on quiz page
    if (location.pathname === '/quiz' && currentQuestion > 0) {
      const question = questions.find((q) => q.questionNumber === currentQuestion);
      return question ? question.title[language] : undefined;
    }
    return undefined;
  }, [currentQuestion, language, location.pathname]);

  // Only allow question switching when on quiz page
  const allowQuestionChange = location.pathname === '/quiz' && currentQuestion > 0;

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      {showHeader && (
        <Header 
          currentQuestion={currentQuestion} 
          totalQuestions={8}
          language={language}
          questionTitle={currentQuestionTitle}
          onQuestionChange={allowQuestionChange ? goToQuestion : undefined}
          onLanguageChange={setLanguage}
          showProgress={location.pathname === '/quiz' && currentQuestion > 0}
        />
      )}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<QuizIntroWrapper />} />
            <Route
              path="/quiz"
              element={<QuizContainer />}
            />
            <Route
              path="/result/:profileId"
              element={<ResultPage />}
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer language={language} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
