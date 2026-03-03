import Link from 'next/link';
import type { PortfolioWork } from '@/types';

interface PortfolioCardProps {
  work: PortfolioWork;
  index: number;
}

export default function PortfolioCard({ work, index }: PortfolioCardProps) {
  const description = work.metadata?.description || '';
  const featuredImage = work.metadata?.featured_image;
  const service = work.metadata?.service;
  const projectUrl = work.metadata?.project_url;

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-surface-800">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={work.title}
            width={400}
            height={250}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl text-slate-600">
            🎨
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-transparent to-transparent" />

        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <Link
              href={`/portfolio/${work.slug}`}
              className="px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg"
            >
              View Details
            </Link>
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur transition-all duration-200"
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* Service badge */}
        {service && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-surface-900/80 text-brand-400 backdrop-blur border border-brand-500/20">
              {service.metadata?.icon_emoji || '⚙️'} {service.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/portfolio/${work.slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
            {work.title}
          </h3>
        </Link>
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
}