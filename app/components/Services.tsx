'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const [selectedPlatform, setSelectedPlatform] = useState('TikTok');

  const platforms = [
    { name: 'Facebook', icon: 'f', image: '/Services/Facebook.webp' },
    { name: 'Instagram', icon: '📷', image: '/Services/Instagram.webp' },
    { name: 'TikTok', icon: '♪', image: '/Services/tiktok.webp' },
    { name: 'YouTube', icon: '▶', image: '/Services/Utube.webp' },
    { name: 'Twitter', icon: '𝕏', image: '/Services/Twitter.webp' },
    { name: 'Pinterest', icon: '📌', image: '/Services/pinterest.webp' },
    { name: 'SoundCloud', icon: '🎵', image: '/Services/sounCloud.webp' },
    { name: 'Spotify', icon: '🎧', image: '/Services/spotify.webp' },
  ];

  const serviceDescriptions: { [key: string]: { title: string; desc1: string; desc2: string; desc3: string } } = {
    Facebook: {
      title: 'Facebook SMM Services',
      desc1: 'We are the best and cheapest SMM panel for Facebook because we provide one-stop Facebook marketing services to reach billions of international audiences.',
      desc2: 'Facebook services are another great way to market your business on this platform. Boost your page likes, post engagement, and follower count with our premium services.',
      desc3: 'Our automated system ensures fast delivery and authentic results, helping you build a strong presence on the world\'s largest social network.',
    },
    Instagram: {
      title: 'Instagram SMM Services',
      desc1: 'We are the best and cheapest SMM panel for Instagram because we provide one-stop Instagram marketing services to reach millions of international audiences.',
      desc2: 'Instagram services are another great way to market your business on this platform. Increase your followers, likes, views, and comments with our reliable services.',
      desc3: 'Whether you need Instagram followers, story views, or post engagement, we offer competitive prices and instant delivery to help grow your account organically.',
    },
    TikTok: {
      title: 'TikTok SMM Services',
      desc1: 'We are the best and cheapest SMM panel for TikTok because we provide one-stop TikTok video marketing services to reach 800M+ international audiences.',
      desc2: 'TikTok services are another great way to market your business on this platform. Get more views, likes, followers, and shares to boost your viral potential.',
      desc3: 'Our TikTok panel offers instant delivery and high-quality engagement to help your content reach trending status and maximize your brand visibility.',
    },
    YouTube: {
      title: 'YouTube SMM Services',
      desc1: 'We are the best and cheapest SMM panel for YouTube because we provide one-stop YouTube marketing services to reach billions of international audiences.',
      desc2: 'YouTube services are another great way to market your business on this platform. Increase your subscribers, views, likes, and comments to grow your channel.',
      desc3: 'Boost your YouTube channel\'s credibility with our premium services. Get real engagement that helps improve your video rankings and attract organic viewers.',
    },
    Twitter: {
      title: 'Twitter SMM Services',
      desc1: 'We are the best and cheapest SMM panel for Twitter because we provide one-stop Twitter marketing services to reach millions of international audiences.',
      desc2: 'Twitter services are another great way to market your business on this platform. Grow your followers, retweets, and likes to increase your social influence.',
      desc3: 'Enhance your Twitter presence with our fast and reliable services. Build authority in your niche and expand your reach across the platform.',
    },
    Pinterest: {
      title: 'Pinterest SMM Services',
      desc1: 'We are the best and cheapest SMM panel for Pinterest because we provide one-stop Pinterest marketing services to reach millions of international audiences.',
      desc2: 'Pinterest services are another great way to market your business on this platform. Increase your pins, repins, and followers to drive more traffic.',
      desc3: 'Boost your Pinterest account with our premium services. Get more engagement on your pins and drive quality traffic to your website or online store.',
    },
    SoundCloud: {
      title: 'SoundCloud SMM Services',
      desc1: 'We are the best and cheapest SMM panel for SoundCloud because we provide one-stop SoundCloud marketing services to reach millions of international audiences.',
      desc2: 'SoundCloud services are another great way to market your business on this platform. Get more plays, likes, followers, and reposts for your tracks.',
      desc3: 'Promote your music effectively with our SoundCloud services. Increase your track plays and build a loyal fanbase to grow your music career.',
    },
    Spotify: {
      title: 'Spotify SMM Services',
      desc1: 'We are the best and cheapest SMM panel for Spotify because we provide one-stop Spotify marketing services to reach millions of international audiences.',
      desc2: 'Spotify services are another great way to market your business on this platform. Boost your streams, followers, and playlist placements to grow your audience.',
      desc3: 'Increase your Spotify presence with our reliable services. Get more streams and followers to improve your artist ranking and discoverability on the platform.',
    },
  };

  const currentService = serviceDescriptions[selectedPlatform];
  const currentImage = platforms.find(p => p.name === selectedPlatform)?.image || '/Services/tiktok.webp';

  return (
    <section className="w-full bg-background py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
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

        {/* Platform Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12 lg:mb-16">
          {platforms.map((platform) => {
            const isActive = selectedPlatform === platform.name;
            return (
              <button
                key={platform.name}
                onClick={() => setSelectedPlatform(platform.name)}
                className={`
                  flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base
                  transition-all duration-200 hover:scale-105
                  ${
                    isActive
                      ? 'bg-secondary text-background shadow-lg shadow-secondary/30'
                      : 'bg-primary text-foreground border border-foreground/20 hover:bg-primary/80'
                  }
                `}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm md:text-base ${
                  isActive ? 'bg-background/20 text-background' : 'bg-secondary/20 text-secondary'
                }`}>
                  {platform.icon}
                </span>
                <span>{platform.name}</span>
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
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                {currentService.desc1}
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                {currentService.desc2}
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                {currentService.desc3}
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-secondary text-background px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-200 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                  <span>Get {selectedPlatform} Services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
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
