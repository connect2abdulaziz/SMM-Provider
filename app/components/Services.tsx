'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaTwitter, 
  FaPinterest, 
  FaSoundcloud, 
  FaSpotify,
  FaArrowRight 
} from 'react-icons/fa';

export default function Services() {
  const [selectedPlatform, setSelectedPlatform] = useState('TikTok');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const platforms = [
    { name: 'Facebook', icon: FaFacebook, image: '/Services/Facebook.webp' },
    { name: 'Instagram', icon: FaInstagram, image: '/Services/Instagram.webp' },
    { name: 'TikTok', icon: FaTiktok, image: '/Services/tiktok.webp' },
    { name: 'YouTube', icon: FaYoutube, image: '/Services/Utube.webp' },
    { name: 'Twitter', icon: FaTwitter, image: '/Services/Twitter.webp' },
    { name: 'Pinterest', icon: FaPinterest, image: '/Services/pinterest.webp' },
    { name: 'SoundCloud', icon: FaSoundcloud, image: '/Services/sounCloud.webp' },
    { name: 'Spotify', icon: FaSpotify, image: '/Services/spotify.webp' },
  ];

  const serviceDescriptions: { [key: string]: { title: string; description: string } } = {
    Facebook: {
      title: 'Facebook SMM Services',
      description: 'We are the best and cheapest SMM panel for Facebook, providing comprehensive one-stop Facebook marketing services to reach billions of international audiences. Our premium services help boost your page likes, post engagement, and follower count, while our automated system ensures fast delivery and authentic results to help you build a strong presence on the world\'s largest social network.',
    },
    Instagram: {
      title: 'Instagram SMM Services',
      description: 'We are the best and cheapest SMM panel for Instagram, offering one-stop Instagram marketing services to reach millions of international audiences. Whether you need followers, story views, or post engagement, our reliable services help increase your followers, likes, views, and comments with competitive prices and instant delivery to grow your account organically.',
    },
    TikTok: {
      title: 'TikTok SMM Services',
      description: 'We are the best and cheapest SMM panel for TikTok, providing comprehensive TikTok video marketing services to reach 800M+ international audiences. Get more views, likes, followers, and shares to boost your viral potential. Our TikTok panel offers instant delivery and high-quality engagement to help your content reach trending status and maximize your brand visibility.',
    },
    YouTube: {
      title: 'YouTube SMM Services',
      description: 'We are the best and cheapest SMM panel for YouTube, offering one-stop YouTube marketing services to reach billions of international audiences. Increase your subscribers, views, likes, and comments to grow your channel. Boost your YouTube channel\'s credibility with our premium services that provide real engagement, helping improve your video rankings and attract organic viewers.',
    },
    Twitter: {
      title: 'Twitter SMM Services',
      description: 'We are the best and cheapest SMM panel for Twitter, providing comprehensive Twitter marketing services to reach millions of international audiences. Grow your followers, retweets, and likes to increase your social influence. Enhance your Twitter presence with our fast and reliable services to build authority in your niche and expand your reach across the platform.',
    },
    Pinterest: {
      title: 'Pinterest SMM Services',
      description: 'We are the best and cheapest SMM panel for Pinterest, offering one-stop Pinterest marketing services to reach millions of international audiences. Increase your pins, repins, and followers to drive more traffic. Boost your Pinterest account with our premium services to get more engagement on your pins and drive quality traffic to your website or online store.',
    },
    SoundCloud: {
      title: 'SoundCloud SMM Services',
      description: 'We are the best and cheapest SMM panel for SoundCloud, providing comprehensive SoundCloud marketing services to reach millions of international audiences. Get more plays, likes, followers, and reposts for your tracks. Promote your music effectively with our SoundCloud services to increase your track plays and build a loyal fanbase that helps grow your music career.',
    },
    Spotify: {
      title: 'Spotify SMM Services',
      description: 'We are the best and cheapest SMM panel for Spotify, offering one-stop Spotify marketing services to reach millions of international audiences. Boost your streams, followers, and playlist placements to grow your audience. Increase your Spotify presence with our reliable services to get more streams and followers, improving your artist ranking and discoverability on the platform.',
    },
  };

  const currentService = serviceDescriptions[selectedPlatform];
  const currentImage = platforms.find(p => p.name === selectedPlatform)?.image || '/Services/tiktok.webp';

  return (
    <section className="relative w-full min-h-screen overflow-hidden py-12 md:py-16 lg:py-20">
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
        <source src="/services.mov" type="video/quicktime" />
        <source src="/services.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            SMM Panel Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto font-medium">
            Promote yourself or your company. If you're looking for a way to increase your online presence,{' '}
            <span className="font-bold text-secondary">Best SMM panel</span>, you can use our panel at the best and cheapest price, we have best prices for{' '}
            <span className="font-bold text-secondary">API users</span>.
          </p>
        </div>

        {/* Platform Selection Buttons - Single Row */}
        <div className="flex items-center justify-between gap-3 md:gap-4 mb-10 md:mb-12 lg:mb-16 overflow-x-auto scrollbar-hide py-2 ">
          {platforms.map((platform) => {
            const isActive = selectedPlatform === platform.name;
            const IconComponent = platform.icon;
            return (
              <button
                key={platform.name}
                onClick={() => setSelectedPlatform(platform.name)}
                className={`
                  group relative flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base
                  transition-all duration-300 hover:scale-105 overflow-hidden flex-shrink-0
                  ${
                    isActive
                      ? 'bg-secondary text-background shadow-[0_10px_30px_rgba(139,92,246,0.5)] shadow-secondary/50 border-2 border-secondary/50'
                      : 'bg-primary/90 backdrop-blur-sm text-foreground border border-white/30 hover:bg-primary hover:border-secondary/50'
                  }
                `}
              >
                {/* Glow effect for active button */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 animate-pulse" />
                )}
                
                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-background/20 text-background group-hover:scale-110' 
                    : 'bg-secondary/30 text-secondary group-hover:bg-secondary/40 group-hover:scale-110'
                }`}>
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="relative z-10">{platform.name}</span>
              </button>
            );
          })}
        </div>

        {/* Service Details Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="text-secondary">{selectedPlatform}</span> SMM{' '}
                <span className="text-secondary">Services</span>
              </h3>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/95 leading-relaxed max-w-2xl">
                {currentService.description}
              </p>
              
              {/* CTA Button */}
              <div className="pt-2">
                <button className="group relative bg-secondary text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/30 hover:shadow-[0_15px_40px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-white/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Get {selectedPlatform} Services</span>
                  <FaArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Service Image */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square">
              <Image
                src={currentImage}
                alt={`${selectedPlatform} SMM Services`}
                fill
                className="object-contain"
                priority={selectedPlatform === 'TikTok'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
