'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaSearch, FaFilter } from 'react-icons/fa';

interface Service {
  id: string;
  description: string;
  price: string;
  quantity: string;
  deliveryTime: string;
  isInstant: boolean;
  category: string;
  maxOrder?: string;
  speed?: string;
  quality?: string;
  guarantee?: string;
}

export default function ServicesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('YouTube');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const currencyRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setShowCurrencyDropdown(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const platforms = [
    { name: 'Instagram', icon: '📷' },
    { name: 'Facebook', icon: 'f' },
    { name: 'YouTube', icon: '▶' },
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Spotify', icon: '🎧' },
    { name: 'TikTok', icon: '♪' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'SoundCloud', icon: '🎵' },
    { name: 'Telegram', icon: '✈' },
    { name: 'Web Site Traffic', icon: '🌐' },
    { name: 'Snapchat', icon: '👻' },
    { name: 'Discord', icon: '💬' },
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'INR'];

  // Generate 10-15 services for each platform
  const generateServices = (platform: string): Service[] => {
    const services: Service[] = [];
    const baseId = 5900;
    let serviceId = baseId;

    const serviceTemplates = [
      {
        category: 'New Subscribers',
        templates: [
          { desc: 'Subscribers (Max 50K) (High Drop) (NO REFILL) (Promotional Service)', price: 0.09, instant: true },
          { desc: 'Fast Subscribers + Views + Likes (Speed: 2K/Day) (High Quality) (Non Drop)', price: 25.54, instant: false },
          { desc: 'Premium Subscribers (Max 100K) (Speed: 5K/Day) (Lifetime Guarantee)', price: 1.50, instant: false },
          { desc: 'Real Subscribers (Max 200K) (Speed: 1-2K/Day) (Non Drop) (Refill Available)', price: 2.30, instant: false },
        ],
      },
      {
        category: 'Premium Video Views',
        templates: [
          { desc: 'Views (Max Order: 1M) (Speed: 5-10K/Day+) (Mixed Source) (Lifetime Guarantee) (365 Days Refill)', price: 1.13, instant: false },
          { desc: 'Views (Max 1M) (Speed: 1-2K/Day) (Premium Quality + Natural Increase) (Lifetime Guarantee)', price: 1.57, instant: true },
          { desc: 'Views (Max 1M) (Speed: 2-4K/Day) (Premium Quality + Natural Increase) (Lifetime Guarantee)', price: 1.77, instant: true },
          { desc: 'High Retention Views (Max 500K) (Speed: 3-5K/Day) (70%+ Retention) (Guaranteed', price: 2.50, instant: false },
        ],
      },
      {
        category: 'Likes & Engagement',
        templates: [
          { desc: 'Likes (Max 100K) (Speed: 10K/Day) (High Quality) (Non Drop)', price: 0.50, instant: true },
          { desc: 'Likes + Comments (Max 50K) (Speed: 5K/Day) (Real Engagement)', price: 1.20, instant: false },
          { desc: 'Premium Likes (Max 200K) (Speed: 15K/Day) (Lifetime Guarantee)', price: 0.75, instant: true },
          { desc: 'Super Likes (Max 500K) (Speed: 20K/Day) (Instant Start)', price: 0.60, instant: true },
        ],
      },
      {
        category: 'Comments & Shares',
        templates: [
          { desc: 'Comments (Max 10K) (Speed: 1K/Day) (Custom Comments Available)', price: 2.00, instant: false },
          { desc: 'Shares (Max 50K) (Speed: 5K/Day) (High Quality)', price: 1.50, instant: false },
          { desc: 'Comments + Shares Bundle (Max 25K) (Speed: 2K/Day)', price: 3.00, instant: false },
          { desc: 'Real Comments (Max 5K) (Speed: 500/Day) (Custom Text)', price: 2.50, instant: false },
        ],
      },
      {
        category: 'Followers & Growth',
        templates: [
          { desc: 'Followers (Max 100K) (Speed: 5K/Day) (High Quality) (Non Drop)', price: 0.80, instant: true },
          { desc: 'Real Followers (Max 200K) (Speed: 2K/Day) (Lifetime Guarantee)', price: 1.20, instant: false },
          { desc: 'Premium Followers (Max 500K) (Speed: 10K/Day) (Instant Start)', price: 0.95, instant: true },
        ],
      },
    ];

    serviceTemplates.forEach((cat) => {
      cat.templates.forEach((template) => {
        const hours = Math.floor(Math.random() * 100 + 1);
        const minutes = Math.floor(Math.random() * 60);
        const minQty = Math.floor(Math.random() * 1000 + 10);
        const maxQty = Math.floor(Math.random() * 1000000 + 10000);
        
        services.push({
          id: serviceId.toString(),
          description: `${platform} ${template.desc} Start: ${template.instant ? 'INSTANT' : `0-${Math.floor(Math.random() * 12)} Hours`}`,
          price: `$${template.price.toFixed(2)}`,
          quantity: `${minQty}/${maxQty.toLocaleString()}`,
          deliveryTime: template.instant ? 'INSTANT' : `${hours} hours ${minutes} minutes`,
          isInstant: template.instant,
          category: cat.category,
        });
        serviceId++;
      });
    });

    return services;
  };

  const allServices = generateServices(selectedPlatform);
  const categories = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.id.includes(searchQuery);
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedServices = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      
      <main className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              SMM Reseller Panel | SMM Panel | Instagram Panel | Youtube Panel | Facebook SMM Panel
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90">
              Explore What we Offer through Our services
            </p>
          </div>

          {/* Platform Selection Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12 max-w-[1200px] mx-auto">
            {platforms.map((platform) => {
              const isActive = selectedPlatform === platform.name;
              return (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform.name)}
                  className={`
                    flex items-center justify-center gap-2 px-4 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base
                    transition-all duration-200 hover:scale-105
                    ${isActive
                      ? 'bg-secondary text-background shadow-lg shadow-secondary/30'
                      : 'bg-secondary text-background hover:bg-secondary/90'
                    }
                  `}
                >
                  <span className="text-lg md:text-xl">{platform.icon}</span>
                  <span className="hidden sm:inline">{platform.name}</span>
                </button>
              );
            })}
          </div>

          {/* Filters Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-10 max-w-[1200px] mx-auto">
            {/* Search Bar */}
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder={selectedPlatform.toLowerCase()}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-l-lg bg-primary text-foreground placeholder-foreground/50 border border-foreground/20 focus:outline-none focus:border-secondary"
              />
              <button className="px-6 py-3 bg-secondary text-background rounded-r-lg hover:bg-secondary/90 transition-colors">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>

            {/* Currency Selector */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => {
                  setShowCurrencyDropdown(!showCurrencyDropdown);
                  setShowCategoryDropdown(false);
                }}
                className="px-6 py-3 bg-secondary text-background rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2"
              >
                <span>{selectedCurrency} $ -</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCurrencyDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-foreground rounded-lg shadow-lg border border-foreground/20 z-20 min-w-[120px]">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setShowCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-primary transition-colors ${
                        selectedCurrency === currency ? 'bg-primary text-secondary' : 'text-primary'
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Filter */}
            <div className="relative" ref={categoryRef}>
              <button
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowCurrencyDropdown(false);
                }}
                className="px-6 py-3 bg-secondary text-background rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2"
              >
                <FaFilter className="w-4 h-4" />
                <span>Select Category</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCategoryDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-foreground rounded-lg shadow-lg border border-foreground/20 z-20 min-w-[200px]">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-primary transition-colors ${
                        selectedCategory === category ? 'bg-primary text-secondary' : 'text-primary'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-6 max-w-[1200px] mx-auto">
            {Object.entries(groupedServices).map(([category, services]) => (
              <div key={category} className="space-y-2">
                {/* Category Header */}
                <div className="bg-secondary px-6 py-4 rounded-lg flex items-center gap-4">
                  <span className="text-2xl text-background">▶</span>
                  <span className="text-xl text-background">💎</span>
                  <h2 className="text-xl md:text-2xl font-bold text-background">
                    {selectedPlatform} {category}
                  </h2>
                </div>

                {/* Table Container with Scroll */}
                <div className="overflow-x-auto max-w-[1200px] mx-auto">
                  <div className="bg-primary rounded-lg min-w-[1000px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_2fr_140px_140px_150px_150px_150px] gap-2 md:gap-4 items-center px-4 md:px-6 py-4 border-b border-secondary/30">
                      {/* ID Header */}
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <span className="text-foreground font-bold text-sm">ID</span>
                      </div>

                      {/* Service Header */}
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="text-foreground font-bold text-sm">Service</span>
                      </div>

                      {/* Rate per 1000 Header */}
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-foreground font-bold text-sm">Rate per 1000</span>
                      </div>

                      {/* Min / Max order Header */}
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0-12l4 4m-4-4l-4 4" />
                        </svg>
                        <span className="text-foreground font-bold text-sm">Min / Max order</span>
                      </div>

                      {/* Average time Header */}
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span className="text-foreground font-bold text-sm">Average time</span>
                        <div className="w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-primary text-xs font-bold">i</span>
                        </div>
                      </div>

                      {/* Description Header */}
                      <div className="flex items-center gap-2 justify-center">
                        <div className="w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
                          <span className="text-primary text-xs font-bold">i</span>
                        </div>
                        <span className="text-foreground font-bold text-sm">Description</span>
                      </div>

                      {/* Action Header */}
                      <div className="flex items-center gap-2 justify-center">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <span className="text-foreground font-bold text-sm">Action</span>
                      </div>
                    </div>

                    {/* Services in Category */}
                    <div>
                      {services.map((service, index) => (
                        <div
                          key={service.id}
                          className={`
                            grid grid-cols-[80px_2fr_140px_140px_150px_150px_150px] gap-2 md:gap-4 items-center px-4 md:px-6 py-4
                            ${index < services.length - 1 ? 'border-b border-secondary/30' : ''}
                          `}
                        >
                          {/* Service ID */}
                          <div className="flex justify-center">
                            <div className="bg-secondary px-3 py-1.5 rounded text-background font-bold text-sm w-fit">
                              {service.id}
                            </div>
                          </div>

                          {/* Service Description */}
                          <div className="min-w-0">
                            <p className="text-sm md:text-base text-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Rate per 1000 */}
                          <div className="text-base md:text-lg font-semibold text-secondary text-center">
                            {service.price}
                          </div>

                          {/* Min / Max order */}
                          <div className="text-sm md:text-base text-secondary text-center">
                            {service.quantity}
                          </div>

                          {/* Average time */}
                          <div className="flex justify-center">
                            <div className="px-3 py-2 rounded text-sm font-semibold text-center bg-green-500 text-foreground w-fit">
                              {service.isInstant ? (
                                <span>INSTANT</span>
                              ) : (
                                <span>{service.deliveryTime}</span>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <div className="flex justify-center">
                            <button className="px-8 py-2 bg-blue-500 text-foreground rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold whitespace-nowrap w-fit">
                              Details
                            </button>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 justify-end">
                            <button className="px-8 py-2 bg-blue-500 text-foreground rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold whitespace-nowrap w-fit">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
