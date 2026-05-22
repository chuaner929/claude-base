import type { Question } from '../types';
import OptionCard from './OptionCard';

interface Props {
  question: Question;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  onSelect: (optionId: 'A' | 'B' | 'C' | 'D') => void;
}

const axisNames: Record<number, { label: string; color: string }> = {
  1: { label: '商业逻辑', color: '#FF6B6B' },
  2: { label: '内容基因', color: '#6C5CE7' },
  3: { label: '变现模式', color: '#00D2D3' },
  4: { label: '运营节奏', color: '#F59E0B' },
};

export default function QuestionCard({ question, selectedAnswer, onSelect }: Props) {
  const axis = axisNames[question.axis];

  return (
    <div className="max-w-lg mx-auto px-4">
      {/* Axis badge */}
      <div className="mb-6 flex items-center gap-3">
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-medium border"
          style={{ color: axis.color, borderColor: axis.color + '40', backgroundColor: axis.color + '10' }}
        >
          {axis.label}
        </span>
        {question.isReversed && (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
            反向校验题
          </span>
        )}
      </div>

      {/* Question text */}
      <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-6 sm:mb-8">
        {question.text}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionCard
            key={option.id}
            optionId={option.id}
            text={option.text}
            selected={selectedAnswer === option.id}
            disabled={false}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
