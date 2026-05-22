interface Props {
  matchScore: number;
  boundaryType: string;
  confidenceLabel: string;
}

export default function ResultHero({ matchScore, boundaryType, confidenceLabel }: Props) {
  const getScoreColor = (score: number) => {
    if (score >= 85) return { stroke: '#00D2D3', text: '#00D2D3' };
    if (score >= 70) return { stroke: '#6C5CE7', text: '#6C5CE7' };
    if (score >= 50) return { stroke: '#F59E0B', text: '#F59E0B' };
    return { stroke: '#FF6B6B', text: '#FF6B6B' };
  };

  const colors = getScoreColor(matchScore);
  const circumference = 2 * Math.PI * 54;

  return (
    <div className="relative text-center pt-6 sm:pt-8 pb-4 sm:pb-6">
      <div className="relative inline-flex items-center justify-center mb-5 sm:mb-6">
        <svg className="w-28 h-28 sm:w-36 sm:h-36 transform -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - matchScore / 100)}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl sm:text-4xl font-bold" style={{ color: colors.text }}>{matchScore}</span>
          <span className="text-xs text-[#9CA3AF] mt-0.5">匹配度</span>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">你的创作者人格画像</h2>
      <p className="text-xs sm:text-sm text-[#9CA3AF]">
        {boundaryType === 'clear' && `画像清晰 · 置信度${confidenceLabel}`}
        {boundaryType === 'mixed' && '呈现混合型特征 · 建议两方向各试一段时间'}
        {boundaryType === 'scattered' && '倾向尚不明确 · 建议先做内容测试积累数据'}
        {boundaryType === 'contradictory' && '存在内在矛盾 · 建议重新审视业务逻辑'}
      </p>
    </div>
  );
}
