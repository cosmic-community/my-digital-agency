export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-900">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-brand-500/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-500 animate-spin" />
        </div>
        <p className="text-slate-400 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}