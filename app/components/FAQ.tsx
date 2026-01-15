'use client';

import React, { useState } from 'react';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is it safe to use an SMM PAK Panel?',
      answer:
        'Yes, it is absolutely safe to use PAK Panel services. We implement industry-standard security measures, use encrypted connections, and follow strict privacy policies to protect your account information. Our platform has been trusted by thousands of users worldwide, and we continuously monitor and update our security protocols to ensure the highest level of safety for all our clients.',
    },
    {
      question: 'Which is the cheapest SMM panel?',
      answer:
        'PAK Panel offers some of the most competitive prices in the market, starting from just $0.001. We provide transparent pricing with no hidden fees, making us one of the most affordable SMM panel options available. Our pricing structure is designed to accommodate both small-scale users and large-scale resellers.',
    },
    {
      question: 'How do I contact with Support?',
      answer:
        'You can reach our support team 24/7 through multiple channels: live chat on our website, email support, or by creating a support ticket in your dashboard. Our dedicated support team is always ready to assist you with any questions or issues you may have.',
    },
    {
      question: 'Which is the best SMM panel?',
      answer:
        'PAK Panel is recognized as one of the leading SMM panels in the industry. We offer a comprehensive range of services across all major social media platforms, fast delivery times, competitive pricing, reliable customer support, and a user-friendly interface. Our commitment to quality and customer satisfaction sets us apart from competitors.',
    },
    {
      question: 'What is an SMM panel?',
      answer:
        'An SMM (Social Media Marketing) panel is an automated platform that provides social media marketing services such as followers, likes, views, comments, and shares across various platforms like Instagram, Facebook, Twitter, YouTube, TikTok, and more. It allows users to boost their social media presence efficiently and cost-effectively.',
    },
    {
      question: 'How to choose the best SMM panel?',
      answer:
        'When choosing an SMM panel, consider factors such as service quality, pricing, delivery speed, customer support availability, platform coverage, user interface ease, payment security, and customer reviews. PAK Panel excels in all these areas, making it an ideal choice for your social media marketing needs.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-primary py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
        </div>

        {/* ✅ Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
              key={index}
              className="w-full break-inside-avoid mb-4"
            >
              <div
                className={`
                  overflow-hidden transition-shadow duration-300
                  ${isExpanded ? 'rounded-2xl shadow-lg' : 'rounded-full'}
                  bg-foreground
                `}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full p-4 md:p-5 flex items-center justify-between gap-4
                    transition-colors duration-300
                    ${isExpanded 
                      ? 'bg-secondary text-background' 
                      : 'bg-foreground text-primary hover:bg-foreground/95'
                    }
                  `}
                >
                  <h3 className="text-base md:text-lg font-bold text-left flex-1">
                    {faq.question}
                  </h3>
            
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                    <svg
                      className={`w-5 h-5 text-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
            
                {/* Answer */}
{/* Answer */}
{isExpanded && (
  <div className="bg-foreground">
    <div
      className="
        p-4 md:p-5 pt-0
        animate-in fade-in slide-in-from-top-2
        duration-200
      "
    >
      <p className="text-sm md:text-base text-primary leading-relaxed">
        {faq.answer}
      </p>
    </div>
  </div>
)}


              </div>
            </div>
            
            );
          })}
        </div>
      </div>
    </section>
  );
}
