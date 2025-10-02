/**
 * Problem Section - Landing Page
 *
 * Validates we understand the pain points
 * Uses automotive industry aesthetic
 */
export default function ProblemSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Late to the Opportunity',
      description: 'By the time you hear a dealership switched chat tools, three competitors already called them.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Wasting Time on the Wrong Prospects',
      description: 'Hours spent researching dealerships that aren\'t ready to buy, while hot opportunities go unnoticed.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flying Blind in Your Territory',
      description: 'You have no idea which dealerships are actively evaluating new solutions—until it\'s too late.',
    },
  ];

  return (
    <section id="problem" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Your Competition Is Winning Deals{' '}
            <span className="text-navy-600">You Should Have Won</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-elevated border border-primary rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-navy-600 mb-4">{point.icon}</div>
              <h3 className="font-brand text-xl font-semibold text-hero mb-3">
                {point.title}
              </h3>
              <p className="text-secondary leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center mt-16">
          <p className="text-xl text-navy-700 font-medium">
            What if you had a competitive advantage your rivals don't?
          </p>
        </div>
      </div>
    </section>
  );
}
