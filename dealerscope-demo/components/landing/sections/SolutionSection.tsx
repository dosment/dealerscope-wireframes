import { CircleDot } from 'lucide-react';

/**
 * Solution Section - Landing Page
 *
 * Shows the DealerScope solution with visual proof
 */
export default function SolutionSection() {
  const benefits = [
    'Monitor every dealership website in your territory—automatically',
    'Get instant alerts when they change chat, digital retailing, website providers, finance apps, or trade tools',
    'Know exactly when to call with the perfect timing',
    'Track competitor movements across your entire market',
  ];

  return (
    <section id="solution" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-elevated border border-primary rounded-xl p-6 shadow-xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-primary">
                  <h4 className="font-semibold text-hero">My Territory</h4>
                  <span className="inline-flex items-center gap-2 text-sm text-success-600 font-medium">
                    <CircleDot aria-hidden="true" className="w-3 h-3" />
                    Live
                  </span>
                </div>

                {/* Mock Territory Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-hero">47</div>
                    <div className="text-xs text-muted">Dealers</div>
                  </div>
                  <div className="bg-warning-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-warning-700">8</div>
                    <div className="text-xs text-warning-700">Changes</div>
                  </div>
                  <div className="bg-success-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-success-700">3</div>
                    <div className="text-xs text-success-700">Wins</div>
                  </div>
                </div>

                {/* Mock Alert List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-danger-50 border border-danger-200 rounded-xl">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-danger-900">Luxury Motors</div>
                      <div className="text-xs text-danger-700">Removed LivePerson</div>
                    </div>
                    <span className="text-xs text-danger-600">2h ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-warning-50 border border-warning-200 rounded-xl">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-warning-900">Premium Auto</div>
                      <div className="text-xs text-warning-700">Installed Roadster</div>
                    </div>
                    <span className="text-xs text-warning-600">5h ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-success-50 border border-success-200 rounded-xl">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-success-900">Elite Dealership</div>
                      <div className="text-xs text-success-700">No change (stable)</div>
                    </div>
                    <span className="text-xs text-success-600">1d ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-6">
              Own Your Territory.{' '}
              <span className="text-[#00A896]">Outsmart Your Competition.</span>
            </h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-secondary text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Stat Callout */}
            <div className="bg-secondary border border-accent/20 rounded-xl p-6">
              <div className="text-sm text-hero mb-1">Average Response Time</div>
              <div className="text-3xl font-bold text-primary">
                2.4 Hours
              </div>
              <div className="text-sm text-accent mt-1">
                From change detection to your outreach
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
