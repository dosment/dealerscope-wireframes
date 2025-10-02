/**
 * How It Works Section - Landing Page
 *
 * Simple 3-step process
 */
export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Define Your Territory',
      description: 'Add dealerships manually or upload your entire book of business',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'We Monitor 24/7',
      description: 'Our system scans websites detecting every product change in real-time',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Strike First',
      description: 'Get instant alerts the moment a dealership makes a change',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Three Steps to{' '}
            <span className="text-navy-600">Territory Domination</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-navy-200 -z-10" />
              )}

              <div className="bg-elevated border border-primary rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-navy-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-teal-600 flex justify-center mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="font-brand text-xl font-semibold text-hero mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted">
            No manual checking. No spreadsheets. No missed opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
