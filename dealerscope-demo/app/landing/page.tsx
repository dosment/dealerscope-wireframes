import { Metadata } from 'next';
import HeroSection from '@/components/landing/sections/HeroSection';
import ProblemSection from '@/components/landing/sections/ProblemSection';
import SolutionSection from '@/components/landing/sections/SolutionSection';
import HowItWorksSection from '@/components/landing/sections/HowItWorksSection';
import FeaturesSection from '@/components/landing/sections/FeaturesSection';
import ProductsSection from '@/components/landing/sections/ProductsSection';
import UseCasesSection from '@/components/landing/sections/UseCasesSection';
import SocialProofSection from '@/components/landing/sections/SocialProofSection';
import EarlyAccessSection from '@/components/landing/sections/EarlyAccessSection';
import FAQSection from '@/components/landing/sections/FAQSection';
import CTASection from '@/components/landing/sections/CTASection';

export const metadata: Metadata = {
  title: 'DealerScope - Real-Time Dealership Intelligence for Automotive Vendors',
  description: 'Know the moment dealerships change their chat tools, digital retailing, website providers, or finance apps. Join the waitlist for early access and 50% off.',
  keywords: 'dealership intelligence, automotive sales, competitive intelligence, chat tools, digital retailing, website monitoring',
  openGraph: {
    title: 'DealerScope - Dominate Your Territory With Real-Time Intelligence',
    description: 'Join 500+ sales professionals on the waitlist. Get 50% off your first year.',
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-primary">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ProductsSection />
      <UseCasesSection />
      <SocialProofSection />
      <EarlyAccessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
