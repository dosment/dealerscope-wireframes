'use client';

import { Check, Lock, Zap } from 'lucide-react';

/**
 * CTA Section - Landing Page
 *
 * Final call-to-action with embedded Tally waitlist form
 */
export default function CTASection() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 border-2 border-orange-500 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">
              Limited Spots Available
            </span>
          </div>
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-white mb-4">
            Be First in Line When We Launch
          </h2>
          <p className="text-xl text-slate-300">
            Join 500+ sales professionals waiting for DealerScope
          </p>
        </div>

        {/* Tally Form Embed */}
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://tally.so/embed/mRp7MP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="2440"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join the DealerScope Waitlist"
            className="w-full"
          />
        </div>

        {/* Trust Elements Below Form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300 text-sm">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-success" strokeWidth={2} />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-success" strokeWidth={2} />
            <span>100% spam-free</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-success" strokeWidth={2} />
            <span>Exclusive early access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
