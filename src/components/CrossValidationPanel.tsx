import type { OverallMatch } from '../types';

interface Props {
  overallMatch: OverallMatch;
}

export default function CrossValidationPanel({ overallMatch }: Props) {
  const matchItems = overallMatch.items;

  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 sm:p-5">
      <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">整体匹配度分析</h3>

      <div className="space-y-2 sm:space-y-3">
        {matchItems.map((item, i) => {
          const isPositive = item.icon === '✓';
          const isWarning = item.icon === '⚠';
          return (
            <div
              key={i}
              className={`flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm leading-relaxed ${
                isPositive
                  ? 'bg-[#00D2D3]/5 border border-[#00D2D3]/10 text-[#D1D5DB]'
                  : isWarning
                    ? 'bg-amber-500/5 border border-amber-500/10 text-amber-300/80'
                    : 'bg-[#FF6B6B]/5 border border-[#FF6B6B]/10 text-[#D1D5DB]'
              }`}
            >
              <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${
                isPositive
                  ? 'bg-[#00D2D3]/20 text-[#00D2D3]'
                  : isWarning
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-[#FF6B6B]/20 text-[#FF6B6B]'
              }`}>
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
