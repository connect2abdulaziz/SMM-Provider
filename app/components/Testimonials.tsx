import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Natasha',
      rating: 5,
      feedback: 'Unbelievable prices! Our prices are most reasonable in the market, starting from just $0.001. The quality of service is exceptional and delivery is lightning fast.',
      avatar: '👩',
      highlighted: false,
    },
    {
      name: 'David',
      rating: 5,
      feedback: 'What we have with this fantastic website can\'t be fully expressed in words. PAK Panel has been a lifesaver for me and my account when I lost all motivation to grow. They have great packages and promote only quality service.',
      avatar: '👨',
      highlighted: true,
    },
    {
      name: 'John Banner',
      rating: 5,
      feedback: 'What we have with this fantastic website can\'t be fully expressed in words. PAK Panel has been a lifesaver for me and my account when I lost all motivation to grow. They have great packages and promote only quality service.',
      avatar: '👨‍💼',
      highlighted: false,
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        {/* Top half - Dark blue */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-primary"></div>
        {/* Bottom half - Light */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header - in dark blue section */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Client feedback on our{' '}
              <span className="text-secondary">SMM Services</span>
            </h2>
          </div>

          {/* Testimonials Grid - Positioned to bridge the two backgrounds */}
          <div className="relative -mt-8 md:-mt-12 lg:-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    bg-foreground rounded-xl p-6 md:p-8 shadow-lg
                    transition-all duration-300 hover:shadow-xl
                    ${testimonial.highlighted ? 'border-4 border-secondary' : 'border border-gray-200'}
                  `}
                >
                  {/* Avatar and Rating */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-secondary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-background mb-4">
                    {testimonial.name}
                  </h3>

                  {/* Feedback Text */}
                  <p className="text-base md:text-lg text-background/80 leading-relaxed">
                    {testimonial.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
