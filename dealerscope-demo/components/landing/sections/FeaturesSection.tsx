import { Bell, Map, BarChart3, Search, Mail, Download } from 'lucide-react';

/**
 * Features Section - Landing Page
 *
 * 6 key features showcasing product depth
 */
export default function FeaturesSection() {
  const features = [
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications when dealerships change chat tools, digital retailing, website providers, finance apps, or trade tools',
    },
    {
      icon: Map,
      title: 'Territory Dashboard',
      description: 'Visual map of every dealership. See status at a glance. Filter by product type or status.',
    },
    {
      icon: BarChart3,
      title: 'Competitor Tracking',
      description: 'Know exactly which products your competitors have installed. Track their wins and losses.',
    },
    {
      icon: Search,
      title: 'Prospecting Intelligence',
      description: 'Find dealerships in specific regions using competitor products. Build targeted prospect lists.',
    },
    {
      icon: Mail,
      title: 'Custom Email Digests',
      description: 'Daily or weekly summaries of changes in your territory. Never miss important updates.',
    },
    {
      icon: Download,
      title: 'Export & Reporting',
      description: 'Export dealership data and changes to your CRM. Share insights with your team.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Everything You Need to{' '}
            <span className="text-accent">Dominate Your Market</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-elevated border border-primary rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-200"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-brand text-lg font-semibold text-hero mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
