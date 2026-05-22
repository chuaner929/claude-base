import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  info: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, info: '' };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    this.setState({ info: errorInfo.componentStack || '' });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-[#0F0F1A] flex items-center justify-center px-6">
          <div className="max-w-lg w-full">
            <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#FF6B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white text-center mb-2">渲染出错</h2>
            <div className="bg-[#FF6B6B]/5 border border-[#FF6B6B]/20 rounded-xl p-4 mb-3">
              <p className="text-xs text-[#FF6B6B]/70 mb-1">错误信息</p>
              <pre className="text-sm text-[#FF6B6B] whitespace-pre-wrap break-words">{this.state.error.message}</pre>
            </div>
            {this.state.info && (
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-3">
                <p className="text-xs text-[#9CA3AF] mb-1">组件堆栈</p>
                <pre className="text-xs text-[#6B7280] whitespace-pre-wrap break-words max-h-48 overflow-auto">{this.state.info}</pre>
              </div>
            )}
            <button
              onClick={() => {
                this.setState({ error: null, info: '' });
                window.location.reload();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              刷新页面重试
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
