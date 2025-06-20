export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            🤖 Claude Code
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            你的终端里的 AI 编程助手，让代码开发变得更简单、更快速 ⚡
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20">
            <code className="text-white font-mono text-lg">npm install -g @anthropic-ai/claude-code</code>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* What is Claude Code - Large Card */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🎯</span>
              <h2 className="text-3xl font-bold text-white">什么是 Claude Code？</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Claude Code 是一个直接运行在你终端里的 AI 编程工具，通过自然语言命令帮助开发者更快地编写代码。
            </p>
            <p className="text-white/60 text-base">
              无需中间服务器，直接连接 API，在你的开发环境中无缝集成 🚀
            </p>
          </div>

          {/* Core Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <span className="text-5xl mb-4 block">✨</span>
              <h3 className="text-2xl font-bold text-white mb-4">核心特性</h3>
              <ul className="text-white/80 space-y-2 text-left">
                <li>• 编辑整个代码库文件</li>
                <li>• 理解代码架构逻辑</li>
                <li>• 执行测试和修复</li>
                <li>• 创建提交和 PR</li>
              </ul>
            </div>
          </div>

          {/* Easy to Use */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <span className="text-5xl mb-4 block">🎮</span>
              <h3 className="text-2xl font-bold text-white mb-4">简单易用</h3>
              <p className="text-white/80 mb-4">
                安装后直接在终端运行
              </p>
              <code className="bg-black/30 text-green-400 px-3 py-2 rounded-lg block font-mono">
                claude
              </code>
            </div>
          </div>

          {/* Development Scenarios */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <span className="text-5xl mb-4 block">🔧</span>
              <h3 className="text-2xl font-bold text-white mb-4">开发场景</h3>
              <ul className="text-white/80 space-y-2 text-left">
                <li>🐛 软件开发调试</li>
                <li>🔍 代码探索理解</li>
                <li>🔄 自动化维护</li>
                <li>📚 技术文档协助</li>
              </ul>
            </div>
          </div>

          {/* Natural Language */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">💬</span>
              <h2 className="text-3xl font-bold text-white">自然语言编程</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">你可以说：</h4>
                <div className="space-y-2">
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-white/80">"帮我修复这个 bug"</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-white/80">"重构这个函数"</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <p className="text-white/80">"添加单元测试"</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Claude 会：</h4>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                    <p className="text-white/80">✅ 理解你的需求</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                    <p className="text-white/80">✅ 分析代码结构</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                    <p className="text-white/80">✅ 自动执行操作</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Ready */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
            <div className="text-center">
              <span className="text-5xl mb-4 block">🏢</span>
              <h3 className="text-2xl font-bold text-white mb-4">企业级支持</h3>
              <ul className="text-white/80 space-y-2 text-left">
                <li>🛡️ Amazon Bedrock</li>
                <li>☁️ Google Vertex AI</li>
                <li>🔒 安全合规部署</li>
                <li>👥 组织级使用</li>
              </ul>
            </div>
          </div>

          {/* Get Started */}
          <div className="lg:col-span-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
            <div className="text-center">
              <span className="text-6xl mb-6 block">🚀</span>
              <h2 className="text-4xl font-bold text-white mb-6">开始你的 AI 编程之旅</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                只需三步，即可体验 AI 驱动的代码开发体验
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl mb-4">1️⃣</div>
                  <h4 className="text-xl font-semibold text-white mb-2">安装</h4>
                  <code className="bg-black/30 text-green-400 px-3 py-2 rounded-lg text-sm block">
                    npm install -g @anthropic-ai/claude-code
                  </code>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl mb-4">2️⃣</div>
                  <h4 className="text-xl font-semibold text-white mb-2">启动</h4>
                  <code className="bg-black/30 text-green-400 px-3 py-2 rounded-lg text-sm block">
                    claude
                  </code>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl mb-4">3️⃣</div>
                  <h4 className="text-xl font-semibold text-white mb-2">开始编程</h4>
                  <p className="text-white/80 text-sm">
                    用自然语言描述你的需求
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-white/60 text-lg">
            由 <span className="text-white font-semibold">Anthropic</span> 开发 • 
            让编程变得更智能 🧠
          </p>
        </div>
      </div>
    </div>
  );
}
