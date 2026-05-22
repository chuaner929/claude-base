import type { AxisScores } from '../types';
import { AXIS1_LABELS, AXIS2_LABELS, AXIS3_LABELS, AXIS4_LABELS } from '../types';

interface Props {
  axis1Scores: AxisScores;
  axis2Scores: AxisScores;
  axis3Scores: AxisScores;
  axis4Scores: AxisScores;
}

interface DataPoint {
  label: string;
  value: number;
  max: number;
  color: string;
}

export default function RadarChart({ axis1Scores, axis2Scores, axis3Scores, axis4Scores }: Props) {
  const axesData: DataPoint[][] = [
    Object.entries(axis1Scores).map(([key, val]) => ({
      label: AXIS1_LABELS[key as keyof typeof AXIS1_LABELS]?.replace('型', '') || key,
      value: val,
      max: 18,
      color: '#FF6B6B',
    })),
    Object.entries(axis2Scores).map(([key, val]) => ({
      label: AXIS2_LABELS[key as keyof typeof AXIS2_LABELS]?.replace('型', '') || key,
      value: val,
      max: 18,
      color: '#6C5CE7',
    })),
    Object.entries(axis3Scores).map(([key, val]) => ({
      label: AXIS3_LABELS[key as keyof typeof AXIS3_LABELS]?.replace('型', '') || key,
      value: val,
      max: 18,
      color: '#00D2D3',
    })),
    Object.entries(axis4Scores).map(([key, val]) => ({
      label: AXIS4_LABELS[key as keyof typeof AXIS4_LABELS]?.replace('型', '') || key,
      value: val,
      max: 18,
      color: '#F59E0B',
    })),
  ];

  const axisLabels = ['商业逻辑', '内容基因', '变现模式', '运营节奏'];
  const axisColors = ['#FF6B6B', '#6C5CE7', '#00D2D3', '#F59E0B'];

  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 sm:p-5">
      <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">四维雷达图</h3>
      <p className="text-[11px] sm:text-xs text-[#9CA3AF] mb-3 sm:mb-4">每个维度展示 4 个子类型的得分对比，最高分即为你在该维度的主导类型。</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {axesData.map((dataPoints, axisIdx) => (
          <div key={axisIdx} className="bg-white/[0.02] rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: axisColors[axisIdx] }} />
              <span className="text-xs sm:text-sm font-medium text-white">{axisLabels[axisIdx]}</span>
            </div>
            <div className="space-y-2">
              {dataPoints.map((dp, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs text-[#9CA3AF] w-14 sm:w-16 truncate" title={dp.label}>{dp.label}</span>
                  <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.min((dp.value / dp.max) * 100, 100)}%`,
                        backgroundColor: dp.color,
                      }}
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/60 w-5 sm:w-6 text-right">{dp.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
