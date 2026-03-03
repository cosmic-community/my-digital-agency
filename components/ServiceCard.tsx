import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const name = service.metadata?.name || service.title;
  const description = service.metadata?.description || '';
  const emoji = service.metadata?.icon_emoji || '⚙️';
  const featuredImage = service.metadata?.featured_image;

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      {featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-3xl">{emoji}</div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {!featuredImage && <div className="text-4xl mb-4">{emoji}</div>}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors duration-300">
          {name}
        </h3>
        {description && (
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{description}</p>
        )}
      </div>
    </div>
  );
}