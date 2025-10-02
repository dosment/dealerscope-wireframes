import { Gift, Check } from 'lucide-react';

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
    <section id="early-access" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="font-brand text-3xl lg:text-5xl font-bold mb-6">
          Early Access Benefits
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Join the waitlist and get exclusive early-bird pricing when we launch
        </p>

        {/* Benefits Card */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 lg:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <Gift aria-hidden="true" className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="font-brand text-2xl font-semibold mb-8">
            Waitlist Member Perks
          </h3>

          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center justify-center space-x-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={2} />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
