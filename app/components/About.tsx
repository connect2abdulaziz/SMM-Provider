import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-primary py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square lg:aspect-[4/5]">
              <Image
                src="/about.webp"
                alt="PAK Panel - About Our Services"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Our services ensure your content receives the{' '}
                <span className="text-secondary">attention it deserves</span>
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                At PAK Panel, our dedication to excellence and affordability goes hand in hand with our commitment to 
                transparency and ethical practices in all our operations. We focus on establishing lasting partnerships 
                with our clients, built on a foundation of trust, honesty, and shared success.
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                When you choose PAK Panel as your SMM partner, you're working with a team that is genuinely invested 
                in your growth and will go above and beyond to support you in reaching your marketing objectives and 
                achieving measurable results.
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                We appreciate you selecting PAK Panel as your preferred social media marketing solution. Our mission 
                is to help you unlock the complete potential of your digital presence and accomplish your business 
                goals through strategic, effective, and reliable SMM services.
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-secondary text-background px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                  <span>Learn More About Us</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
