interface Props {
  currentIndex: number;
  total: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  onBack: () => void;
  onGoToQuestion: (index: number) => void;
}

export default function ProgressBar({ currentIndex, total, answers, onBack, onGoToQuestion }: Props) {
  const dots = Array.from({ length: total }, (_, i) => i);

  return (
    <div className="sticky top-0 z-20 bg-[#0F0F1A]/90 backdrop-blur-md border-b border-white/5 px-3 sm:px-4 py-2.5 sm:py-3">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs sm:text-sm text-[#9CA3AF] hover:text-white transition-colors cursor-pointer py-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            上一题
          </button>
          <span className="text-xs sm:text-sm text-[#9CA3AF]">{currentIndex + 1} / {total}</span>
        </div>
        <div className="flex gap-1.5">
          {dots.map((_, i) => {
            const hasAnswer = answers[i + 1] !== undefined;
            const isCurrent = i === currentIndex;
            const isPast = i < currentIndex;
            return (
              <button
                key={i}
                onClick={() => onGoToQuestion(i)}
                className={`flex-1 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  isPast
                    ? 'bg-[#FF6B6B]'
                    : isCurrent
                      ? 'bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7]'
                      : hasAnswer
                        ? 'bg-white/25'
                        : 'bg-white/10'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
