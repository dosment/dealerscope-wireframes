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
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-secondary/90 to-primary/95 z-10" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-warning-600/20 border border-warning-500 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-warning-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-warning-400 uppercase tracking-wide">
              Coming Soon - Join the Waitlist
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-brand text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Dominate Your Territory With{' '}
            <span className="text-accent">Real-Time Dealership Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
            Know the moment dealerships change their chat tools, digital retailing,
            website providers, or finance apps.{' '}
            <span className="text-white font-semibold">Strike first. Win more deals.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center space-x-2 text-slate-300">
            <CheckCircle className="w-5 h-5 text-success" strokeWidth={2} />
            <span className="text-sm">
              Monitoring <span className="text-white font-semibold">10,000+ dealerships</span> across North America
            </span>
          </div>
        </div>

        {/* Dashboard Preview - Placeholder */}
        <div className="mt-16 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2">
          <div className="bg-slate-800/50 backdrop-blur rounded-lg border border-slate-700 p-6">
            <div className="space-y-4">
              {/* Mock Alert 1 */}
              <div className="bg-danger-500/10 border border-danger-500/30 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2 h-2 bg-danger-500 rounded-full" />
                      <span className="text-sm font-semibold text-danger-400">Product Changed</span>
                      <span className="text-xs text-slate-400">2h ago</span>
                    </div>
                    <p className="text-white font-medium">Luxury Motors removed LivePerson</p>
                    <p className="text-sm text-slate-400">Austin, TX</p>
                  </div>
                </div>
              </div>

              {/* Mock Alert 2 */}
              <div className="bg-warning-500/10 border border-warning-500/30 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2 h-2 bg-warning-500 rounded-full" />
                      <span className="text-sm font-semibold text-warning-400">Opportunity</span>
                      <span className="text-xs text-slate-400">5h ago</span>
                    </div>
                    <p className="text-white font-medium">Premium Auto installed Roadster</p>
                    <p className="text-sm text-slate-400">Dallas, TX</p>
                  </div>
                </div>
              </div>

              {/* Mock Alert 3 */}
              <div className="bg-info-500/10 border border-info-500/30 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2 h-2 bg-info-500 rounded-full" />
                      <span className="text-sm font-semibold text-info-400">Website Change</span>
                      <span className="text-xs text-slate-400">1d ago</span>
                    </div>
                    <p className="text-white font-medium">Elite Dealership switched to Dealer.com</p>
                    <p className="text-sm text-slate-400">Houston, TX</p>
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
