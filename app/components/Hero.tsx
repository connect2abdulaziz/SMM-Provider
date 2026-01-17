'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaYoutube, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const platforms = [
    { name: 'Twitter', icon: FaTwitter },
    { name: 'Facebook', icon: FaFacebook },
    { name: 'Instagram', icon: FaInstagram },
    { name: 'TikTok', icon: FaTiktok },
    { name: 'Telegram', icon: FaTelegram },
    { name: 'YouTube', icon: FaYoutube },
  ];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minHeight: '100%', minWidth: '100%' }}
      >
        <source src="/social-media.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-5 lg:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full backdrop-blur-sm">
            <span className="text-white text-sm font-semibold">✨ Premium SMM Services</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg max-w-5xl mx-auto">
            <span className="text-secondary">PAK Panel</span> - Your Trusted{' '}
            <span className="text-secondary">SMM Provider</span> for Global Growth
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Boost your social media presence with our premium panel services. Get authentic engagement 
            across all major platforms at competitive rates.
          </p>
          
          {/* Platform Icons Grid */}
          {/* <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:border-secondary/50 transition-all duration-200"
                >
                  <IconComponent className="text-xl text-white" />
                  <span className="text-sm md:text-base font-medium text-white">{platform.name}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="text-sm md:text-base font-medium text-white">+ More</span>
            </div>
          </div>
           */}
    
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/30 flex items-center justify-center gap-2">
              <span>Start Growing Now</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-200 backdrop-blur-sm">
              Explore Services
            </button>
          </div>
          
      
        </div>
      </div>
    </section>
  );
}
