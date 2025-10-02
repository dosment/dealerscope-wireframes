import { Map, Eye, Bell } from 'lucide-react';

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
      icon: Map,
    },
    {
      number: '2',
      title: 'We Monitor 24/7',
      description: 'Our system scans websites detecting every product change in real-time',
      icon: Eye,
    },
    {
      number: '3',
      title: 'Strike First',
      description: 'Get instant alerts the moment a dealership makes a change',
      icon: Bell,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Three Steps to{' '}
            <span className="text-[#00A896]">Territory Domination</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-accent/20 -z-10" />
                )}

                <div className="bg-elevated border border-primary rounded-xl p-8 text-center hover:shadow-lg hover:border-accent/30 transition-all duration-200">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-brand text-xl font-semibold text-hero mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary">{step.description}</p>
                </div>
              </div>
            );
          })}
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
