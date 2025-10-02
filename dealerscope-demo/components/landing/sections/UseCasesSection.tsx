/**
 * Use Cases Section - Landing Page
 *
 * 3 persona cards showing how different vendors benefit
 */
export default function UseCasesSection() {
  const useCases = [
    {
      title: 'For Chat Tool Vendors',
      description: 'See the moment a dealership removes LivePerson or Podium. Call them before they\'ve even started evaluating alternatives.',
      benefits: [
        'Track competitor installations',
        'Identify unprotected dealerships',
        'Monitor your own customer retention',
      ],
      color: 'teal',
    },
    {
      title: 'For Digital Retailing Vendors',
      description: 'Know which dealerships just launched Roadster or AutoFi. Find opportunities where competitors are underperforming.',
      benefits: [
        'New installation alerts',
        'Competitive displacement tracking',
        'Market penetration analysis',
      ],
      color: 'navy',
    },
    {
      title: 'For Website Providers',
      description: 'Dealerships changing website providers are highly active buyers. Get notified immediately when sites switch platforms.',
      benefits: [
        'Site redesign detection',
        'Provider migration alerts',
        'Technology stack monitoring',
      ],
      color: 'teal',
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Built for{' '}
            <span className="text-navy-600">Sales Professionals Who Win</span>
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-elevated border border-primary rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-brand text-xl font-semibold text-hero mb-4">
                {useCase.title}
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <ul className="space-y-3">
                {useCase.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start space-x-2">
                    <svg
                      className={`w-5 h-5 ${
                        useCase.color === 'teal' ? 'text-teal-600' : 'text-navy-600'
                      } flex-shrink-0 mt-0.5`}
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
                    <span className="text-sm text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
