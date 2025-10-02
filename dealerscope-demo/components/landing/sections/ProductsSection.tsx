import { Car, CreditCard, Globe, MessageCircle, RefreshCcw, type LucideIcon } from 'lucide-react';

/**
 * Products Section - Landing Page
 *
 * Shows the 5 product categories we track
 */
export default function ProductsSection() {
  type Category = {
    icon: LucideIcon;
    iconClassName: string;
    title: string;
    products: string[];
  };

  const categories: Category[] = [
    {
      icon: MessageCircle,
      iconClassName: 'text-accent',
      title: 'Chat Tools',
      products: ['LivePerson', 'Podium', 'Gubagoo', '+ Others'],
    },
    {
      icon: Car,
      iconClassName: 'text-accent',
      title: 'Digital Retailing',
      products: ['Roadster', 'AutoFi', 'Upstart', '+ Others'],
    },
    {
      icon: Globe,
      iconClassName: 'text-accent',
      title: 'Website Providers',
      products: ['Dealer.com', 'DealerOn', 'Dealer Inspire', '+ Others'],
    },
    {
      icon: CreditCard,
      iconClassName: 'text-accent',
      title: 'Finance Apps',
      products: ['RouteOne', 'DealerTrack', '+ Others'],
    },
    {
      icon: RefreshCcw,
      iconClassName: 'text-accent',
      title: 'Trade Tools',
      products: ['vAuto', 'AccuTrade', '+ Others'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Comprehensive Coverage Across{' '}
            <span className="text-accent">Five Product Categories</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-elevated border border-primary rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon aria-hidden="true" className={`w-10 h-10 ${category.iconClassName}`} />
                </div>
                <h3 className="font-brand text-lg font-semibold text-hero mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.products.map((product, pIndex) => (
                    <li key={pIndex} className="text-sm text-secondary">
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Subtext */}
        <div className="text-center mt-12">
          <p className="text-muted max-w-3xl mx-auto">
            Our detection technology identifies products from website code, meta tags,
            JavaScript libraries, and visual elements.
          </p>
        </div>
      </div>
    </section>
  );
}
