import type { BoundaryCase } from '../types';

interface Props {
  boundaryCase: BoundaryCase;
}

export default function PersonalizedAdvice({ boundaryCase }: Props) {
  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 sm:p-5">
      <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">下一步建议</h3>

      <div className="space-y-3 sm:space-y-4">
        {boundaryCase.type === 'clear' && (
          <>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D2D3]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#00D2D3]">1</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">聚焦主方向，先跑通 MVP</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">按画像建议的内容形式和节奏，连续发布 30 条内容，观察数据和反馈，不要在这个阶段频繁变换方向。</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#6C5CE7]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#6C5CE7]">2</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">建立数据闭环</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">每 10 条内容做一次复盘：播放量、互动率、粉丝增长、私信质量。用数据反向校准内容策略。</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#F59E0B]">3</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">3 个月后交叉验证</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">实际运营数据和体感可能与测评结果有出入。建议 3 个月后重新做一次测评，对比两次结果。</p>
              </div>
            </div>
          </>
        )}

        {boundaryCase.type === 'mixed' && (
          <>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-3">
              你的画像呈现混合特征——<span className="text-white font-medium">{boundaryCase.types.join(' + ')}</span>。这不是坏事，说明你具备跨风格的能力。
            </p>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D2D3]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#00D2D3]">1</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">各方向试 15 条</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">分别用两个方向的内容各发布 15 条，用数据（完播率、互动、粉丝画像）判断哪个更对。</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#6C5CE7]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#6C5CE7]">2</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">关注你的真实体验</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">哪种内容你做起来更顺手、更享受、更有持续输出的动力？数据之外，你的创作状态也是重要指标。</p>
              </div>
            </div>
          </>
        )}

        {boundaryCase.type === 'scattered' && (
          <>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-3">
              你的回答在各类型之间较为分散，没有明显的主导倾向——这很常见，特别是在你刚开始探索短视频的阶段。
            </p>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D2D3]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#00D2D3]">1</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">内容实验期：每周换一种风格</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">连续 4 周，每周尝试一种不同的内容形式（口播/故事/视觉/过程），记录自己的感受和数据反馈。</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#6C5CE7]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#6C5CE7]">2</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">再测一次</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">跑完 4 周实验后重新做一次测评，届时你的自我认知会更清晰，测评结果也会更准确。</p>
              </div>
            </div>
          </>
        )}

        {boundaryCase.type === 'contradictory' && (
          <>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-3">
              你的测评结果存在多处内在矛盾——你可能在理想状态和现实约束之间摇摆，或者对自己还不够了解。
            </p>
            {boundaryCase.issues.length > 0 && (
              <div className="space-y-1.5 mb-3">
                {boundaryCase.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-amber-300/80">
                    <span className="flex-shrink-0 mt-0.5">•</span>
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center text-[10px] sm:text-xs text-[#FF6B6B]">!</span>
              <div>
                <p className="text-xs sm:text-sm text-white font-medium mb-0.5 sm:mb-1">建议先理清基本面</p>
                <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">在做内容之前，先用纸笔写下：你实际有什么资源？你的产品/服务到底是什么？你真正愿意投入时间做什么类型的内容？然后再回来测一次。</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
