export default function Loading() {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Logo/Icon Animation */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-primary opacity-20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent spin"></div>
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-hero mb-1 font-brand tracking-tight">
            DealerScope
          </h2>
          <p className="text-sm text-secondary">Loading your dashboard...</p>
        </div>

        {/* Optional Progress Bar */}
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-red-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}