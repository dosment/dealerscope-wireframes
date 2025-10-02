import { Clock, FileText, AlertCircle } from 'lucide-react';

/**
 * Problem Section - Landing Page
 *
 * Validates we understand the pain points
 * Uses automotive industry aesthetic
 */
export default function ProblemSection() {
  const painPoints = [
    {
      icon: Clock,
      title: 'Late to the Opportunity',
      description: 'By the time you hear a dealership switched chat tools, three competitors already called them.',
    },
    {
      icon: FileText,
      title: 'Wasting Time on the Wrong Prospects',
      description: 'Hours spent researching dealerships that aren\'t ready to buy, while hot opportunities go unnoticed.',
    },
    {
      icon: AlertCircle,
      title: 'Flying Blind in Your Territory',
      description: 'You have no idea which dealerships are actively evaluating new solutions—until it\'s too late.',
    },
  ];

  return (
    <section id="problem" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Your Competition Is Winning Deals{' '}
            <span className="text-accent">You Should Have Won</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-elevated border border-primary rounded-xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-danger-soft rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-danger" strokeWidth={1.5} />
                </div>
                <h3 className="font-brand text-xl font-semibold text-hero mb-3">
                  {point.title}
                </h3>
                <p className="text-secondary leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Transition */}
        <div className="text-center mt-16">
          <p className="text-xl text-hero font-medium">
            What if you had a competitive advantage your rivals don't?
          </p>
        </div>
      </div>
    </section>
  );
}
