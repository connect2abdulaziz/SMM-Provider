'use client';

import React, { useState } from 'react';

export default function Benefits() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const benefits = [
    'Small and Medium-Sized Businesses ',
    'Influencers',
    'E-commerce Businesses',
    'Freelancers and Solopreneurs',
    'Non-Profit Organizations',
    'Local Businesses',
    'Digital Marketing Agencies',
    'Startups',
    'Content Creators',
    'Event Organizers',
    'Musicians and Artists',
    'Resellers',
  ];

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Who Can Benefit from Social Media Marketing{' '}
            <span className="text-secondary">(SMM) Panel Services?</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto font-medium">
            SMM panel services offer personalized solutions for various entities—from entrepreneurs and small businesses 
            to major companies and influencers—to simplify content scheduling, analytics, and automation, thereby boosting 
            social media influence.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const isExpanded = expandedItems.includes(index);

            return (
              <div key={index} className="w-full break-inside-avoid mb-4">
                <div
                  className={`
                    overflow-hidden transition-shadow duration-300
                    ${isExpanded ? 'rounded-2xl shadow-lg' : 'rounded-full'}
                    bg-foreground
                  `}
                  onClick={() => toggleItem(index)}
                >
                  {/* Benefit Header */}
                  <div className="flex items-center justify-between p-5 md:p-6 cursor-pointer transition-colors duration-300">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black flex-1">
                      {benefit}
                    </h3>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                       transition-transform duration-300
                        ${isExpanded ? 'rotate-45 bg-secondary' : 'bg-gray-200 hover:bg-gray-300'}
                      `}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(index);
                      }}
                    >
                      <svg
                        className={`w-5 h-5 ${isExpanded ? 'text-background' : 'text-primary'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="bg-foreground animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-5 pt-0">
                        <p className="text-sm md:text-base text-black leading-relaxed">
                          {benefit} can leverage our SMM panel services to enhance their online presence, increase engagement, 
                          and grow their audience across multiple social media platforms. Our automated solutions help streamline 
                          content management and boost visibility effectively.
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
