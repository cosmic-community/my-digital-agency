import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const clientName = testimonial.metadata?.client_name || testimonial.title;
  const company = testimonial.metadata?.company || '';
  const quote = testimonial.metadata?.quote || '';
  const avatar = testimonial.metadata?.avatar;

  return (
    <div
      className="glass-card rounded-2xl p-8 group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 animate-fade-in-up relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote mark */}
      <div className="absolute top-6 right-6 text-brand-500/20 text-6xl font-serif leading-none select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      {quote && (
        <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
          &ldquo;{quote}&rdquo;
        </p>
      )}

      {/* Client info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand-500/20 flex-shrink-0">
          {avatar ? (
            <img
              src={`${avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress&facepad=3&faceindex=1`}
              alt={clientName}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-brand-600 flex items-center justify-center text-white text-sm font-bold">
              {clientName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{clientName}</p>
          {company && (
            <p className="text-slate-500 text-xs">{company}</p>
          )}
        </div>
      </div>
    </div>
  );
}