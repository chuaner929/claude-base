interface Props {
  selected: boolean;
  disabled: boolean;
  optionId: string;
  text: string;
  onClick: () => void;
}

const optionIcons = ['🎬', '📱', '💡', '🌟'];

export default function OptionCard({ selected, disabled, optionId, text, onClick }: Props) {
  const idx = optionId.charCodeAt(0) - 65;
  const icon = optionIcons[idx] || '▶';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer min-h-[48px]
        ${selected
          ? 'border-[#FF6B6B] bg-[#FF6B6B]/10 shadow-lg shadow-[#FF6B6B]/15 scale-[1.02]'
          : 'border-white/10 glass hover:bg-white/[0.07] hover:border-white/20 hover:scale-[1.01]'
        }
        ${disabled && !selected ? 'opacity-40 cursor-not-allowed' : ''}
      `}
    >
      <div className="flex items-start gap-4">
        <span className={`text-2xl flex-shrink-0 mt-0.5 ${selected ? 'scale-110' : ''} transition-transform`}>
          {icon}
        </span>
        <div className="flex-1">
          <span className="inline-block px-2 py-0.5 rounded-md text-xs font-semibold bg-white/10 text-white/60 mb-2">
            {optionId}
          </span>
          <p className={`text-[15px] leading-relaxed ${selected ? 'text-white' : 'text-[#D1D5DB]'}`}>
            {text}
          </p>
        </div>
        {selected && (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6B6B] flex items-center justify-center animate-fade-in-up">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}
