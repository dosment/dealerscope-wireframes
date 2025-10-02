'use client';

/**
 * CTA Section - Landing Page
 *
 * Final call-to-action with embedded Tally waitlist form
 */
export default function CTASection() {
  return (
    <section id="get-started" className="py-20 bg-navy-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-white mb-4">
            Be First in Line When We Launch
          </h2>
          <p className="text-xl text-slate-300">
            Join 500+ sales professionals waiting for DealerScope
          </p>
        </div>

        {/* Tally Form Embed */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <iframe
            data-tally-src="https://tally.so/embed/mRp7MP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
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
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>100% spam-free</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Exclusive early access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
