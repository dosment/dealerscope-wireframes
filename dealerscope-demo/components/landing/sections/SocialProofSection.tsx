/**
 * Social Proof Section - Landing Page
 *
 * Pre-launch version with generic testimonials and stats
 */
export default function SocialProofSection() {
  const testimonials = [
    {
      quote: 'This is exactly what I\'ve been looking for. Manually checking dealership websites is killing my productivity.',
      role: 'Regional Sales Manager',
      industry: 'Chat Technology Vendor',
      badge: 'Beta Tester',
    },
    {
      quote: 'If this works as advertised, it\'s a game-changer for our sales team. Can\'t wait to try it.',
      role: 'VP of Sales',
      industry: 'Digital Retailing Platform',
      badge: 'Waitlist Member',
    },
    {
      quote: 'The timing intelligence alone would be worth it. Excited to see this launch.',
      role: 'Territory Rep',
      industry: 'Website Provider',
      badge: 'Early Access Request',
    },
  ];

  const stats = [
    {
      value: '500+',
      label: 'Sales Pros on Waitlist',
    },
    {
      value: '10,000+',
      label: 'Dealerships Ready to Monitor',
    },
    {
      value: '5',
      label: 'Product Categories Tracked',
    },
  ];

  return (
    <section id="social-proof" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Be Among the First to{' '}
            <span className="text-[#FF6B35]">Access DealerScope</span>
          </h2>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-elevated border border-primary rounded-xl p-6"
            >
              <div className="mb-4">
                <span className="inline-block bg-orange-50 text-[#FF6B35] text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.badge}
                </span>
              </div>
              <p className="text-secondary italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="text-sm">
                <div className="font-semibold text-hero">{testimonial.role}</div>
                <div className="text-muted">{testimonial.industry}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
