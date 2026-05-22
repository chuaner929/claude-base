import { useQuiz } from './hooks/useQuiz';
import WelcomePage from './components/WelcomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import { calculateScores } from './utils/scoring';

export default function App() {
  const {
    step,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    answers,
    portrait,
    boundaryCase,
    matchScore,
    isLastQuestion,
    hasAnswer,
    startQuiz,
    selectAnswer,
    goPrev,
    goToResult,
    restart,
    goToQuestion,
  } = useQuiz();

  if (step === 'welcome') {
    return <WelcomePage onStart={startQuiz} />;
  }

  if (step === 'quiz' && currentQuestion) {
    return (
      <QuizPage
        question={currentQuestion}
        selectedAnswer={answers[currentQuestion.id] ?? null}
        currentIndex={currentQuestionIndex}
        total={totalQuestions}
        isLastQuestion={isLastQuestion}
        hasAnswer={hasAnswer}
        allAnswers={answers}
        onSelect={(optionId) => selectAnswer(currentQuestion.id, optionId)}
        onBack={goPrev}
        onGoToResult={goToResult}
        onGoToQuestion={goToQuestion}
      />
    );
  }

  if (step === 'result') {
    if (portrait && boundaryCase) {
      const scoring = calculateScores(answers);
      return (
        <ResultPage
          portrait={portrait}
          boundaryCase={boundaryCase}
          matchScore={matchScore}
          scoring={scoring}
          onRestart={restart}
        />
      );
    }
    // Fallback: something went wrong with result computation
    console.warn('Result step but portrait or boundaryCase is null, returning to welcome');
    return <WelcomePage onStart={startQuiz} />;
  }

  return <WelcomePage onStart={startQuiz} />;
}
