'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

/**
 * Hero Section - Landing Page
 *
 * Automotive industry aesthetic with dealership background
 * Clear value proposition with pre-launch positioning
 */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/90 to-slate-100/95 z-10" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100 border-2 border-orange-500 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">
              Coming Soon - Join the Waitlist
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-brand text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Dominate Your Territory With{' '}
            <span className="text-[#FF6B35]">Real-Time Dealership Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
            Know the moment dealerships change their chat tools, digital retailing,
            website providers, or finance apps.{' '}
            <span className="text-slate-900 font-semibold">Strike first. Win more deals.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl border-2 border-slate-300 hover:border-slate-400 transition-all duration-200 shadow-md"
            >
              Learn More
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center space-x-2 text-slate-600">
            <CheckCircle className="w-5 h-5 text-green-600" strokeWidth={2} />
            <span className="text-sm">
              Monitoring <span className="text-slate-900 font-semibold">10,000+ dealerships</span> across North America
            </span>
          </div>
        </div>

        {/* Dashboard Preview - Placeholder */}
        <div className="mt-16 max-w-2xl">
          <div className="bg-white rounded-xl border-2 border-slate-200 shadow-xl p-6">
            <div className="space-y-4">
              {/* Mock Alert 1 */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-sm font-semibold text-red-600">Product Changed</span>
                      <span className="text-xs text-slate-500">2h ago</span>
                    </div>
                    <p className="text-slate-900 font-medium">Luxury Motors removed LivePerson</p>
                    <p className="text-sm text-slate-600">Austin, TX</p>
                  </div>
                </div>
              </div>

              {/* Mock Alert 2 */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-sm font-semibold text-orange-600">Opportunity</span>
                      <span className="text-xs text-slate-500">5h ago</span>
                    </div>
                    <p className="text-slate-900 font-medium">Premium Auto installed Roadster</p>
                    <p className="text-sm text-slate-600">Dallas, TX</p>
                  </div>
                </div>
              </div>

              {/* Mock Alert 3 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm font-semibold text-blue-600">Website Change</span>
                      <span className="text-xs text-slate-500">1d ago</span>
                    </div>
                    <p className="text-slate-900 font-medium">Elite Dealership switched to Dealer.com</p>
                    <p className="text-sm text-slate-600">Houston, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
