import type { Metadata } from 'next';
import { getServices } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Services | My Digital Agency',
  description: 'Explore our AI-powered web development and workflow automation services.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface-900 to-surface-950" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
            ⚙️ Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From AI-driven web development to workflow automation, we provide end-to-end digital solutions that accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Services Coming Soon</h3>
              <p className="text-slate-400">We&apos;re currently updating our service offerings. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}