import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const platforms = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Facebook', icon: 'f' },
    { name: 'Instagram', icon: '📷' },
    { name: 'TikTok', icon: '♪' },
    { name: 'Telegram', icon: '✈' },
    { name: 'YouTube', icon: '▶' },
  ];

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 w-full lg:w-auto space-y-5 lg:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
              <span className="text-secondary text-sm font-semibold">✨ Premium SMM Services</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              <span className="text-secondary">PAK Panel</span> - Your Trusted{' '}
              <span className="text-secondary">SMM Provider</span> for Global Growth
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-2xl">
              Boost your social media presence with our premium panel services. Get authentic engagement 
              across all major platforms at competitive rates.
            </p>
            
            {/* Platform Icons Grid */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/50 border border-foreground/10 rounded-lg hover:bg-primary/70 hover:border-secondary/30 transition-all duration-200"
                >
                  <span className="text-xl">{platform.icon}</span>
                  <span className="text-sm md:text-base font-medium text-foreground">{platform.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/50 border border-foreground/10 rounded-lg">
                <span className="text-sm md:text-base font-medium text-foreground">+ More</span>
              </div>
            </div>
            
      
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-secondary text-background px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                <span>Start Growing Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="bg-transparent border-2 border-secondary text-secondary px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-secondary/10 hover:scale-105 transition-all duration-200">
                Explore Services
              </button>
            </div>
            
        
          </div>
          
          {/* Right Side - Hero Image */}
          <div className="flex-1 w-full lg:w-auto flex items-start lg:items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative aspect-square w-full">
                <Image
                  src="/hero.webp"
                  alt="PAK Panel SMM Services"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
