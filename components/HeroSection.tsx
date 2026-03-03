import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            AI-Powered Digital Solutions
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          We Build the
          <br />
          <span className="gradient-text">Future of Web</span>
        </h1>

        <p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          A digital agency specializing in AI-powered web development and workflow automation.
          We turn complex ideas into elegant, high-performing digital experiences.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
          >
            View Our Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-slate-300 hover:border-brand-500/50 hover:text-white font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Services
          </Link>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">AI</div>
            <div className="text-sm text-slate-500 mt-1">Powered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
            <div className="text-sm text-slate-500 mt-1">Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
            <div className="text-sm text-slate-500 mt-1">Custom</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}