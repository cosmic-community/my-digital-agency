import type { Metadata } from 'next';
import { getPortfolioWorks } from '@/lib/cosmic';
import PortfolioCard from '@/components/PortfolioCard';

export const metadata: Metadata = {
  title: 'Portfolio | My Digital Agency',
  description: 'Browse our portfolio of AI-powered web development and workflow automation projects.',
};

export default async function PortfolioPage() {
  const works = await getPortfolioWorks();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface-900 to-surface-950" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
            🎨 Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore the projects we&apos;ve delivered for clients across industries, powered by AI innovation and creative expertise.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {works.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, index) => (
                <PortfolioCard key={work.id} work={work} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Portfolio Coming Soon</h3>
              <p className="text-slate-400">We&apos;re curating our best work. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}