import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const name = member.metadata?.name || member.title;
  const role = member.metadata?.role || '';
  const bio = member.metadata?.bio || '';
  const photo = member.metadata?.photo;
  const linkedinUrl = member.metadata?.linkedin_url || '';

  return (
    <div
      className="glass-card rounded-2xl p-6 text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Photo */}
      <div className="relative w-28 h-28 mx-auto mb-5">
        <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-brand-500/20 group-hover:ring-brand-500/50 transition-all duration-500">
          {photo ? (
            <img
              src={`${photo.imgix_url}?w=224&h=224&fit=crop&auto=format,compress&facepad=3&faceindex=1`}
              alt={name}
              width={112}
              height={112}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-surface-800 flex items-center justify-center text-3xl text-slate-500">
              👤
            </div>
          )}
        </div>
        {/* Online indicator */}
        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-surface-900" />
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors duration-300">
        {name}
      </h3>
      {role && (
        <p className="text-brand-400 text-sm font-medium mt-1">{role}</p>
      )}
      {bio && (
        <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">{bio}</p>
      )}

      {/* LinkedIn */}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}