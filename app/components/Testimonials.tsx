import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Natasha',
      rating: 5,
      feedback: 'Unbelievable prices! Our prices are most reasonable in the market, starting from just $0.001. The quality of service is exceptional and delivery is lightning fast.',
      highlighted: false,
    },
    {
      name: 'David',
      rating: 5,
      feedback: 'What we have with this fantastic website can\'t be fully expressed in words. PAK Panel has been a lifesaver for me and my account when I lost all motivation to grow. They have great packages and promote only quality service.',
      highlighted: true,
    },
    {
      name: 'John Banner',
      rating: 5,
      feedback: 'What we have with this fantastic website can\'t be fully expressed in words. PAK Panel has been a lifesaver for me and my account when I lost all motivation to grow. They have great packages and promote only quality service.',
      highlighted: false,
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        {/* Top half - Dark blue */}
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-primary"></div>
        {/* Bottom half - Light */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 w-full">
          {/* Header - in dark blue section */}
          <div className="text-center pt-12 md:pt-16 lg:pt-6 pb-16 md:pb-12 lg:pb-24 mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="block mb-3 md:mb-4">Our service Clients</span>
              <span className="block">
                Who{' '}
                <span className="text-secondary relative inline-block">
                  Believe In Results
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-secondary/40 blur-md"></span>
                </span>
              </span>
            </h2>
          </div>

          {/* Testimonials Grid - Positioned to bridge the two backgrounds */}
          <div className="relative -mt-8 md:-mt-12 lg:-mt-16 w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    bg-black/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg
                    transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 hover:scale-105
                    border border-white/20 hover:border-secondary/50
                    ${testimonial.highlighted ? 'border-2 border-secondary shadow-[0_10px_30px_rgba(139,92,246,0.4)] bg-black' : ''}
                    group relative overflow-hidden
                  `}
                >
                  {/* Star Rating - Top Left */}
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Feedback Text */}
                    <p className="text-sm md:text-base lg:text-lg text-foreground/95 leading-relaxed mb-6 md:mb-8 min-h-[120px]">
                      {testimonial.feedback}
                    </p>

                    {/* Customer Name */}
                    <div className="border-t border-white/20 pt-4 md:pt-6">
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground uppercase tracking-wide">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
