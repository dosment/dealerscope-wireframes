import { Gift } from 'lucide-react';

/**
 * Early Access Benefits Section - Landing Page
 *
 * Shows what waitlist members get
 */
export default function EarlyAccessSection() {
  const benefits = [
    '50% off your first year',
    'Lifetime priority support',
    'Input on feature development',
    'Extended 30-day trial (vs 14)',
    'Lock in launch pricing forever',
  ];

  return (
    <section id="early-access" className="py-20 bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="font-brand text-3xl lg:text-5xl font-bold mb-6">
          Early Access Benefits
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Join the waitlist and get exclusive early-bird pricing when we launch
        </p>

        {/* Benefits Card */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-8 lg:p-12">
          <div className="flex justify-center mb-6">
            <Gift aria-hidden="true" className="w-12 h-12 text-teal-400" />
          </div>
          <h3 className="font-brand text-2xl font-semibold mb-8">
            Waitlist Member Perks
          </h3>

          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center justify-center space-x-3">
                <svg
                  className="w-6 h-6 text-teal-400 flex-shrink-0"
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
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Join the Waitlist Now
          </a>
        </div>

        {/* Trust Element */}
        <p className="mt-8 text-sm text-slate-400">
          No payment required. No credit card needed. Just your email and we'll keep you updated.
        </p>
      </div>
    </section>
  );
}
