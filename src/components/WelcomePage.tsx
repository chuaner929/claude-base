interface Props {
  onStart: () => void;
}

export default function WelcomePage({ onStart }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#FF6B6B] opacity-10 blur-[100px] animate-float" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#6C5CE7] opacity-10 blur-[100px] animate-float-delayed" />
      <div className="absolute top-[50%] left-[60%] w-[300px] h-[300px] rounded-full bg-[#00D2D3] opacity-8 blur-[80px] animate-float-slow" />

      <div className="relative z-10 text-center max-w-lg animate-fade-in-up">
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF6B6B]/15 text-[#FF6B6B] border border-[#FF6B6B]/30 mb-6">
            短视频创作者定位测评
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#6C5CE7] to-[#00D2D3] bg-clip-text text-transparent leading-tight px-2">
          发现你的<br />创作者人格
        </h1>

        <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-3">
          24 道精心设计的问题，四个维度全面分析
        </p>
        <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
          帮你找到最适合的内容方向、变现路径和运营节奏
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-10 text-xs sm:text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#FF6B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            约 5 分钟
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#6C5CE7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            匿名测评
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00D2D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            即时结果
          </div>
        </div>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] text-white text-base sm:text-lg font-semibold shadow-lg shadow-[#FF6B6B]/25 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all duration-300 active:scale-95 min-h-[48px]"
        >
          开始测评
          <svg className="w-5 h-5 group-active:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className="mt-8 text-xs text-[#6B7280]">
          基于四轴交叉验证模型 · 256 种可能组合
        </p>
      </div>
    </div>
  );
}
