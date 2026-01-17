'use client';

import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="w-full bg-black py-16 md:py-20 lg:py-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Video */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square lg:aspect-[4/5]">
              <video
                ref={videoRef}
                src="/about.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Our services ensure your content receives the{' '}
                <span className="text-secondary">attention it deserves</span>
              </h2>
              
              <p className="text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed">
                At PAK Panel, our dedication to excellence and affordability goes hand in hand with our commitment to 
                transparency and ethical practices in all our operations. We focus on establishing lasting partnerships 
                with our clients, built on a foundation of trust, honesty, and shared success. When you choose PAK Panel 
                as your SMM partner, you're working with a team that is genuinely invested in your growth and will go 
                above and beyond to support you in reaching your marketing objectives and achieving measurable results. 
                We appreciate you selecting PAK Panel as your preferred social media marketing solution. Our mission 
                is to help you unlock the complete potential of your digital presence and accomplish your business 
                goals through strategic, effective, and reliable SMM services.
              </p>
              
              {/* CTA Button */}
              <div className="pt-2">
                <button className="bg-secondary text-background px-6 py-3 rounded-lg font-semibold text-base hover:bg-secondary/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 flex items-center justify-center gap-2 group">
                  <span>Learn More About Us</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
