import type { IPPortrait, BoundaryCase } from '../types';
import type { ScoringResult } from '../utils/scoring';
import ResultHero from './ResultHero';
import AxisDetailCards from './AxisDetailCards';
import RadarChart from './RadarChart';
import CrossValidationPanel from './CrossValidationPanel';
import PersonalizedAdvice from './PersonalizedAdvice';

interface Props {
  portrait: IPPortrait;
  boundaryCase: BoundaryCase;
  matchScore: number;
  scoring: ScoringResult;
  onRestart: () => void;
}

function getBoundaryLabel(boundaryCase: BoundaryCase): { type: string; confidence: string } {
  switch (boundaryCase.type) {
    case 'clear':
      return { type: '画像清晰', confidence: boundaryCase.confidence === 'high' ? '高' : '中' };
    case 'mixed':
      return { type: '混合型', confidence: '-' };
    case 'scattered':
      return { type: '分散型', confidence: '-' };
    case 'contradictory':
      return { type: '矛盾型', confidence: '-' };
  }
}

export default function ResultPage({ portrait, boundaryCase, matchScore, scoring, onRestart }: Props) {
  const bl = getBoundaryLabel(boundaryCase);

  return (
    <div className="min-h-screen bg-[#0F0F1A] pb-8 sm:pb-12">
      {/* Background orbs */}
      <div className="fixed top-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#FF6B6B] opacity-10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-200px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#6C5CE7] opacity-10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-lg mx-auto px-4">
        <div className="animate-fade-in-up">
          <ResultHero
            matchScore={matchScore}
            boundaryType={boundaryCase.type}
            confidenceLabel={bl.confidence}
          />
        </div>

        <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
          <div className="animate-fade-in-up animate-delay-1">
            <AxisDetailCards portrait={portrait} />
          </div>
          <div className="animate-fade-in-up animate-delay-2">
            <RadarChart
              axis1Scores={scoring.axis1.scores}
              axis2Scores={scoring.axis2.scores}
              axis3Scores={scoring.axis3.scores}
              axis4Scores={scoring.axis4.scores}
            />
          </div>
          <div className="animate-fade-in-up animate-delay-3">
            <CrossValidationPanel overallMatch={portrait.overallMatch} />
          </div>
          <div className="animate-fade-in-up animate-delay-4">
            <PersonalizedAdvice boundaryCase={boundaryCase} />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center space-y-3 animate-fade-in-up animate-delay-5">
          <button
            onClick={onRestart}
            className="px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer min-h-[44px]"
          >
            重新测评
          </button>
          <p className="text-[11px] sm:text-xs text-[#6B7280]">
            基于四轴交叉验证模型 · {boundaryCase.type === 'clear' ? boundaryCase.confidence === 'high' ? '高置信度画像' : '中等置信度画像' : '建议进一步探索'}
          </p>
        </div>
      </div>
    </div>
  );
}
