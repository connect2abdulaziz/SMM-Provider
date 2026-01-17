'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// Animated Number Component
const AnimatedNumber = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Extract numeric value (remove commas, dollar signs, etc.)
            const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
            
            if (isNaN(numericValue)) {
              setDisplayValue(0);
              return;
            }

            const startTime = Date.now();
            const startValue = 0;
            const endValue = numericValue;

            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

              setDisplayValue(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  // Format the number with commas (same format as original)
  const formattedValue = displayValue.toLocaleString('en-US');
  
  return (
    <span ref={elementRef}>
      {formattedValue}
    </span>
  );
};

export default function Stats() {
  const stats = [
    {
      title: 'Total Active Users',
      currentValue: '10,394',
      previousValue: '9,873',
      change: 3.72,
      isPositive: true,
    },
    {
      title: 'Total Services',
      currentValue: '4,035',
      previousValue: '3,856',
      change: 2.15,
      isPositive: true,
    },
    {
      title: 'Total Users',
      currentValue: '10,485',
      previousValue: '10,120',
      change: 1.88,
      isPositive: true,
    },
    {
      title: 'Total Orders',
      currentValue: '183,071',
      previousValue: '203,253',
      change: -5.21,
      isPositive: false,
    },
    {
      title: 'Completed Orders',
      currentValue: '148,891',
      previousValue: '142,356',
      change: 2.95,
      isPositive: true,
    },
    {
      title: 'Total Tickets',
      currentValue: '6,559',
      previousValue: '6,823',
      change: -1.52,
      isPositive: false,
    },
  ];

  // Simple trend graph SVG component
  const TrendGraph = ({ isPositive }: { isPositive: boolean }) => (
    <svg width="60" height="30" viewBox="0 0 60 30" className="flex-shrink-0">
      <polyline
        points={isPositive 
          ? "5,25 15,20 25,15 35,10 45,8 55,5"
          : "5,5 15,8 25,12 35,18 45,22 55,25"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Content Section - Centered */}
        <div className="mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Statistics
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-medium">
            Join thousands of <span className="font-bold text-secondary">resellers, marketers, freelancers, and influencers</span> who use our panel to grow their presence and build their online businesses. From <span className="font-bold text-secondary">Instagram growth</span> to <span className="font-bold text-secondary">real-time analytics</span>, we offer it all under one <span className="font-bold text-secondary">powerful, secure, and user-friendly</span> platform.
          </p>
        </div>

        {/* Stats Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:shadow-secondary/50 transition-all duration-300 hover:scale-[1.03] hover:border-secondary/60 hover:bg-primary/60 hover:backdrop-blur-md cursor-pointer group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-secondary/5 group-hover:to-secondary/10 transition-all duration-300 pointer-events-none rounded-2xl" />
              
              <div className="relative z-10">
                {/* Header Row - Title and Change Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground  transition-colors duration-300">
                  {stat.title}
                </h3>
                <div className={`flex items-center gap-1 transition-transform duration-300 group-hover:scale-110 ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.isPositive ? (
                    <FaArrowUp className="w-4 h-4" />
                  ) : (
                    <FaArrowDown className="w-4 h-4" />
                  )}
                  <span className="text-sm md:text-base font-semibold">
                    {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>

              {/* Previous Value Row with Trend Graph */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm md:text-base text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                  {stat.previousValue}
                </span>
                <div className="text-foreground/50 group-hover:text-foreground/70 transition-colors duration-300">
                  <TrendGraph isPositive={stat.isPositive} />
                </div>
              </div>

              {/* Current Value - Large and Bold with Animation */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                <AnimatedNumber value={stat.currentValue} duration={2000} />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
