import type { Question } from '../types';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

interface Props {
  question: Question;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  currentIndex: number;
  total: number;
  isLastQuestion: boolean;
  hasAnswer: boolean;
  allAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  onSelect: (optionId: 'A' | 'B' | 'C' | 'D') => void;
  onBack: () => void;
  onGoToResult: () => void;
  onGoToQuestion: (index: number) => void;
}

export default function QuizPage({
  question,
  selectedAnswer,
  currentIndex,
  total,
  isLastQuestion,
  hasAnswer,
  allAnswers,
  onSelect,
  onBack,
  onGoToResult,
  onGoToQuestion,
}: Props) {
  return (
    <div className="min-h-screen bg-[#0F0F1A] pb-6 sm:pb-8">
      <ProgressBar
        currentIndex={currentIndex}
        total={total}
        answers={allAnswers}
        onBack={onBack}
        onGoToQuestion={onGoToQuestion}
      />
      <div className="pt-6 sm:pt-10">
        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onSelect={onSelect}
        />
      </div>
      {isLastQuestion && hasAnswer && (
        <div className="max-w-lg mx-auto px-4 mt-6 sm:mt-8">
          <button
            onClick={onGoToResult}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] text-white text-base sm:text-lg font-semibold shadow-lg shadow-[#FF6B6B]/25 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
          >
            查看结果
          </button>
        </div>
      )}
    </div>
  );
}
