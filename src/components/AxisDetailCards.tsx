import type { IPPortrait } from '../types';

interface Props {
  portrait: IPPortrait;
}

export default function AxisDetailCards({ portrait }: Props) {
  const { businessBase, contentDirection, operationRhythm } = portrait;

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 商业底盘 */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 sm:p-5 hover:bg-white/[0.05] transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
          <h3 className="text-sm sm:text-base font-semibold text-white">商业底盘</h3>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#FF6B6B]/15 text-[#FF6B6B]/80 border border-[#FF6B6B]/20">
            {businessBase.modelName}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-3">{businessBase.description}</p>
        <div className="bg-[#FF6B6B]/5 border border-[#FF6B6B]/10 rounded-xl p-3">
          <p className="text-[11px] sm:text-xs text-[#FF6B6B]/80 font-medium mb-1">建议核心动作</p>
          <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">{businessBase.recommendation}</p>
        </div>
        {businessBase.warning && (
          <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-3 mt-3">
            <p className="text-[11px] sm:text-xs text-amber-400/80 font-medium mb-1">注意</p>
            <p className="text-xs sm:text-sm text-amber-300/80 leading-relaxed">{businessBase.warning}</p>
          </div>
        )}
      </div>

      {/* 内容方向 */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 sm:p-5 hover:bg-white/[0.05] transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
          <h3 className="text-sm sm:text-base font-semibold text-white">内容方向</h3>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#6C5CE7]/15 text-[#6C5CE7]/80 border border-[#6C5CE7]/20">
            {contentDirection.contentType}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-3">{contentDirection.description}</p>
        <div className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
          <span className="text-[11px] sm:text-xs text-[#6C5CE7]/80 font-medium">内容形式：</span>
          {contentDirection.contentForm}
        </div>
        <div className="mt-2 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
          <span className="text-[11px] sm:text-xs text-[#6C5CE7]/80 font-medium">核心优势：</span>
          {contentDirection.advantage}
        </div>
      </div>

      {/* 运营节奏 */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 sm:p-5 hover:bg-white/[0.05] transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <h3 className="text-sm sm:text-base font-semibold text-white">运营节奏</h3>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F59E0B]/15 text-[#F59E0B]/80 border border-[#F59E0B]/20">
            {operationRhythm.rhythmType}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-3">{operationRhythm.description}</p>
        <div className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
          <span className="text-[11px] sm:text-xs text-[#F59E0B]/80 font-medium">更新频率：</span>
          {operationRhythm.frequency}
        </div>
        <div className="mt-2 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
          <span className="text-[11px] sm:text-xs text-[#F59E0B]/80 font-medium">团队建议：</span>
          {operationRhythm.teamAdvice}
        </div>
      </div>
    </div>
  );
}
