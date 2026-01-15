import React from 'react';

export default function Stats() {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      number: '10,394',
      label: 'Total active users'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      number: '4,035',
      label: 'Total services'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: '10,485',
      label: 'Total users'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      number: '183,071',
      label: 'Total orders'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: '148,891',
      label: 'Total completed orders'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      number: '6,559',
      label: 'Total tickets'
    }
  ];

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

        {/* Stats Grid - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-secondary/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                {/* Icon */}
                <div className="text-background flex-shrink-0">
                  {stat.icon}
                </div>
                
                {/* Number and Label */}
                <div className="flex-1 w-full">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-3">
                    {stat.number}
                  </div>
                  <div className="text-base md:text-lg text-background/90 font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
