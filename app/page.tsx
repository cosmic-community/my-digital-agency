import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import TestimonialCard from '@/components/TestimonialCard';
import {
  getServices,
  getPortfolioWorks,
  getTeamMembers,
  getTestimonials,
} from '@/lib/cosmic';

export default async function HomePage() {
  const [services, portfolioWorks, teamMembers, testimonials] = await Promise.all([
    getServices(),
    getPortfolioWorks(),
    getTeamMembers(),
    getTestimonials(),
  ]);

  const featuredServices = services.slice(0, 3);
  const featuredWorks = portfolioWorks.slice(0, 3);
  const featuredTeam = teamMembers.slice(0, 4);

  return (
    <div>
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
              What We Do
            </span>
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              We combine AI innovation with expert craftsmanship to deliver digital solutions that drive results.
            </p>
          </div>
          {featuredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400">Services coming soon.</p>
          )}
          {services.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-surface-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
              Our Work
            </span>
            <h2 className="section-heading">Featured Portfolio</h2>
            <p className="section-subheading">
              Explore our latest projects and see how we bring ideas to life with cutting-edge technology.
            </p>
          </div>
          {featuredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work, index) => (
                <PortfolioCard key={work.id} work={work} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400">Portfolio projects coming soon.</p>
          )}
          {portfolioWorks.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-brand-500/30 text-brand-400 hover:bg-brand-500/10 font-semibold transition-all duration-300"
              >
                View Full Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900 to-surface-950" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
              Our Team
            </span>
            <h2 className="section-heading">Meet the Experts</h2>
            <p className="section-subheading">
              A talented team of innovators, designers, and engineers dedicated to your success.
            </p>
          </div>
          {featuredTeam.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredTeam.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400">Team members coming soon.</p>
          )}
          {teamMembers.length > 4 && (
            <div className="text-center mt-12">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-brand-500/30 text-brand-400 hover:bg-brand-500/10 font-semibold transition-all duration-300"
              >
                Meet the Full Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-950" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
              Testimonials
            </span>
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
            </p>
          </div>
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400">Testimonials coming soon.</p>
          )}
          {testimonials.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-brand-500/30 text-brand-400 hover:bg-brand-500/10 font-semibold transition-all duration-300"
              >
                Read All Testimonials
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 to-surface-900" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s build something extraordinary together. Our team is ready to bring your vision to life with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
              >
                View Our Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-slate-300 hover:border-brand-500/50 hover:text-white font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}