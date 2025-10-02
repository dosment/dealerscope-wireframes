'use client';

import { useState } from 'react';

/**
 * FAQ Section - Landing Page
 *
 * Pre-launch focused FAQ with accordion
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'When will DealerScope launch?',
      answer: 'We\'re targeting Q2 2025. Waitlist members will get 2 weeks early access before public launch.',
    },
    {
      question: 'How does the waitlist work?',
      answer: 'Add your email below. When we launch, we\'ll notify waitlist members first and offer exclusive early-bird pricing. No commitment required.',
    },
    {
      question: 'Is this really free to join?',
      answer: 'Yes! The waitlist is completely free. No credit card, no commitment. We just want to gauge interest and keep you informed.',
    },
    {
      question: 'How does DealerScope detect product changes?',
      answer: 'We use advanced web scraping and pattern recognition to identify chat widgets, digital retailing tools, website platforms, finance apps, and trade tools from dealership websites. Our system checks sites regularly and alerts you immediately when changes occur.',
    },
    {
      question: 'What product categories do you track?',
      answer: 'We track chat tools (LivePerson, Podium, etc.), digital retailing platforms (Roadster, AutoFi, etc.), website providers (Dealer.com, DealerOn, etc.), finance applications (RouteOne, DealerTrack, etc.), and trade tools (vAuto, AccuTrade, etc.).',
    },
    {
      question: 'Can I influence what features you build?',
      answer: 'Absolutely! Waitlist members will get a survey asking what features matter most to them. Early access users will have direct input on our roadmap.',
    },
    {
      question: 'What if I have more questions?',
      answer: 'Email us at hello@dealerscope.com - we\'d love to hear from you! We\'re especially interested in understanding your specific use case.',
    },
    {
      question: 'Will pricing increase after launch?',
      answer: 'Yes. Early waitlist members will get 50% off the first year and can lock in their rate. Post-launch pricing will be higher.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-brand text-3xl lg:text-5xl font-bold text-hero mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-elevated border border-primary rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary transition-colors"
              >
                <span className="font-semibold text-hero pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-navy-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
