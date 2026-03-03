// app/portfolio/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPortfolioWorkBySlug, getPortfolioWorks } from '@/lib/cosmic';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getPortfolioWorkBySlug(slug);

  if (!work) {
    return { title: 'Project Not Found | My Digital Agency' };
  }

  return {
    title: `${work.title} | My Digital Agency Portfolio`,
    description: work.metadata?.description || 'View this project in our portfolio.',
  };
}

export async function generateStaticParams() {
  const works = await getPortfolioWorks();
  return works.map((work) => ({ slug: work.slug }));
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = await getPortfolioWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const description = work.metadata?.description || '';
  const featuredImage = work.metadata?.featured_image;
  const projectUrl = work.metadata?.project_url || '';
  const service = work.metadata?.service;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-8 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface-900 to-surface-950" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>

          {service && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-500/15 text-brand-400 border border-brand-500/20 mb-4">
              {service.metadata?.icon_emoji || '⚙️'} {service.title}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{work.title}</h1>

          {description && (
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">{description}</p>
          )}

          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
            >
              Visit Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden glass-card p-2">
              <img
                src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={work.title}
                width={1600}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}