'use client';

import React, { useState, useEffect } from 'react';

export default function Benefits() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const benefits = [
    {
      title: 'Amazing Quality Guarantee',
      description: 'Our commitment to amazing quality is unwavering. With PAK Panel, you can trust that every service we provide is of the highest standard, ensuring exceptional results every time.',
      icon: '🏆',
    },
    {
      title: 'Competitive Prices',
      description: 'Enjoy competitive prices without compromising on quality. We believe in offering the best value for your money, making our services accessible to businesses and individuals alike.',
      icon: '💰',
    },
    {
      title: 'High-Quality Engagements',
      description: 'Experience high-quality engagements that drive real results. From likes and followers to comments and shares, we deliver engagements that make a real impact on your social media presence.',
      icon: '✨',
    },
    {
      title: 'Wide Range of Services',
      description: 'With us, you can access a wide range of services tailored to meet your needs. Whether you want to increase your followers, boost engagement, or drive conversions, we\'ve got you covered.',
      icon: '🎯',
    },
    {
      title: 'User-Friendly Platform',
      description: 'Our platform is designed to be user-friendly and intuitive, making it easy for you to navigate and use our services to achieve your goals. Managing your social media presence has never been easier.',
      icon: '💻',
    },
    {
      title: '100% Organic SMM Service',
      description: 'We pride ourselves on offering 100% organic SMM services that adhere to the highest standards of integrity and authenticity. You can trust that your social media growth is genuine and sustainable.',
      icon: '🌱',
    },
    {
      title: 'Cost Effectiveness',
      description: 'Maximize your ROI with our cost-effective solutions. Our services are designed to deliver maximum impact at minimal cost, ensuring that you get the most out of your investment.',
      icon: '📊',
    },
    {
      title: '24/7 Customer Support',
      description: 'Need assistance? Our dedicated customer support team is available 24/7 to help you with any questions or concerns you may have. We\'re here to ensure that your experience with PAK Panel is nothing short of exceptional.',
      icon: '🛟',
    },
  ];

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, benefits.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Should You Buy Cheap{' '}
            <span className="text-secondary">SMM Panel Services</span> From{' '}
            <span className="text-secondary">PAK Panel</span>?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto font-medium">
            When you buy SMM panel services from PAK Panel, you're not just getting a service – you're getting a partner dedicated to helping you succeed in social media marketing.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Slider Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 md:px-3"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-foreground rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Icon/Image Placeholder */}
                    <div className="w-full h-40 md:h-48 mb-6 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-5xl md:text-6xl lg:text-7xl">{benefit.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-lg lg:text-xl font-bold text-background mb-4">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-md text-background  leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary text-background flex items-center justify-center hover:bg-secondary/90 transition-all duration-200 shadow-lg z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary text-background flex items-center justify-center hover:bg-secondary/90 transition-all duration-200 shadow-lg z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-secondary w-8 md:w-10'
                      : 'bg-primary/30 hover:bg-primary/50 w-2 md:w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
