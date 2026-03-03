import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/cosmic';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Testimonials | My Digital Agency',
  description: 'Hear what our clients have to say about working with My Digital Agency.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface-900 to-surface-950" />
        <div className="absolute top-20 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
            💬 Testimonials
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Client <span className="gradient-text">Voices</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real stories from real clients. Discover how we&apos;ve helped businesses transform through AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-2">Testimonials Coming Soon</h3>
              <p className="text-slate-400">We&apos;re collecting feedback from our happy clients!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}