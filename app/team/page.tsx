import type { Metadata } from 'next';
import { getTeamMembers } from '@/lib/cosmic';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata: Metadata = {
  title: 'Team | My Digital Agency',
  description: 'Meet the talented team behind My Digital Agency.',
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/50 via-surface-900 to-surface-950" />
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
            👥 Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collective of designers, engineers, and strategists united by a passion for building extraordinary digital experiences.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Profiles Coming Soon</h3>
              <p className="text-slate-400">We&apos;re updating our team page. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}