'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FaSearch, 
  FaFilter, 
  FaInstagram, 
  FaFacebook, 
  FaYoutube, 
  FaTwitter,
  FaSpotify,
  FaTiktok,
  FaLinkedin,
  FaSoundcloud,
  FaTelegram,
  FaGlobe,
  FaSnapchat,
  FaDiscord,
  FaHashtag,
  FaHeart,
  FaDollarSign,
  FaArrowsAlt,
  FaClock,
  FaInfoCircle,
  FaLink,
  FaChevronDown,
  FaPlay,
  FaGem
} from 'react-icons/fa';

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
    { name: 'Instagram', icon: FaInstagram, color: 'text-pink-500' },
    { name: 'Facebook', icon: FaFacebook, color: 'text-blue-600' },
    { name: 'YouTube', icon: FaYoutube, color: 'text-red-600' },
    { name: 'Spotify', icon: FaSpotify, color: 'text-green-500' },
    { name: 'TikTok', icon: FaTiktok, color: 'text-black dark:text-white' },
    { name: 'LinkedIn', icon: FaLinkedin, color: 'text-blue-700' },
    { name: 'SoundCloud', icon: FaSoundcloud, color: 'text-orange-500' },
    { name: 'Discord', icon: FaDiscord, color: 'text-indigo-500' },
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'INR'];

  // Helper function to parse delivery time
  const parseDeliveryTime = (timeStr: string): { deliveryTime: string; isInstant: boolean } => {
    if (!timeStr || timeStr.trim() === '') {
      return { deliveryTime: 'INSTANT', isInstant: true };
    }
    const lowerTime = timeStr.toLowerCase();
    if (lowerTime.includes('instant') || lowerTime === '') {
      return { deliveryTime: 'INSTANT', isInstant: true };
    }
    return { deliveryTime: timeStr, isInstant: false };
  };

  // Real TikTok Services Data (prices multiplied by 8x)
  const realTikTokServices: Service[] = [
    {
      id: '4268',
      description: 'TikTok Followers | HQ | Instant | 10K/D | ND | NR 🔥 ND = Non Drop ✅ HQ = High Quality ⚠️ NR = No Refill',
      price: '$10.56', // $1.32 * 8
      quantity: '10/100,000',
      deliveryTime: 'INSTANT',
      isInstant: true,
      category: 'TikTok Followers | VIP | ᴺᴱᵂ',
    },
    {
      id: '5251',
      description: 'TikTok Followers | HQ | Instant | 10K/D | ND | R15 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R15 = 15 Days Refill',
      price: '$12.32', // $1.54 * 8
      quantity: '10/100,000',
      deliveryTime: 'INSTANT',
      isInstant: true,
      category: 'TikTok Followers | VIP | ᴺᴱᵂ',
    },
    {
      id: '3754',
      description: 'TikTok Followers | HQ | Instant | 10K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill',
      price: '$13.68', // $1.71 * 8
      quantity: '10/100,000',
      deliveryTime: 'INSTANT',
      isInstant: true,
      category: 'TikTok Followers | VIP | ᴺᴱᵂ',
    },
  ];

  // Real Facebook Services Data (prices multiplied by 8x)
  const realFacebookServices: Service[] = [
    // Facebook Views | Impressions + Reach | Monetizable | New
    { id: '5193', description: 'Facebook Video Views | Instant | Non-Drop | 20K/Day | Lifetime Refill', price: '$0.56', quantity: '100/10,000,000', ...parseDeliveryTime('5 hours 8 minutes'), category: 'Facebook Views | Impressions + Reach | Monetizable | New' },
    { id: '5194', description: 'Facebook Video Views | All Link | Instant | Non-Drop | 10K/Day | Lifetime Refill', price: '$0.72', quantity: '100/10,000,000', ...parseDeliveryTime('2 hours 14 minutes'), category: 'Facebook Views | Impressions + Reach | Monetizable | New' },
    { id: '5195', description: 'Facebook Video Views | All Link | Instant | Non-Drop | 20K/Day | Lifetime Refill', price: '$0.80', quantity: '100/10,000,000', ...parseDeliveryTime('10 hours'), category: 'Facebook Views | Impressions + Reach | Monetizable | New' },
    { id: '5196', description: 'Facebook Video Views + Impression | Instant | Non-Drop | 10K/Day | Lifetime Refill', price: '$0.80', quantity: '100/10,000,000', ...parseDeliveryTime(''), category: 'Facebook Views | Impressions + Reach | Monetizable | New' },
    { id: '5197', description: 'Facebook Video Views + Reach | Instant | Non-Drop | 10K/Day | Lifetime Refill', price: '$0.80', quantity: '100/10,000,000', ...parseDeliveryTime('4 hours 22 minutes'), category: 'Facebook Views | Impressions + Reach | Monetizable | New' },
    { id: '5198', description: 'Facebook Video Views + Reach + Impression | Instant | Non-Drop | 10K/Day | Lifetime Refill', price: '$0.88', quantity: '100/10,000,000', ...parseDeliveryTime('10 hours 10 minutes'), category: 'Facebook Views | Impressions + Reach | Monetizable | New' },
    
    // Facebook Video Views | Working Facebook Video Views | Working
    { id: '5191', description: 'Facebook Video/Reel | Plays/Views | Instant | 500k/Day | Lifetime Refill', price: '$0.24', quantity: '100/1,000,000,000', ...parseDeliveryTime('1 hour 8 minutes'), category: 'Facebook Video Views | Working Facebook Video Views | Working' },
    
    // Facebook Followers | Page Data | Best Quality ᴺᴱᵂ
    { id: '5099', description: 'Facebook Followers | HQ Pages | Instant | 20K/D | ND | CB | NR 🔥 ND = Non Drop ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$0.96', quantity: '100/200,000', ...parseDeliveryTime('3 hours 40 minutes'), category: 'Facebook Followers | Page Data | Best Quality ᴺᴱᵂ' },
    { id: '5100', description: 'Facebook Followers | HQ Pages | Instant | 20K/D | ND | CB | R30 🔥 ND = Non Drop ✅ HQ = High Quality ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$1.04', quantity: '100/200,000', ...parseDeliveryTime('31 hours 9 minutes'), category: 'Facebook Followers | Page Data | Best Quality ᴺᴱᵂ' },
    { id: '5101', description: 'Facebook Followers | HQ Pages | Instant | 20K/D | ND | CB | Rꝏ 🔥 ND = Non Drop ✅ HQ = High Quality ⛔ CB = Cancel Button ♻️ Rꝏ = Lifetime Refill', price: '$1.36', quantity: '100/200,000', ...parseDeliveryTime('2 hours 26 minutes'), category: 'Facebook Followers | Page Data | Best Quality ᴺᴱᵂ' },
    
    // Facebook Followers | Hidden Data | HOT Service 🔥 ᴺᴱᵂ
    { id: '5127', description: 'Facebook Followers | Hidden | Instant | 50K/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$2.24', quantity: '100/1,000,000', ...parseDeliveryTime('1 hour 45 minutes'), category: 'Facebook Followers | Hidden Data | HOT Service 🔥 ᴺᴱᵂ' },
    { id: '5128', description: 'Facebook Followers | Hidden | Instant | 50K/D | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$2.56', quantity: '100/1,000,000', ...parseDeliveryTime('1 hour 7 minutes'), category: 'Facebook Followers | Hidden Data | HOT Service 🔥 ᴺᴱᵂ' },
    
    // Facebook Services | Worldwide | Supplier | NEW | SMMIU | 07 JAN 2026
    { id: '5090', description: 'Facebook Followers | Worldwide | Instant | 30K/D | No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('21 minutes'), category: 'Facebook Services | Worldwide | Supplier | NEW | SMMIU | 07 JAN 2026' },
    { id: '5091', description: 'Facebook Followers | Worldwide | Instant | 30K/D | 30 Days', price: '$1.52', quantity: '10/500,000', ...parseDeliveryTime('9 hours 18 minutes'), category: 'Facebook Services | Worldwide | Supplier | NEW | SMMIU | 07 JAN 2026' },
    { id: '5092', description: 'Facebook Page Likes + Followers | Worldwide | Instant | 20K/D | No Refill', price: '$2.08', quantity: '50/500,000', ...parseDeliveryTime(''), category: 'Facebook Services | Worldwide | Supplier | NEW | SMMIU | 07 JAN 2026' },
    { id: '5093', description: 'Facebook Page Likes + Followers | Worldwide | Instant | 20K/D | 30 Days', price: '$2.40', quantity: '50/500,000', ...parseDeliveryTime('1 hour 16 minutes'), category: 'Facebook Services | Worldwide | Supplier | NEW | SMMIU | 07 JAN 2026' },
    
    // Facebook Monetization Package | 150K Unique Views ᴺᴱᵂ
    { id: '5144', description: 'Facebook 150K Unique Views | +10 Sec | Instant | 10K/D | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$11.84', quantity: '1,000/1,000', ...parseDeliveryTime(''), category: 'Facebook Monetization Package | 150K Unique Views ᴺᴱᵂ' },
    { id: '5081', description: 'Facebook 150K Unique Views | +10 Sec | Instant | Slow | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$15.84', quantity: '1,000/1,000', ...parseDeliveryTime(''), category: 'Facebook Monetization Package | 150K Unique Views ᴺᴱᵂ' },
    { id: '5082', description: 'Facebook 150K Unique Views | +10 Sec | Instant | Medium | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$18.00', quantity: '1,000/1,000', ...parseDeliveryTime(''), category: 'Facebook Monetization Package | 150K Unique Views ᴺᴱᵂ' },
    { id: '5083', description: 'Facebook 150K Unique Views | +10 Sec | Instant | Fast | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$31.04', quantity: '1,000/1,000', ...parseDeliveryTime(''), category: 'Facebook Monetization Package | 150K Unique Views ᴺᴱᵂ' },
    
    // Facebook Followers | Hidden Data | Supplier | NEW
    { id: '5077', description: 'Facebook Followers | Hidden | Instant | Non Drop | 500K/Day | No Refill', price: '$1.76', quantity: '100/1,000,000', ...parseDeliveryTime('47 minutes'), category: 'Facebook Followers | Hidden Data | Supplier | NEW' },
    { id: '5078', description: 'Facebook Followers | Hidden | Instant | Non Drop | 500K/Day | No Refill', price: '$1.92', quantity: '100/1,000,000', ...parseDeliveryTime('1 hour 2 minutes'), category: 'Facebook Followers | Hidden Data | Supplier | NEW' },
    { id: '5079', description: 'Facebook Followers | Hidden | Instant | Non Drop | 500K/Day | No Refill', price: '$2.24', quantity: '100/1,000,000', ...parseDeliveryTime(''), category: 'Facebook Followers | Hidden Data | Supplier | NEW' },
    { id: '5080', description: 'Facebook Followers | Hidden | Instant | Non Drop | 500K/Day | No Refill', price: '$2.64', quantity: '100/1,000,000', ...parseDeliveryTime('17 minutes'), category: 'Facebook Followers | Hidden Data | Supplier | NEW' },
    
    // Facebook Followers | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ
    { id: '3804', description: 'Facebook Followers | BOT | 10K/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.56', quantity: '100/10,000', ...parseDeliveryTime('14 hours 57 minutes'), category: 'Facebook Followers | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    { id: '5097', description: 'Facebook Followers | BOT | 10K/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$0.64', quantity: '100/1,000,000', ...parseDeliveryTime('2 hours 9 minutes'), category: 'Facebook Followers | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    { id: '3805', description: 'Facebook Followers | BOT | 10K/D | LD | R30 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$0.80', quantity: '100/1,000,000', ...parseDeliveryTime('12 hours 54 minutes'), category: 'Facebook Followers | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    { id: '5098', description: 'Facebook Followers | BOT | 10K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$0.80', quantity: '100/1,000,000', ...parseDeliveryTime('1 hour 44 minutes'), category: 'Facebook Followers | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    
    // Facebook Followers | Hidden Data ᴺᴱᵂ
    { id: '5074', description: '🇻🇳 Facebook Followers | Vietnam | BOT | Instant | 5K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$0.64', quantity: '100/10,000', ...parseDeliveryTime('1 hour 28 minutes'), category: 'Facebook Followers | Hidden Data ᴺᴱᵂ' },
    { id: '5075', description: '🇻🇳 Facebook Followers | Vietnam | BOT | Instant | 5K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$0.64', quantity: '100/10,000', ...parseDeliveryTime('4 hours 11 minutes'), category: 'Facebook Followers | Hidden Data ᴺᴱᵂ' },
    { id: '3802', description: 'Facebook Followers | Hidden | Instant | 50K/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$1.76', quantity: '100/1,000,000', ...parseDeliveryTime('29 minutes'), category: 'Facebook Followers | Hidden Data ᴺᴱᵂ' },
    { id: '3803', description: 'Facebook Followers | Hidden | Instant | 50K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$1.92', quantity: '100/1,000,000', ...parseDeliveryTime('33 minutes'), category: 'Facebook Followers | Hidden Data ᴺᴱᵂ' },
    
    // Facebook Services | Extreme Speed | Updated ᴺᴱᵂ
    { id: '4039', description: 'Facebook Post Likes | HQ | 10K/H | ND | CB | NR 🔥 ND = Non Drop ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.52', quantity: '10/500,000', ...parseDeliveryTime('12 minutes'), category: 'Facebook Services | Extreme Speed | Updated ᴺᴱᵂ' },
    { id: '1718', description: 'Facebook Followers | HQ | 10K/H | ND | CB | NR 🔥 ND = Non Drop ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.60', quantity: '10/500,000', ...parseDeliveryTime('16 minutes'), category: 'Facebook Services | Extreme Speed | Updated ᴺᴱᵂ' },
    
    // Facebook Followers | Worldwide | Best Working | No Stuck | ᴺᴱᵂ
    { id: '3933', description: 'Facebook Followers | WW | 100k/D | LD | NR - #5 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$1.44', quantity: '10/100,000', ...parseDeliveryTime('1 hour 26 minutes'), category: 'Facebook Followers | Worldwide | Best Working | No Stuck | ᴺᴱᵂ' },
    { id: '3667', description: 'Facebook Followers | WW | 100k/D | LD | R30 - #5 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$1.68', quantity: '10/100,000', ...parseDeliveryTime('1 hour 38 minutes'), category: 'Facebook Followers | Worldwide | Best Working | No Stuck | ᴺᴱᵂ' },
    { id: '3668', description: 'Facebook Followers | HQ | Instant | 50k/D | LD | NR 📉 LD = Low Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$6.40', quantity: '10/1,000,000', ...parseDeliveryTime('5 minutes'), category: 'Facebook Followers | Worldwide | Best Working | No Stuck | ᴺᴱᵂ' },
    
    // Facebook Services | Worldwide Real Quality | Premium ⭐ ᵁᴾᴰᴬᵀᴱᴰ
    { id: '1755', description: 'Facebook Followers | WW | 20K/D | LD | CB | R30 - #4 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$1.84', quantity: '10/500,000', ...parseDeliveryTime('7 minutes'), category: 'Facebook Services | Worldwide Real Quality | Premium ⭐ ᵁᴾᴰᴬᵀᴱᴰ' },
    { id: '3625', description: 'Facebook Followers | HQ | Instant | 20k/D | LD | NR 📉 LD = Low Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$4.32', quantity: '10/100,000', ...parseDeliveryTime('37 minutes'), category: 'Facebook Services | Worldwide Real Quality | Premium ⭐ ᵁᴾᴰᴬᵀᴱᴰ' },
    { id: '3626', description: 'Facebook Followers | HQ | Instant | 20k/D | LD | R30 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$4.56', quantity: '10/100,000', ...parseDeliveryTime('1 hour 35 minutes'), category: 'Facebook Services | Worldwide Real Quality | Premium ⭐ ᵁᴾᴰᴬᵀᴱᴰ' },
    { id: '3259', description: 'Facebook Followers | HQ | Instant | 50k/D | LD | R30 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$6.96', quantity: '10/1,000,000', ...parseDeliveryTime('40 minutes'), category: 'Facebook Services | Worldwide Real Quality | Premium ⭐ ᵁᴾᴰᴬᵀᴱᴰ' },
    
    // Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ
    { id: '3558', description: 'Facebook Followers | Page/Profile | Worldwide | High Quality | Low Drop |10K/Day | No Refil', price: '$1.20', quantity: '100/200,000', ...parseDeliveryTime('1 hour 19 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3556', description: 'Facebook Followers | HQ Accounts | Instant | 50k/Day | ND | NR 🔥 ND = Non Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('2 hours 38 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3554', description: 'Facebook Followers | HQ Profiles | Instant | 30k/Day | NR ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$1.44', quantity: '10/100,000', ...parseDeliveryTime('1 hour 23 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3555', description: 'Facebook Followers | HQ Profiles | Instant | 30k/Day | R30 ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$1.52', quantity: '10/100,000', ...parseDeliveryTime('1 hour 24 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3557', description: 'Facebook Followers | HQ Accounts | Instant | 50k/Day | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$1.52', quantity: '10/500,000', ...parseDeliveryTime('2 hours 16 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3550', description: 'Facebook Followers | WW | HQ | Instant | 10k/Day | LD | NR 📉 LD = Low Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$1.60', quantity: '10/500,000', ...parseDeliveryTime('1 hour 19 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3551', description: 'Facebook Followers | WW | HQ | Instant | 10k/Day | LD | R30 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$1.76', quantity: '10/500,000', ...parseDeliveryTime('1 hour 44 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3650', description: 'Facebook Followers | WW | Instant | 30K/D | NR ⚠️ NR = No Refill', price: '$1.92', quantity: '100/1,000,000', ...parseDeliveryTime('1 hour 47 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3552', description: 'Facebook Followers | HQ Profiles | Instant | 20k/Day | NR ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$2.24', quantity: '10/1,000,000', ...parseDeliveryTime('12 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3553', description: 'Facebook Followers | HQ Profiles | Instant | 20k/Day | R30 ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$2.80', quantity: '10/1,000,000', ...parseDeliveryTime('8 minutes'), category: 'Facebook Follower | Page/Profile | Best Price | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    
    // Facebook Profile Followers
    { id: '4053', description: 'Facebook Followers | Profile/Profile | 5k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$1.12', quantity: '100/10,000', ...parseDeliveryTime('56 minutes'), category: 'Facebook Profile Followers' },
    { id: '4052', description: 'Facebook Followers | All Links | 20k/Day | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$6.72', quantity: '100/1,000,000', ...parseDeliveryTime('56 minutes'), category: 'Facebook Profile Followers' },
    
    // Facebook Page Likes+Follower | Worldwide | Best Price
    { id: '3619', description: 'Facebook Page Likes | HQ | 20k/Day | LD | NR 📉 LD = Low Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$2.32', quantity: '10/500,000', ...parseDeliveryTime('51 hours 36 minutes'), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '3623', description: 'Facebook Page Likes | WW | Instant | 20k/D | NR ⚠️ NR = No Refill', price: '$2.56', quantity: '10/50,000', ...parseDeliveryTime(''), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '3624', description: 'Facebook Page Likes | WW | Instant | 20k/D | R30 ♻️ R30 = 30 Days Refill', price: '$2.72', quantity: '10/50,000', ...parseDeliveryTime(''), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '3620', description: 'Facebook Page Likes | HQ | 20k/Day | LD | R30 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$2.80', quantity: '10/500,000', ...parseDeliveryTime('59 hours 5 minutes'), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '3621', description: 'Facebook Page Likes | HQ Profiles | Instant | 50k/D | NR ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$2.96', quantity: '10/100,000', ...parseDeliveryTime('5 minutes'), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '3622', description: 'Facebook Page Likes | HQ Profiles | Instant | 50k/D | R30 ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$3.04', quantity: '10/100,000', ...parseDeliveryTime('28 minutes'), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '4180', description: 'Facebook Page Likes + Followers | 10k/Day | LD | R30 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$20.48', quantity: '50/100,000', ...parseDeliveryTime('6 minutes'), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    { id: '4181', description: 'Facebook Page Likes + Followers | Real HQ Accounts | Instant | 10k-50k/Day | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$20.48', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Facebook Page Likes+Follower | Worldwide | Best Price' },
    
    // Facebook Page Like + Followers
    { id: '4050', description: 'Facebook Page Likes | Instant | 10k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$4.56', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Facebook Page Like + Followers' },
    { id: '4049', description: 'Facebook Page Likes | Instant | 30k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$6.48', quantity: '10/500,000', ...parseDeliveryTime('12 minutes'), category: 'Facebook Page Like + Followers' },
    { id: '4051', description: 'Facebook Page Likes | Real HQ - Asian | Instant | 3k/D | ND | R60 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R60 = 60 Days Refill', price: '$19.92', quantity: '1,000/20,000', ...parseDeliveryTime(''), category: 'Facebook Page Like + Followers' },
    
    // Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ
    { id: '3942', description: 'Facebook Group Members | HQ | Instant | 20k/D | NR ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$2.80', quantity: '10/40,000', ...parseDeliveryTime('1 hour 11 minutes'), category: 'Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ' },
    { id: '3943', description: 'Facebook Group Members | HQ | Instant | 20k/D | R30 ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$2.96', quantity: '10/40,000', ...parseDeliveryTime(''), category: 'Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ' },
    { id: '3944', description: 'Facebook Group Members | HQ | Instant | 20k/D | R60 ✅ HQ = High Quality ♻️ R60 = 60 Days Refill', price: '$3.12', quantity: '10/40,000', ...parseDeliveryTime(''), category: 'Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ' },
    { id: '3945', description: 'Facebook Group Members | HQ | Instant | 20k/D | R90 ✅ HQ = High Quality ♻️ R90 = 90 Days Refill', price: '$3.44', quantity: '10/40,000', ...parseDeliveryTime(''), category: 'Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ' },
    { id: '3946', description: 'Facebook Group Members | HQ | Instant | 20k/D | R365 ✅ HQ = High Quality ♻️ R365 = 365 Days Refill', price: '$3.60', quantity: '10/40,000', ...parseDeliveryTime(''), category: 'Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ' },
    { id: '3947', description: 'Facebook Group Members | HQ | Instant | 20k/D | Rꝏ ✅ HQ = High Quality ♻️ Rꝏ = Lifetime Refill', price: '$4.16', quantity: '10/40,000', ...parseDeliveryTime('3 hours 14 minutes'), category: 'Facebook Group Members | Worldwide | Cheapest | 27/10/25 ᴺᴱᵂ' },
    
    // Facebook Page Likes | Worldwide | Best Price | 26/09/25 ᴺᴱᵂ
    { id: '3938', description: 'Facebook Page Likes + Followers | WW | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.08', quantity: '50/500,000', ...parseDeliveryTime('4 hours 33 minutes'), category: 'Facebook Page Likes | Worldwide | Best Price | 26/09/25 ᴺᴱᵂ' },
    { id: '3939', description: 'Facebook Page Likes + Followers | WW | 50K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '50/500,000', ...parseDeliveryTime('12 minutes'), category: 'Facebook Page Likes | Worldwide | Best Price | 26/09/25 ᴺᴱᵂ' },
    { id: '3940', description: 'Facebook Page Likes + Followers | WW | 100K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$11.04', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Facebook Page Likes | Worldwide | Best Price | 26/09/25 ᴺᴱᵂ' },
    { id: '3941', description: 'Facebook Page Likes + Followers | WW | 100K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$12.08', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Facebook Page Likes | Worldwide | Best Price | 26/09/25 ᴺᴱᵂ' },
    
    // Facebook Group Members | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ
    { id: '3806', description: 'Facebook Group Members | BOT | 5K/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$1.92', quantity: '500/1,000,000,000', ...parseDeliveryTime('4 hours 42 minutes'), category: 'Facebook Group Members | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    { id: '3807', description: 'Facebook Group Members | BOT | 5K/D | ND | R15 🔥 ND = Non Drop ♻️ R15 = 15 Days Refill', price: '$2.08', quantity: '500/1,000,000,000', ...parseDeliveryTime(''), category: 'Facebook Group Members | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    { id: '3808', description: 'Facebook Group Members | BOT | 5K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$2.16', quantity: '500/1,000,000,000', ...parseDeliveryTime(''), category: 'Facebook Group Members | Vietnam 🇻🇳 | BOT Data ᴺᴱᵂ' },
    
    // Facebook Group Members | Worldwide | Best Price | Provider
    { id: '3559', description: 'Facebook Group Members | WW | 20k/Day | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$2.72', quantity: '10/40,000', ...parseDeliveryTime('47 minutes'), category: 'Facebook Group Members | Worldwide | Best Price | Provider' },
    { id: '3560', description: 'Facebook Group Members | WW | 20k/Day | LD | R30 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$2.88', quantity: '10/40,000', ...parseDeliveryTime('2 hours 21 minutes'), category: 'Facebook Group Members | Worldwide | Best Price | Provider' },
    
    // Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ
    { id: '3612', description: 'Facebook Post React | Like 👍 | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('2 hours 34 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3613', description: 'Facebook Post React | Love ❤️ | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('3 hours 59 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3614', description: 'Facebook Post React | Haha 😆 | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('1 hour 11 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3615', description: 'Facebook Post React | Wow 😯 | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('4 hours 41 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3616', description: 'Facebook Post React | Care 🤗 | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('3 hours 35 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3617', description: 'Facebook Post React | Sad 😥 | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('3 hours 26 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    { id: '3618', description: 'Facebook Post React | Angry 😡 | Worldwide | Instant | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.36', quantity: '10/500,000', ...parseDeliveryTime('27 minutes'), category: 'Facebook Post React | Worldwide Real Quality | High Speed | ᴾᴿᴼᵛᴵᴰᴱᴿ' },
    
    // ⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ
    { id: '3831', description: 'Facebook Auto Post Likes | 7 Days | 5 Posts/Day | 40-50 Likes/Post', price: '$17.04', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3832', description: 'Facebook Auto Post Likes | 7 Days | 5 Posts/Day | 80-100 Likes/Post', price: '$34.00', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3835', description: 'Facebook Auto Post Likes | 15 Days | 5 Posts/Day | 40-50 Likes/Post', price: '$34.00', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3833', description: 'Facebook Auto Post Likes | 7 Days | 5 Posts/Day | 180-200 Likes/Post', price: '$67.84', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3836', description: 'Facebook Auto Post Likes | 15 Days | 5 Posts/Day | 80-100 Likes/Post', price: '$67.84', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3839', description: 'Facebook Auto Post Likes | 30 Days | 5 Posts/Day | 40-50 Likes/Post', price: '$67.84', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3840', description: 'Facebook Auto Post Likes | 30 Days | 5 Posts/Day | 80-100 Likes/Post', price: '$135.44', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3837', description: 'Facebook Auto Post Likes | 15 Days | 5 Posts/Day | 180-200 Likes/Post', price: '$135.44', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3841', description: 'Facebook Auto Post Likes | 30 Days | 5 Posts/Day | 180-200 Likes/Post', price: '$270.88', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3834', description: 'Facebook Auto Post Likes | 7 Days | 5 Posts/Day | 900-1000 Likes/Post', price: '$338.56', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3838', description: 'Facebook Auto Post Likes | 15 Days | 5 Posts/Day | 900-1000 Likes/Post', price: '$677.12', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    { id: '3842', description: 'Facebook Auto Post Likes | 30 Days | 5 Posts/Day | 900-1000 Likes/Post', price: '$1,354.16', quantity: '1/1', ...parseDeliveryTime(''), category: '⚙️ Facebook Auto Post Likes | Best Working | 11/10/25 ᴺᴱᵂ' },
    
    // Facebook Post Likes 👍 ᴺᴱᵂ
    { id: '4020', description: 'Facebook Post Likes | Asian | Instant | 2k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$1.92', quantity: '20/10,000', ...parseDeliveryTime('125 hours 28 minutes'), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4016', description: 'Facebook Post Likes | Instant | 1k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.08', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4018', description: 'Facebook Post Likes | Instant | 3k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/50,000', ...parseDeliveryTime('12 hours 16 minutes'), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4017', description: 'Facebook Post Likes | Instant | 2k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.48', quantity: '30/10,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4040', description: 'Facebook Post Likes | HQ Profiles | 50k/D | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.48', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4019', description: 'Facebook Post Likes | Instant | 4k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.04', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4025', description: 'Facebook Post Likes | Instant | 50k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('24 minutes'), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4021', description: 'Facebook Post Likes | Instant | 5k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.84', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4023', description: 'Facebook Post Likes | Worldwide | 10k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$4.08', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4022', description: 'Facebook Post Likes | Instant | 7k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$4.88', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    { id: '4024', description: 'Facebook Post Likes | Instant | 20k/Day | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 ᴺᴱᵂ' },
    
    // Facebook Post Likes 👍 | Vietnam 🇻🇳 ᴺᴱᵂ
    { id: '5216', description: '🇻🇳 Facebook Post Likes | Vietnam | Instant | 20K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$5.52', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Facebook Post Likes 👍 | Vietnam 🇻🇳 ᴺᴱᵂ' },
    
    // Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️
    { id: '5218', description: '🇻🇳 Facebook Post React | Mix 👍❤️ | Vietnam | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime('26 minutes'), category: 'Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️' },
    { id: '5219', description: '🇻🇳 Facebook Post React | Mix 👍❤️🤗 | Vietnam | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime('15 minutes'), category: 'Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️' },
    { id: '5220', description: '🇻🇳 Facebook Post React | Mix 👍❤️🤗😆 | Vietnam | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️' },
    { id: '5221', description: '🇻🇳 Facebook Post React | Mix 👍❤️🤗😆😲 | Vietnam | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️' },
    { id: '5222', description: '🇻🇳 Facebook Post React | Mix 👍❤️🤗😆😲😥 | Vietnam | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️' },
    { id: '5223', description: '🇻🇳 Facebook Post React | Mix 👍❤️🤗😆😲😥😡 | Vietnam | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.80', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post React | Vietnam 🇻🇳 | Best Speed | SV1 ❤️' },
    
    // Facebook Post React | Vietnam 🇻🇳 | Medium | SV2 ❤️
    { id: '5217', description: '🇻🇳 Facebook Post React | Mix 👍❤️🤗😆😲😥😡 | Vietnam | 20K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Facebook Post React | Vietnam 🇻🇳 | Medium | SV2 ❤️' },
    
    // 🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ
    { id: '5129', description: '🇻🇳 Facebook Post React | Like 👍 | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime('14 hours 55 minutes'), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5130', description: '🇻🇳 Facebook Post React | Love ❤️ | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime('1 hour 3 minutes'), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5131', description: '🇻🇳 Facebook Post React | Wow 😲 | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5132', description: '🇻🇳 Facebook Post React | Haha 😆 | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime('6 hours 42 minutes'), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5133', description: '🇻🇳 Facebook Post React | Care 🤗 | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime('12 hours 54 minutes'), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5134', description: '🇻🇳 Facebook Post React | Sad 😥 | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5135', description: '🇻🇳 Facebook Post React | Angry 😡 | Vietnam Pages | Instant | 10K/D | ND | CB | NR 🔥 ND = Non Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.16', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5136', description: '🇻🇳 Facebook Post React | Like 👍 | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5137', description: '🇻🇳 Facebook Post React | Love ❤️ | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5138', description: '🇻🇳 Facebook Post React | Wow 😲 | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5139', description: '🇻🇳 Facebook Post React | Haha 😆 | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5140', description: '🇻🇳 Facebook Post React | Care 🤗 | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5141', description: '🇻🇳 Facebook Post React | Sad 😥 | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime('17 hours 19 minutes'), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    { id: '5142', description: '🇻🇳 Facebook Post React | Angry 😡 | Vietnam Pages | Instant | 10K/D | ND | CB | R30 🔥 ND = Non Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '100/500,000', ...parseDeliveryTime(''), category: '🇻🇳 Facebook Post React | Vieatnam Pages | %100 Non Drop ❤️ ᴺᴱᵂ' },
    
    // Facebook Post React | Worldwide | Cheapest | SV5 ❤️
    { id: '3567', description: 'Facebook Post React | Like 👍 | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('15 minutes'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    { id: '3568', description: 'Facebook Post React | Love ❤️ | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('8 minutes'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    { id: '3569', description: 'Facebook Post React | Wow 😲 | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('17 hours 45 minutes'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    { id: '3570', description: 'Facebook Post React | Haha 😆 | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('37 hours 1 minute'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    { id: '3571', description: 'Facebook Post React | Care 🤗 | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('32 hours 12 minutes'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    { id: '3572', description: 'Facebook Post React | Sad 😥 | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('34 minutes'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    { id: '3573', description: 'Facebook Post React | Angry 😡 | WW | 10k/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$0.88', quantity: '10/500,000', ...parseDeliveryTime('32 hours 3 minutes'), category: 'Facebook Post React | Worldwide | Cheapest | SV5 ❤️' },
    
    // Facebook Post React | Worldwide | High Speed | SV2 ❤️
    { id: '3843', description: 'Facebook Post React | Like👍 | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime('1 hour 55 minutes'), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    { id: '3844', description: 'Facebook Post React | Love❤️ | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime('2 hours 52 minutes'), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    { id: '3845', description: 'Facebook Post React | Haha😆 | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime('3 minutes'), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    { id: '3846', description: 'Facebook Post React | Wow😯 | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime('2 hours 12 minutes'), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    { id: '3847', description: 'Facebook Post React | Care🤗 | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime('1 hour 17 minutes'), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    { id: '3848', description: 'Facebook Post React | Sad😥 | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime('7 hours 39 minutes'), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    { id: '3849', description: 'Facebook Post React | Angry😡 | %100 Real | 10k/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.40', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Facebook Post React | Worldwide | High Speed | SV2 ❤️' },
    
    // Facebook Worldwide Services
    { id: '4183', description: 'Facebook Post React | Love❤️ | HQ | Real Users | World Wide | 500/Mins | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$10.96', quantity: '50/3,000', ...parseDeliveryTime('5 hours 34 minutes'), category: 'Facebook Worldwide Services' },
    { id: '4184', description: 'Facebook Post React | Wow😲 | HQ | Real Users | World Wide | 500/Mins | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$10.96', quantity: '50/3,000', ...parseDeliveryTime('9 minutes'), category: 'Facebook Worldwide Services' },
    { id: '4185', description: 'Facebook Post React | Care🤗 | HQ | Real Users | World Wide | 500/Mins | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$10.96', quantity: '50/3,000', ...parseDeliveryTime(''), category: 'Facebook Worldwide Services' },
    { id: '4186', description: 'Facebook Post React | Haha😄 | HQ | Real Users | World Wide | 500/Mins | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$10.96', quantity: '50/3,000', ...parseDeliveryTime(''), category: 'Facebook Worldwide Services' },
    { id: '4187', description: 'Facebook Post React | Sad😥 | HQ | Real Users | World Wide | 500/Mins | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$10.96', quantity: '50/3,000', ...parseDeliveryTime(''), category: 'Facebook Worldwide Services' },
    { id: '4188', description: 'Facebook Post React | Angry😡 | HQ | Real Users | World Wide | 500/Mins | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$10.96', quantity: '50/3,000', ...parseDeliveryTime(''), category: 'Facebook Worldwide Services' },
    { id: '4182', description: 'Facebook Post React | Likes👍 | HQ | Real Users | World Wide | 100k/Day | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$11.92', quantity: '50/500', ...parseDeliveryTime(''), category: 'Facebook Worldwide Services' },
    
    // Facebook Post React | SV1 ❤️
    { id: '4066', description: 'Facebook Post React | Like👍 | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('14 minutes'), category: 'Facebook Post React | SV1 ❤️' },
    { id: '4067', description: 'Facebook Post React | Love❤️ | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('55 minutes'), category: 'Facebook Post React | SV1 ❤️' },
    { id: '4068', description: 'Facebook Post React | Wow😲 | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('1 hour 25 minutes'), category: 'Facebook Post React | SV1 ❤️' },
    { id: '4069', description: 'Facebook Post React | Care🤗 | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('15 minutes'), category: 'Facebook Post React | SV1 ❤️' },
    { id: '4070', description: 'Facebook Post React | Haha😆 | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('16 minutes'), category: 'Facebook Post React | SV1 ❤️' },
    { id: '4071', description: 'Facebook Post React | Sad😥 | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('16 minutes'), category: 'Facebook Post React | SV1 ❤️' },
    { id: '4072', description: 'Facebook Post React | Angry😡 | 20k/Day | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.52', quantity: '50/50,000', ...parseDeliveryTime('19 minutes'), category: 'Facebook Post React | SV1 ❤️' },
  ];


  // Real YouTube Services Data (prices multiplied by 8x)
  const realYouTubeServices: Service[] = [
    // YouTube Subscribers | Premium Quality | Up To Date ᴺᴱᵂ
    { id: '5224', description: 'YouTube Subscribers | Instant | 150/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$140.48', quantity: '100/50,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Premium Quality | Up To Date ᴺᴱᵂ' },
    
    // YouTube Subscribers | Premium Quality | ᴺᴱᵂ
    { id: '3699', description: 'YouTube Subscribers | Instant | 100/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$134.08', quantity: '100/50,000', ...parseDeliveryTime('59 hours 6 minutes'), category: 'YouTube Subscribers | Premium Quality | ᴺᴱᵂ' },
    { id: '3700', description: 'YouTube Subscribers | Instant | 200/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$150.48', quantity: '100/50,000', ...parseDeliveryTime('36 hours 4 minutes'), category: 'YouTube Subscribers | Premium Quality | ᴺᴱᵂ' },
    { id: '3701', description: 'YouTube Subscribers | Instant | 300/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$189.68', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Premium Quality | ᴺᴱᵂ' },
    { id: '3702', description: 'YouTube Subscribers | Instant | 500/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$192.00', quantity: '100/50,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Premium Quality | ᴺᴱᵂ' },
    
    // YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ
    { id: '4796', description: 'YouTube Watch Time | +5 Mins | 100/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$90.32', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ' },
    { id: '3713', description: 'YouTube Watch Time | +10 Mins | 100/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$99.36', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ' },
    { id: '3640', description: 'YouTube Watch Time | +15 Mins | 100/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$108.40', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ' },
    { id: '3641', description: 'YouTube Watch Time | +30 Mins | 100/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$126.48', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ' },
    { id: '3642', description: 'YouTube Watch Time | +60 Mins | 100/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$162.56', quantity: '100/100,000', ...parseDeliveryTime('133 hours 58 minutes'), category: 'YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ' },
    { id: '3643', description: 'YouTube Watch Time | +120 Mins | 100/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$225.76', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Watch Time Views [Valid for YPP Watch Hours] ᴺᴱᵂ' },
    
    // YouTube Views | Recommended ⭐
    { id: '4767', description: 'YouTube Views | 1k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$8.40', quantity: '100/100,000,000', ...parseDeliveryTime('46 minutes'), category: 'YouTube Views | Recommended ⭐' },
    { id: '4768', description: 'YouTube Views | 2k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$10.96', quantity: '100/10,000,000', ...parseDeliveryTime('14 hours 30 minutes'), category: 'YouTube Views | Recommended ⭐' },
    { id: '4769', description: 'YouTube Views | 3k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$12.08', quantity: '100/10,000,000', ...parseDeliveryTime('37 minutes'), category: 'YouTube Views | Recommended ⭐' },
    { id: '4770', description: 'YouTube Views | Ranking + External | 5k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$14.64', quantity: '100/300,000', ...parseDeliveryTime('46 minutes'), category: 'YouTube Views | Recommended ⭐' },
    { id: '4771', description: 'YouTube Views | 5k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$14.96', quantity: '100/10,000,000', ...parseDeliveryTime(''), category: 'YouTube Views | Recommended ⭐' },
    
    // YouTube Native Ads Views | Non Drop | Best Working | 05/10/25 ᴺᴱᵂ
    { id: '3648', description: 'YouTube Native Ads Views | Min 40K | 200K/D | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$8.72', quantity: '40,000/100,000,000', ...parseDeliveryTime(''), category: 'YouTube Native Ads Views | Non Drop | Best Working | 05/10/25 ᴺᴱᵂ' },
    { id: '3647', description: 'YouTube Native Ads Views | Min 10K | 200K/D | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$9.60', quantity: '10,000/100,000,000', ...parseDeliveryTime(''), category: 'YouTube Native Ads Views | Non Drop | Best Working | 05/10/25 ᴺᴱᵂ' },
    { id: '3646', description: 'YouTube Native Ads Views | Min 3K | 200K/D | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$11.44', quantity: '3,000/100,000,000', ...parseDeliveryTime(''), category: 'YouTube Native Ads Views | Non Drop | Best Working | 05/10/25 ᴺᴱᵂ' },
    
    // YouTube Adword Views | Working
    { id: '4794', description: 'YouTube Adwords Views | Min 1M | 1M/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$2.80', quantity: '1,000,000/5,000,000', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    { id: '4793', description: 'YouTube Adwords Views | 6-12H Approval | Min 50k | Non Drop | 1M/Day | Lifetime Refill 🔥⚡♻️', price: '$3.12', quantity: '500,000/5,000,000', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    { id: '2249', description: 'YouTube Adwords Views | 6-12H Approval | Min 50k | Non Drop | 1M/Day | Lifetime Refill 🔥⚡♻️', price: '$403.52', quantity: '1/1', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    { id: '2250', description: 'YouTube Adwords Views | 6-12H Approval | Min 100k | Non Drop | 1M/Day | Lifetime Refill 🔥⚡♻️', price: '$756.64', quantity: '1/1', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    { id: '2246', description: 'YouTube Adwords Views | 6-12H Approval | Min 10k | Non Drop | 1M/Day | Lifetime Refill 🔥⚡♻️', price: '$1,916.64', quantity: '1/1', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    { id: '2252', description: 'YouTube Adwords Views | 6-12H Approval | Min 500k | Non Drop | 1M/Day | Lifetime Refill 🔥⚡♻️', price: '$3,732.24', quantity: '1/1', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    { id: '2253', description: 'YouTube Adwords Views | 6-12H Approval | Min 1M | Non Drop | 1M/Day | Lifetime Refill 🔥⚡♻️', price: '$4,841.84', quantity: '1/1', ...parseDeliveryTime(''), category: 'YouTube Adword Views | Working' },
    
    // YouTube Subscribers | Good Quality | Non Drop ᴺᴱᵂ
    { id: '3703', description: 'YouTube Subscribers | HQ | 1K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$182.88', quantity: '100/5,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Good Quality | Non Drop ᴺᴱᵂ' },
    { id: '3704', description: 'YouTube Subscribers | HQ | 2K/D | ND | Rꝏ 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ Rꝏ = Lifetime Refill', price: '$191.52', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Good Quality | Non Drop ᴺᴱᵂ' },
    { id: '3705', description: 'YouTube Subscribers | Real Human | 1k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$356.96', quantity: '50/500,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Good Quality | Non Drop ᴺᴱᵂ' },
    { id: '3706', description: 'YouTube Subscribers | Real Human | 2k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$419.12', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Good Quality | Non Drop ᴺᴱᵂ' },
    
    // YouTube Video Views | High Retention
    { id: '4788', description: 'YouTube Video Views | 1-3 Mins Retention | 500-2k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$14.64', quantity: '100/100,000,000', ...parseDeliveryTime('77 hours 21 minutes'), category: 'YouTube Video Views | High Retention' },
    { id: '4790', description: 'YouTube Video Views | 1-3 Mins Retention | 5k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$16.48', quantity: '100/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Video Views | High Retention' },
    { id: '4789', description: 'YouTube Video Views | 1-5 Mins Retention | 500-2k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$17.04', quantity: '500/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Video Views | High Retention' },
    
    // YouTube Views | Refillable
    { id: '4772', description: 'Youtube Views | 500/Day | Rꝏ ♻️ Rꝏ = Lifetime Refill', price: '$7.36', quantity: '100/1,000,000', ...parseDeliveryTime('8 hours 34 minutes'), category: 'YouTube Views | Refillable' },
    { id: '4773', description: 'YouTube Views | 500/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$7.60', quantity: '100/10,000,000', ...parseDeliveryTime('65 hours 2 minutes'), category: 'YouTube Views | Refillable' },
    { id: '4775', description: 'YouTube Video Views | 300-500/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$7.76', quantity: '100/5,000,000', ...parseDeliveryTime(''), category: 'YouTube Views | Refillable' },
    { id: '4774', description: 'YouTube Views | 100-200/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$7.92', quantity: '100/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Views | Refillable' },
    { id: '4777', description: 'YouTube Views | 3k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$9.12', quantity: '100/10,000,000', ...parseDeliveryTime(''), category: 'YouTube Views | Refillable' },
    { id: '4776', description: 'YouTube Views | 2k/Day | ND | R60 🔥 ND = Non Drop ♻️ R60 = 60 Days Refill', price: '$9.60', quantity: '100/10,000,000', ...parseDeliveryTime('19 minutes'), category: 'YouTube Views | Refillable' },
    { id: '4778', description: 'YouTube Video Views + Bonus Likes | Social Ranking | 5k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$21.04', quantity: '1,000/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Views | Refillable' },
    
    // YouTube Views | No Refill | Unstable
    { id: '4791', description: 'YouTube Video Views | 1k-3k/Day | NR ⚠️ NR = No Refill', price: '$3.20', quantity: '200/5,000,000', ...parseDeliveryTime(''), category: 'YouTube Views | No Refill | Unstable' },
    { id: '4792', description: 'YouTube Video Views | 2k-5k/Day | NR ⚠️ NR = No Refill', price: '$3.36', quantity: '1,000/50,000', ...parseDeliveryTime(''), category: 'YouTube Views | No Refill | Unstable' },
    
    // YouTube Watch Hours
    { id: '4795', description: 'YouTube Watch Time | 3 Mins Video | 500/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$68.40', quantity: '50/100,000', ...parseDeliveryTime('65 hours 52 minutes'), category: 'YouTube Watch Hours' },
    { id: '5248', description: 'YouTube Watch Time | 5 Mins Video | 500/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$108.56', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Watch Hours' },
    { id: '5249', description: 'YouTube Watch Time | 15 Mins Video | 500/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$269.04', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Watch Hours' },
    
    // Youtube Likes
    { id: '4797', description: 'Youtube Video Likes | Instant | 2k/Day | NR ⚠️ NR = No Refill', price: '$0.88', quantity: '10/30,000', ...parseDeliveryTime('2 minutes'), category: 'Youtube Likes' },
    { id: '4798', description: 'Youtube Likes | Instant | 5k/H | HD | NR ⚠️ NR = No Refill', price: '$1.12', quantity: '50/500,000', ...parseDeliveryTime('3 minutes'), category: 'Youtube Likes' },
    { id: '4799', description: 'Youtube Likes | MQ | 1k-3K/Day | R30 🔀 MQ = Mixed Quality ♻️ R30 = 30 Days Refill', price: '$2.80', quantity: '10/250,000', ...parseDeliveryTime('1 hour 35 minutes'), category: 'Youtube Likes' },
    { id: '4801', description: 'Youtube Video Likes | Instant | 50k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$3.68', quantity: '10/10,000', ...parseDeliveryTime(''), category: 'Youtube Likes' },
    { id: '4800', description: 'Youtube Video Likes | Instant | 10k-20k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$6.00', quantity: '10/100,000', ...parseDeliveryTime('5 minutes'), category: 'Youtube Likes' },
    { id: '4802', description: 'Youtube Video Likes | Instant | 5k-10k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$6.24', quantity: '10/20,000', ...parseDeliveryTime(''), category: 'Youtube Likes' },
    { id: '4803', description: 'Youtube Video Likes | Instant | 10k-20k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$7.04', quantity: '25/100,000', ...parseDeliveryTime(''), category: 'Youtube Likes' },
    { id: '4804', description: 'Youtube Video Likes | Instant | 20k-50k/Day | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$9.12', quantity: '20/500,000', ...parseDeliveryTime('9 minutes'), category: 'Youtube Likes' },
    
    // Youtube Dislikes
    { id: '4805', description: 'YouTube Video Comments Dislikes | 1k-5K/Day | NR ⚠️ NR = No Refill', price: '$19.20', quantity: '50/15,000', ...parseDeliveryTime(''), category: 'Youtube Dislikes' },
    { id: '4806', description: 'YouTube Video Dislikes | 50-400/Day | R30 ♻️ R30 = 30 Days Refill', price: '$82.08', quantity: '20/130,000', ...parseDeliveryTime(''), category: 'Youtube Dislikes' },
    
    // Youtube Comments
    { id: '4807', description: 'YouTube Comments | World Wide | Custom | 1k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$47.92', quantity: '10/5,000', ...parseDeliveryTime(''), category: 'Youtube Comments' },
    { id: '4808', description: 'YouTube Comments | Custom | 1k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$54.72', quantity: '5/10,000', ...parseDeliveryTime('7 minutes'), category: 'Youtube Comments' },
    { id: '4809', description: 'YouTube Comments | World Wide | Random English Comments | 1k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$269.04', quantity: '10/250', ...parseDeliveryTime(''), category: 'Youtube Comments' },
    
    // 🔥 YouTube Comments By AI | Owned ᴺᴱᵂ
    { id: '4394', description: '🇮🇳 YouTube Comments Created by AI | Indain | Auto Generate Comments Based on Video Content and Video Title | Bonus : 10% Likes | R30 ♻️ R30 = 30 Days Refill', price: '$20.16', quantity: '500/1,000', ...parseDeliveryTime(''), category: '🔥 YouTube Comments By AI | Owned ᴺᴱᵂ' },
    { id: '4395', description: 'YouTube Comments Created by AI | Auto Generate Comments Based on Video Content and Video Title | Bonus : 10% Likes | R30 ♻️ R30 = 30 Days Refill', price: '$21.12', quantity: '500/2,000', ...parseDeliveryTime(''), category: '🔥 YouTube Comments By AI | Owned ᴺᴱᵂ' },
    { id: '4396', description: 'YouTube Comments Created by AI | Auto Generate Comments Based on Video Content and Video Title | Bonus : 10% Subs + 5% Likes | R30 ♻️ R30 = 30 Days Refill', price: '$28.64', quantity: '500/2,000', ...parseDeliveryTime(''), category: '🔥 YouTube Comments By AI | Owned ᴺᴱᵂ' },
    
    // YouTube Live Stream Views | 100% Concurrent Viewers | Always Working
    { id: '4810', description: 'YouTube Live Stream Views | 15 Minutes', price: '$1.68', quantity: '100/100,000', ...parseDeliveryTime('7 minutes'), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4811', description: 'YouTube Live Stream Views | 30 Minutes', price: '$3.36', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4812', description: 'YouTube Live Stream Views | 60 Minutes', price: '$6.64', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4813', description: 'YouTube Live Stream Views | 90 Minutes', price: '$9.92', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4814', description: 'YouTube Live Stream Views | 2 Hours', price: '$13.20', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4815', description: 'YouTube Live Stream Views | 3 Hours', price: '$19.76', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4816', description: 'YouTube Live Stream Views | 4 Hours', price: '$26.32', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4817', description: 'YouTube Live Stream Views | 6 Hours', price: '$39.44', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4818', description: 'YouTube Live Stream Views | 12 Hours', price: '$78.80', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    { id: '4819', description: 'YouTube Live Stream Views | 24 Hours', price: '$157.60', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100% Concurrent Viewers | Always Working' },
    
    // YouTube Livestream Views | 100% Concurrent Viewers | Cheapest
    { id: '4820', description: 'YouTube Live Stream Views | 15 Minutes', price: '$0.80', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4821', description: 'YouTube Live Stream Views | 30 Minutes', price: '$1.60', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4822', description: 'YouTube Live Stream Views | 60 Minutes', price: '$3.12', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4823', description: 'YouTube Live Stream Views | 90 Minutes', price: '$4.72', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4824', description: 'YouTube Live Stream Views | 120 Minutes', price: '$6.16', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4825', description: 'YouTube Live Stream Views | 180 Minutes', price: '$9.28', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4826', description: 'YouTube Live Stream Views | 240 Minutes', price: '$12.32', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4827', description: 'YouTube Live Stream Views | 300 Minutes', price: '$18.48', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4828', description: 'YouTube Live Stream Views | 6 Hours', price: '$20.56', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4829', description: 'YouTube Live Stream Views | 12 Hours', price: '$36.88', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4830', description: 'YouTube Live Stream Views | 24 Hours', price: '$73.68', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4831', description: 'YouTube Live Stream Views | 7 Days', price: '$892.40', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    { id: '4832', description: 'YouTube Live Stream Views | 30 Days', price: '$3,824.32', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | 100% Concurrent Viewers | Cheapest' },
    
    // YouTube Live Stream Views | 100-120% Concurrent Viewers
    { id: '4833', description: 'YouTube Livestream Views | 30 Mins', price: '$3.28', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4834', description: 'YouTube Livestream Views | 60 Mins', price: '$6.48', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4835', description: 'YouTube Livestream Views | 120 Mins', price: '$12.88', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4836', description: 'YouTube Livestream Views | 180 Mins', price: '$19.28', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4837', description: 'YouTube Livestream Views | 360 Mins', price: '$38.40', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4838', description: 'YouTube Livestream Views | 720 Mins', price: '$76.64', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4839', description: 'YouTube Livestream Views | 1440 Mins', price: '$153.28', quantity: '100/60,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4840', description: 'YouTube Livestream Views | 3 Days', price: '$893.76', quantity: '200/25,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4841', description: 'YouTube Livestream Views | 7 Days', price: '$1,153.68', quantity: '200/25,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4842', description: 'YouTube Livestream Views | 14 Days', price: '$2,307.36', quantity: '200/25,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    { id: '4843', description: 'YouTube Livestream Views | 30 Days', price: '$4,719.60', quantity: '200/25,000', ...parseDeliveryTime(''), category: 'YouTube Live Stream Views | 100-120% Concurrent Viewers' },
    
    // YouTube Livestream Views | Different Sources
    { id: '4844', description: 'YouTube Live Stream Views | Direct/Unknown | 15 Minutes', price: '$3.36', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4845', description: 'YouTube Live Stream Views | Direct/Unknown | 30 Minutes', price: '$6.64', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4846', description: 'YouTube Live Stream Views | Direct/Unknown | 60 Minutes', price: '$13.20', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4847', description: 'YouTube Live Stream Views | Direct/Unknown | 90 Minutes', price: '$19.76', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4848', description: 'YouTube Live Stream Views | Direct/Unknown | 120 Minutes', price: '$26.32', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4849', description: 'YouTube Live Stream Views | Direct/Unknown | 150 Minutes', price: '$32.88', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4850', description: 'YouTube Live Stream Views | Direct/Unknown | 180 Minutes', price: '$36.16', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4851', description: 'YouTube Live Stream Views | Direct/Unknown | 360 Minutes', price: '$72.24', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4852', description: 'YouTube Views | Retention : 5+ Minutes | Non Drop | 500/Day | Lifetime Refill 🔥♻️', price: '$109.44', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    { id: '4853', description: 'YouTube Live Stream Views | Direct/Unknown | 1440 Minutes', price: '$218.88', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'YouTube Livestream Views | Different Sources' },
    
    // Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛
    { id: '4854', description: 'YouTube Livestream Views | 15 Mins', price: '$0.32', quantity: '50/50,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4855', description: 'YouTube Livestream Views | 30 Mins', price: '$0.64', quantity: '50/200,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4856', description: 'YouTube Livestream Views | 60 Mins', price: '$1.36', quantity: '50/200,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4857', description: 'YouTube Livestream Views | 90 Mins', price: '$2.08', quantity: '50/200,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4858', description: 'YouTube Livestream Views | 120 Mins', price: '$2.72', quantity: '50/200,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4859', description: 'YouTube Livestream Views | 150 Mins', price: '$3.36', quantity: '50/200,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4860', description: 'YouTube Livestream Views | 180 Mins', price: '$4.08', quantity: '50/200,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4861', description: 'YouTube Livestream Views | 360 Mins', price: '$34.48', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4862', description: 'YouTube Livestream Views | 720 Mins', price: '$68.96', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    { id: '4863', description: 'YouTube Livestream Views | 1440 Mins', price: '$210.72', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'Youtube LiveStream Views | 100% 𝘊𝘖𝘕𝘊𝘜𝘙𝘙𝘌𝘕𝘛' },
    
    // YouTube Real Active Views | Mostly Stable ᴺᴱᵂ
    { id: '5096', description: 'YouTube Real Active Views + Engagements | Instant | 10K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$18.24', quantity: '1,000/1,000,000', ...parseDeliveryTime(''), category: 'YouTube Real Active Views | Mostly Stable ᴺᴱᵂ' },
    
    // YouTube Subscribers | Market Challenge | Cheapest ᴺᴱᵂ
    { id: '5235', description: 'YouTube Subscribers | 100/D | LD | R90 📉 LD = Low Drop ♻️ R90 = 90 Days Refill', price: '$108.56', quantity: '100/100,000', ...parseDeliveryTime(''), category: 'YouTube Subscribers | Market Challenge | Cheapest ᴺᴱᵂ' },
    
    // 🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ
    { id: '5236', description: 'YouTube Live Stream Views | 15 Mins', price: '$0.32', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5237', description: 'YouTube Live Stream Views | 30 Mins', price: '$0.64', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5238', description: 'YouTube Live Stream Views | 45 Mins', price: '$0.96', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5239', description: 'YouTube Live Stream Views | 60 Mins', price: '$1.28', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5240', description: 'YouTube Live Stream Views | 120 Mins', price: '$2.48', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5241', description: 'YouTube Live Stream Views | 180 Mins', price: '$3.68', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5242', description: 'YouTube Live Stream Views | 240 Mins', price: '$4.96', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5243', description: 'YouTube Live Stream Views | 360 Mins', price: '$7.36', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5244', description: 'YouTube Live Stream Views | 720 Mins', price: '$14.64', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
    { id: '5245', description: 'YouTube Live Stream Views | 1440 Mins', price: '$29.12', quantity: '50/500,000', ...parseDeliveryTime(''), category: '🔴 Youtube LiveStream Views | Ultra Cheap | Base 4 ᴺᴱᵂ' },
  ];

// Real Instagram Services Data (prices multiplied by 8x)
const realInstagramServices: Service[] = [
  // Limited Time Free Instagram Followers 🔥🆓
  { id: '5192', description: 'FREE Instagram Followers | BOT Quality | Instant | No Refill ⚡️⚠️', price: '$0.00', quantity: '20/20', ...parseDeliveryTime(''), category: 'Limited Time Free Instagram Followers 🔥🆓' },
  
  // Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ
  { id: '5185', description: '🇺🇸🇪🇺 Instagram Likes | USA + EU | Mix Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime('12 minutes'), category: 'Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ' },
  { id: '5186', description: '🇺🇸🇪🇺 Instagram Likes | USA + EU | Male Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ' },
  { id: '5187', description: '🇺🇸🇪🇺 Instagram Likes | USA + EU | Female Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ' },
  { id: '5188', description: '🇺🇸🇪🇺 Instagram Followers | USA + EU | Mix Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/100,000', ...parseDeliveryTime('7 minutes'), category: 'Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ' },
  { id: '5189', description: '🇺🇸🇪🇺 Instagram Followers | USA + EU | Male Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ' },
  { id: '5190', description: '🇺🇸🇪🇺 Instagram Followers | USA + EU | Female Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | USA 🇺🇸 + EU 🇪🇺 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ
  { id: '5179', description: '🇳🇬 Instagram Likes | Nigerian | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ' },
  { id: '5180', description: '🇳🇬 Instagram Likes | Nigerian | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ' },
  { id: '5181', description: '🇳🇬 Instagram Likes | Nigerian | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ' },
  { id: '5182', description: '🇳🇬 Instagram Followers | Nigerian | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ' },
  { id: '5183', description: '🇳🇬 Instagram Followers | Nigerian | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ' },
  { id: '5184', description: '🇳🇬 Instagram Followers | Nigerian | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/50,000', ...parseDeliveryTime(''), category: 'Instagram Services | Nigeria 🇳🇬 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ
  { id: '5173', description: '🇫🇷 Instagram Likes | France | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ' },
  { id: '5174', description: '🇫🇷 Instagram Likes | France | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ' },
  { id: '5175', description: '🇫🇷 Instagram Likes | France | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ' },
  { id: '5176', description: '🇫🇷 Instagram Followers | France | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ' },
  { id: '5177', description: '🇫🇷 Instagram Followers | France | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/20,000', ...parseDeliveryTime('8 minutes'), category: 'Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ' },
  { id: '5178', description: '🇫🇷 Instagram Followers | France | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | France 🇫🇷 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ
  { id: '5167', description: '🇹🇷 Instagram Likes | Turkey | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/150,000', ...parseDeliveryTime(''), category: 'Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ' },
  { id: '5168', description: '🇹🇷 Instagram Likes | Turkey | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/150,000', ...parseDeliveryTime(''), category: 'Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ' },
  { id: '5169', description: '🇹🇷 Instagram Likes | Turkey | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/150,000', ...parseDeliveryTime(''), category: 'Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ' },
  { id: '5170', description: '🇹🇷 Instagram Followers | Turkey | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/150,000', ...parseDeliveryTime(''), category: 'Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ' },
  { id: '5171', description: '🇹🇷 Instagram Followers | Turkey | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/150,000', ...parseDeliveryTime(''), category: 'Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ' },
  { id: '5172', description: '🇹🇷 Instagram Followers | Turkey | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/150,000', ...parseDeliveryTime(''), category: 'Instagram Services | Turkey 🇹🇷 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ
  { id: '5158', description: '🇪🇸 Instagram Likes | Spain | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime('13 minutes'), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5159', description: '🇪🇸 Instagram Likes | Spain | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5160', description: '🇪🇸 Instagram Likes | Spain | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5161', description: '🇪🇸 Instagram Followers | Spain | Mix Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5162', description: '🇪🇸 Instagram Followers | Spain | Male Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5163', description: '🇪🇸 Instagram Followers | Spain | Female Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5164', description: '🇪🇸 Instagram Followers | Spain | Mix Profiles | Instant | 10K/D | LD | CB | R365 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$336.24', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5165', description: '🇪🇸 Instagram Followers | Spain | Male Profiles | Instant | 10K/D | LD | CB | R365 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$336.24', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  { id: '5166', description: '🇪🇸 Instagram Followers | Spain | Female Profiles | Instant | 10K/D | LD | CB | R365 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$336.24', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Spain 🇪🇸 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ
  { id: '5152', description: '🇮🇹 Instagram Likes | Italy | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/300,000', ...parseDeliveryTime(''), category: 'Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ' },
  { id: '5153', description: '🇮🇹 Instagram Likes | Italy | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/300,000', ...parseDeliveryTime(''), category: 'Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ' },
  { id: '5154', description: '🇮🇹 Instagram Likes | Italy | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.28', quantity: '20/300,000', ...parseDeliveryTime(''), category: 'Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ' },
  { id: '5155', description: '🇮🇹 Instagram Followers | Italy | Mix Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ' },
  { id: '5156', description: '🇮🇹 Instagram Followers | Italy | Male Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ' },
  { id: '5157', description: '🇮🇹 Instagram Followers | Italy | Female Profiles | Instant | 10K/D | LD | CB | R30 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$224.08', quantity: '20/10,000', ...parseDeliveryTime(''), category: 'Instagram Services | Italy 🇮🇹 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Latin | Latest ᴺᴱᵂ
  { id: '5146', description: 'Instagram Followers | Latin | Mix Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.56', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Latin | Latest ᴺᴱᵂ' },
  { id: '5147', description: 'Instagram Followers | Latin | Male Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.56', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Latin | Latest ᴺᴱᵂ' },
  { id: '5148', description: 'Instagram Followers | Latin | Female Profiles | Instant | 10K/D | LD | CB | R90 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$118.56', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Latin | Latest ᴺᴱᵂ' },
  { id: '5149', description: 'Instagram Followers | Latin | Mix Profiles | Instant | 10K/D | LD | CB | R180 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R180 = 180 Days Refill', price: '$224.08', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Latin | Latest ᴺᴱᵂ' },
  { id: '5151', description: 'Instagram Followers | Latin | Female Profiles | Instant | 10K/D | LD | CB | R180 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R180 = 180 Days Refill', price: '$224.08', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Latin | Latest ᴺᴱᵂ' },
  { id: '5150', description: 'Instagram Followers | Latin | Male Profiles | Instant | 10K/D | LD | CB | R180 📉 LD = Low Drop ⛔ CB = Cancel Button ♻️ R180 = 180 Days Refill', price: '$237.12', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Services | Latin | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ
  { id: '5109', description: '🇸🇦 Instagram Likes | Arab | Mix Profiles | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$10.96', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5110', description: '🇸🇦 Instagram Likes | Arab | Male Profiles | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$10.96', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5111', description: '🇸🇦 Instagram Likes | Arab | Female Profiles | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$10.96', quantity: '20/20,000', ...parseDeliveryTime(''), category: 'Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5112', description: '🇸🇦 Instagram Followers | Arab | Mix Profiles | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/50,000', ...parseDeliveryTime(''), category: 'Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5113', description: '🇸🇦 Instagram Followers | Arab | Male Profiles | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/50,000', ...parseDeliveryTime(''), category: 'Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5114', description: '🇸🇦 Instagram Followers | Arab | Female Profiles | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$118.64', quantity: '20/50,000', ...parseDeliveryTime(''), category: 'Instagram Services | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  
  // Instagram Likes | Arab 🇸🇦 | Latest ᴺᴱᵂ
  { id: '5104', description: '🇸🇦 Instagram Likes | Arab | Instant | 20K/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$5.44', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5105', description: '🇸🇦 Instagram Likes | Arab | Instant | 20K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$7.76', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5106', description: '🇸🇦 Instagram Likes | Arab | Instant | 20K/D | ND | R90 🔥 ND = Non Drop ♻️ R90 = 90 Days Refill', price: '$8.72', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5107', description: '🇸🇦 Instagram Likes | Arab | Instant | 20K/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$9.60', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  { id: '5108', description: '🇸🇦 Instagram Likes | Arab | Instant | 20K/D | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$10.56', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Arab 🇸🇦 | Latest ᴺᴱᵂ' },
  
  // Instagram Services | Brazil 🇧🇷 | Best Working | 26/11/25 ᴺᴱᵂ
  { id: '5064', description: '🇧🇷 Instagram Male Likes | Brazil | 10K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$2.48', quantity: '10/10,000', ...parseDeliveryTime('47 minutes'), category: 'Instagram Services | Brazil 🇧🇷 | Best Working | 26/11/25 ᴺᴱᵂ' },
  { id: '5065', description: '🇧🇷 Instagram Female Likes | Brazil | 10K/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$2.48', quantity: '10/10,000', ...parseDeliveryTime('8 hours 28 minutes'), category: 'Instagram Services | Brazil 🇧🇷 | Best Working | 26/11/25 ᴺᴱᵂ' },
  { id: '5066', description: '🇧🇷 Instagram Male Followers | Brazil | 10K/D | LD | R30 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$21.28', quantity: '10/10,000', ...parseDeliveryTime('41 hours 33 minutes'), category: 'Instagram Services | Brazil 🇧🇷 | Best Working | 26/11/25 ᴺᴱᵂ' },
  { id: '5067', description: '🇧🇷 Instagram Female Followers | Brazil | 10K/D | LD | R30 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$21.28', quantity: '10/10,000', ...parseDeliveryTime(''), category: 'Instagram Services | Brazil 🇧🇷 | Best Working | 26/11/25 ᴺᴱᵂ' },
  
  // Instagram Followers | Cheapest | Best Price | 28 DEC 2025
  { id: '4381', description: 'Instagram Followers | Mix | 20K/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$2.96', quantity: '100/30,000', ...parseDeliveryTime('2 hours 52 minutes'), category: 'Instagram Followers | Cheapest | Best Price | 28 DEC 2025' },
  
  // Instagram Followers | Old Accounts | High Speed | 15/11/25 ᴺᴱᵂ
  { id: '3800', description: 'Instagram Followers | Old | Instant | 30K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.96', quantity: '100/300,000', ...parseDeliveryTime('7 hours 33 minutes'), category: 'Instagram Followers | Old Accounts | High Speed | 15/11/25 ᴺᴱᵂ' },
  { id: '3801', description: 'Instagram Followers | Old | Instant | 50K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$7.36', quantity: '100/500,000', ...parseDeliveryTime('7 hours 7 minutes'), category: 'Instagram Followers | Old Accounts | High Speed | 15/11/25 ᴺᴱᵂ' },
  
  // Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ
  { id: '3809', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | NR 📉 LD = Low Drop 👤 RQ = Real Quality ⚠️ NR = No Refill', price: '$7.92', quantity: '10/1,000,000', ...parseDeliveryTime('2 hours 12 minutes'), category: 'Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ' },
  { id: '3810', description: 'Instagram Followers | HQ | Instant | 50K/D | LD | R30 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$9.92', quantity: '10/1,000,000', ...parseDeliveryTime('9 minutes'), category: 'Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ' },
  { id: '3811', description: 'Instagram Followers | HQ | Instant | 50K/D | LD | R60 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R60 = 60 Days Refill', price: '$10.88', quantity: '10/1,000,000', ...parseDeliveryTime('28 hours 26 minutes'), category: 'Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ' },
  { id: '3812', description: 'Instagram Followers | HQ | Instant | 50K/D | LD | R90 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R90 = 90 Days Refill', price: '$11.84', quantity: '10/1,000,000', ...parseDeliveryTime('81 hours 33 minutes'), category: 'Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ' },
  { id: '3813', description: 'Instagram Followers | HQ | Instant | 50K/D | LD | R365 📉 LD = Low Drop ✅ HQ = High Quality ♻️ R365 = 365 Days Refill', price: '$12.88', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ' },
  { id: '3814', description: 'Instagram Followers | HQ | Instant | 50K/D | LD | Rꝏ 📉 LD = Low Drop ✅ HQ = High Quality ♻️ Rꝏ = Lifetime Refill', price: '$13.84', quantity: '10/1,000,000', ...parseDeliveryTime('6 minutes'), category: 'Instagram Followers | Old Accounts | Cheapest | Base #4 | 15/11/25 ᴺᴱᵂ' },
  
  // Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ
  { id: '3762', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | NR 📉 LD = Low Drop 👤 RQ = Real Quality ⚠️ NR = No Refill', price: '$5.44', quantity: '10/1,000,000', ...parseDeliveryTime('2 hours 11 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ' },
  { id: '3763', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | R30 📉 LD = Low Drop 👤 RQ = Real Quality ♻️ R30 = 30 Days Refill', price: '$7.12', quantity: '100/1,000,000', ...parseDeliveryTime('3 hours 24 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ' },
  { id: '3764', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | R60 📉 LD = Low Drop 👤 RQ = Real Quality ♻️ R60 = 60 Days Refill', price: '$7.52', quantity: '100/1,000,000', ...parseDeliveryTime('7 hours 23 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ' },
  { id: '3765', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | R90 📉 LD = Low Drop 👤 RQ = Real Quality ♻️ R90 = 90 Days Refill', price: '$7.84', quantity: '100/1,000,000', ...parseDeliveryTime('10 hours 30 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ' },
  { id: '3766', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | R365 📉 LD = Low Drop 👤 RQ = Real Quality ♻️ R365 = 365 Days Refill', price: '$8.40', quantity: '100/1,000,000', ...parseDeliveryTime('41 hours 9 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ' },
  { id: '3767', description: 'Instagram Followers | RQ | Instant | 50K/D | LD | Rꝏ 📉 LD = Low Drop 👤 RQ = Real Quality ♻️ Rꝏ = Lifetime Refill', price: '$8.80', quantity: '100/1,000,000', ...parseDeliveryTime('5 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | 04.11.25 ᴺᴱᵂ' },
  
  // Instagram Followers | Word Cheapest | 25/10/25 ᴺᴱᵂ
  { id: '3750', description: 'Instagram Followers | HQ | 0-3 H | 10K/D | LD | NR 📉 LD = Low Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$6.88', quantity: '100/1,000,000', ...parseDeliveryTime('3 hours 51 minutes'), category: 'Instagram Followers | Word Cheapest | 25/10/25 ᴺᴱᵂ' },
  
  // Instagram Followers | Cheapest | Always Working
  { id: '3692', description: 'Instagram Followers | RQ | 0-2 H | 100K/D | NR 👤 RQ = Real Quality ⚠️ NR = No Refill', price: '$5.76', quantity: '100/500,000', ...parseDeliveryTime('5 hours 17 minutes'), category: 'Instagram Followers | Cheapest | Always Working' },
  { id: '3691', description: 'Instagram Followers | Real Users | Instant | 50K/D | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.08', quantity: '10/70,000', ...parseDeliveryTime('3 hours 12 minutes'), category: 'Instagram Followers | Cheapest | Always Working' },
  
  // Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ
  { id: '3561', description: 'Instagram Followers | Old Accounts | 10k/Day | NR ⚠️ NR = No Refill', price: '$6.40', quantity: '100/200,000', ...parseDeliveryTime('8 minutes'), category: 'Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ' },
  { id: '3562', description: 'Instagram Followers | Old Accounts | 10k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$8.72', quantity: '100/200,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ' },
  { id: '3563', description: 'Instagram Followers | Old Accounts | 10k/Day | R60 ♻️ R60 = 60 Days Refill', price: '$9.60', quantity: '100/200,000', ...parseDeliveryTime('48 minutes'), category: 'Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ' },
  { id: '3564', description: 'Instagram Followers | Old Accounts | 10k/Day | R90 ♻️ R90 = 90 Days Refill', price: '$10.96', quantity: '100/200,000', ...parseDeliveryTime('2 hours 13 minutes'), category: 'Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ' },
  { id: '3565', description: 'Instagram Followers | Old Accounts | 10k/Day | R365 ♻️ R365 = 365 Days Refill', price: '$12.80', quantity: '100/200,000', ...parseDeliveryTime('35 minutes'), category: 'Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ' },
  { id: '3566', description: 'Instagram Followers | Old Accounts | 10k/Day | Rꝏ ♻️ Rꝏ = Lifetime Refill', price: '$14.16', quantity: '100/200,000', ...parseDeliveryTime('1 hour 10 minutes'), category: 'Instagram Followers | Old Accounts With +15 Posts | ᴺᴱᵂ' },
  
  // Instagram Followers | Cheapest | Best Working | Base #5 | 29/10/25 ᴺᴱᵂ
  { id: '4380', description: 'Instagram Followers | Bot Mix | 20K/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$2.80', quantity: '100/20,000', ...parseDeliveryTime('11 hours 17 minutes'), category: 'Instagram Followers | Cheapest | Best Working | Base #5 | 29/10/25 ᴺᴱᵂ' },
  { id: '4383', description: 'Instagram Followers | RQ | Instant | 50K/D | CB | R30 👤 RQ = Real Quality ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$6.32', quantity: '10/70,000', ...parseDeliveryTime('4 minutes'), category: 'Instagram Followers | Cheapest | Best Working | Base #5 | 29/10/25 ᴺᴱᵂ' },
  { id: '4382', description: 'Instagram Followers | Real Mix | Instant | 20K/D | LD | CB | NR 📉 LD = Low Drop ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.40', quantity: '50/1,000,000', ...parseDeliveryTime('14 minutes'), category: 'Instagram Followers | Cheapest | Best Working | Base #5 | 29/10/25 ᴺᴱᵂ' },
  
  // Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ
  { id: '4384', description: 'Instagram Followers | Old Accounts | 50K/D | LD | NR 📉 LD = Low Drop ⚠️ NR = No Refill', price: '$4.16', quantity: '50/100,000', ...parseDeliveryTime('56 minutes'), category: 'Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ' },
  { id: '4385', description: 'Instagram Followers | Old Accounts | 50K/D | LD | R30 📉 LD = Low Drop ♻️ R30 = 30 Days Refill', price: '$6.40', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ' },
  { id: '4386', description: 'Instagram Followers | Old Accounts | 50K/D | LD | R60 📉 LD = Low Drop ♻️ R60 = 60 Days Refill', price: '$7.36', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ' },
  { id: '4387', description: 'Instagram Followers | Old Accounts | 50K/D | LD | R90 📉 LD = Low Drop ♻️ R90 = 90 Days Refill', price: '$8.24', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ' },
  { id: '4388', description: 'Instagram Followers | Old Accounts | 50K/D | LD | R365 📉 LD = Low Drop ♻️ R365 = 365 Days Refill', price: '$9.12', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ' },
  { id: '4389', description: 'Instagram Followers | Old Accounts | 50K/D | LD | Rꝏ 📉 LD = Low Drop ♻️ Rꝏ = Lifetime Refill', price: '$10.08', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Old Accounts | Best Working | Base #2 | 11/10/25 ᴺᴱᵂ' },
  
  // Instagram Followers | High Speed | Base 1 | 10/09/25 ᴺᴱᵂ
  { id: '4504', description: 'Instagram Followers | HQ Accounts | 100k/Day | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.76', quantity: '10/10,000,000', ...parseDeliveryTime('26 minutes'), category: 'Instagram Followers | High Speed | Base 1 | 10/09/25 ᴺᴱᵂ' },
  { id: '4505', description: 'Instagram Followers | HQ Accounts | 100k/Day | CB | R30 ✅ HQ = High Quality ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$11.44', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Speed | Base 1 | 10/09/25 ᴺᴱᵂ' },
  { id: '4506', description: 'Instagram Followers | HQ Accounts | 100k/Day | CB | R365 ✅ HQ = High Quality ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$27.36', quantity: '10/5,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Speed | Base 1 | 10/09/25 ᴺᴱᵂ' },
  
  // Instagram Followers | High Speed | Base 2 | 10/09/25 ᴺᴱᵂ
  { id: '4507', description: 'Instagram Followers | HQ Accounts | 500k/Day | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$13.76', quantity: '1/5,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Speed | Base 2 | 10/09/25 ᴺᴱᵂ' },
  
  // Instagram Followers | Refill
  { id: '4655', description: 'Instagram Followers | Indian + Turkish Mix | 50k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$16.48', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Refill' },
  
  // Instagram Followers | 365 Days Refill
  { id: '4659', description: 'Instagram Followers | 2k-5k/Day | R365 ♻️ R365 = 365 Days Refill', price: '$10.72', quantity: '100/1,000,000', ...parseDeliveryTime('58 minutes'), category: 'Instagram Followers | 365 Days Refill' },
  { id: '4657', description: 'Instagram Followers | Real | NQ | 10k-50k/Day | R365 ♻️ R365 = 365 Days Refill', price: '$16.48', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | 365 Days Refill' },
  { id: '4658', description: 'Instagram Followers | Real | NQ | 50k-100k/Day | R365 ♻️ R365 = 365 Days Refill', price: '$17.84', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | 365 Days Refill' },
  { id: '4656', description: 'Instagram Followers | Indian Mix | 2k-10k/Day | R365 ♻️ R365 = 365 Days Refill', price: '$42.88', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Followers | 365 Days Refill' },
  
  // Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐
  { id: '4509', description: 'Instagram Followers | Real India Mix | App Data | 10k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.16', quantity: '21/10,000', ...parseDeliveryTime('9 minutes'), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4510', description: 'Instagram Followers | Real India Mix | App Data | 20k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$6.32', quantity: '20/100,000', ...parseDeliveryTime('9 minutes'), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4511', description: 'Instagram Followers | Real India Mix | App Data | 30k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$7.36', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4513', description: 'Instagram Followers | Real India Mix | App Data | 100k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$10.08', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4512', description: 'Instagram Followers | Real India Mix | App Data | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$11.92', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4514', description: 'Instagram Followers | Real India Mix | App Data | 50k/Day | CB | R15 ⛔ CB = Cancel Button ♻️ R15 = 15 Days Refill', price: '$15.52', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4515', description: 'Instagram Followers | Real India Mix | App Data | 50k/Day | CB | R30 ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$16.00', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  { id: '4516', description: 'Instagram Followers | Real India Mix | App Data | 50k/Day | CB | R365 ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$26.48', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Indian Mix | Drop : %7-15 | Recommend ⭐' },
  
  // Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐
  { id: '4517', description: 'Instagram Followers | Real Accounts | Mobile Data | 5k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$10.08', quantity: '10/5,000', ...parseDeliveryTime('26 minutes'), category: 'Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐' },
  { id: '4518', description: 'Instagram Followers | Real Accounts | Mobile Data | 50k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$10.96', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐' },
  { id: '4519', description: 'Instagram Followers | Real Accounts | Mobile Data | 100k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$12.80', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐' },
  { id: '4520', description: 'Instagram Followers | Real Accounts | Mobile Data | 100k/Day | CB | R15 ⛔ CB = Cancel Button ♻️ R15 = 15 Days Refill', price: '$14.64', quantity: '10/5,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐' },
  { id: '4521', description: 'Instagram Followers | Real Accounts | Mobile Data | 100k/Day | CB | R30 ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$16.48', quantity: '20/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐' },
  { id: '4522', description: 'Instagram Followers | Real Accounts | Mobile Data | 100k/Day | CB | R365 ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$26.32', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | Good Quality | Drop : %5-10 | Recommend ⭐' },
  
  // Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐
  { id: '4523', description: 'Instagram Followers | Indian Mix | App Data | 5k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$10.56', quantity: '10/5,000', ...parseDeliveryTime('6 minutes'), category: 'Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐' },
  { id: '4524', description: 'Instagram Followers | Indian Mix | App Data | 100k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$11.44', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐' },
  { id: '4525', description: 'Instagram Followers | Indian Mix | App Data | 200k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$13.68', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐' },
  { id: '4526', description: 'Instagram Followers | Indian Mix | App Data | 200k/Day | CB | R30 ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$18.24', quantity: '20/500,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐' },
  { id: '4527', description: 'Instagram Followers | Indian Mix | App Data | 200k/Day | CB | R60 ⛔ CB = Cancel Button ♻️ R60 = 60 Days Refill', price: '$25.60', quantity: '20/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐' },
  { id: '4528', description: 'Instagram Followers | Indian Mix | App Data | 200k/Day | CB | R365 ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$27.36', quantity: '10/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Followers | High Quality | Drop : %3-10 | Recommended ⭐' },
  
  // Instagram Followers | VIP Emergency | Drop : %0-5 | Recommended ⭐
  { id: '4529', description: 'Instagram Followers | Real Accounts (With %100 PP + 20% Story) | 5k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$22.56', quantity: '10/5,000', ...parseDeliveryTime(''), category: 'Instagram Followers | VIP Emergency | Drop : %0-5 | Recommended ⭐' },
  { id: '4530', description: 'Instagram Followers | Real Accounts (With %100 PP + 20% Story) | 100k/Day | CB | NR ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$24.40', quantity: '10/100,000', ...parseDeliveryTime(''), category: 'Instagram Followers | VIP Emergency | Drop : %0-5 | Recommended ⭐' },
  { id: '4531', description: 'Instagram Followers | Real Accounts (With %100 PP + 20% Story) | 100k/Day | CB | R365 ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$33.44', quantity: '10/5,000,000', ...parseDeliveryTime('3 minutes'), category: 'Instagram Followers | VIP Emergency | Drop : %0-5 | Recommended ⭐' },
  
  // Instagram Likes | Best Quality | Base #3 | 02/11/25 ᴺᴱᵂ
  { id: '4363', description: 'Instagram Likes | HQ | Instant | 1K/H | ND | NR 🔥 ND = Non Drop ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$1.92', quantity: '100/1,000', ...parseDeliveryTime('8 minutes'), category: 'Instagram Likes | Best Quality | Base #3 | 02/11/25 ᴺᴱᵂ' },
  { id: '4364', description: 'Instagram Likes | HQ | Instant | 1K/H | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$2.08', quantity: '100/1,000', ...parseDeliveryTime('1 hour 20 minutes'), category: 'Instagram Likes | Best Quality | Base #3 | 02/11/25 ᴺᴱᵂ' },
  
  // Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ
  { id: '4365', description: 'Instagram Likes | LQ | Instant | 20K/D | CB | NR ⚠️ LQ = Low Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$2.32', quantity: '10/500,000', ...parseDeliveryTime('16 minutes'), category: 'Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ' },
  { id: '4366', description: 'Instagram Likes | LQ | Instant | 20K/D | CB | R30 ⚠️ LQ = Low Quality ⛔ CB = Cancel Button ♻️ R30 = 30 Days Refill', price: '$2.40', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ' },
  { id: '4367', description: 'Instagram Likes | LQ | Instant | 20K/D | CB | R60 ⚠️ LQ = Low Quality ⛔ CB = Cancel Button ♻️ R60 = 60 Days Refill', price: '$2.40', quantity: '10/500,000', ...parseDeliveryTime('15 minutes'), category: 'Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ' },
  { id: '4368', description: 'Instagram Likes | LQ | Instant | 20K/D | CB | R90 ⚠️ LQ = Low Quality ⛔ CB = Cancel Button ♻️ R90 = 90 Days Refill', price: '$2.48', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ' },
  { id: '4369', description: 'Instagram Likes | LQ | Instant | 20K/D | CB | R365 ⚠️ LQ = Low Quality ⛔ CB = Cancel Button ♻️ R365 = 365 Days Refill', price: '$2.48', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ' },
  { id: '4370', description: 'Instagram Likes | LQ | Instant | 20K/D | CB | Rꝏ ⚠️ LQ = Low Quality ⛔ CB = Cancel Button ♻️ Rꝏ = Lifetime Refill', price: '$2.56', quantity: '10/500,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Cheapest | Base #2 | 16/10/25 ᴺᴱᵂ' },
  
  // Instagram Likes | Emergency | 10/09/25 ᴺᴱᵂ
  { id: '4494', description: 'Instagram Likes | Real HQ | 20k/Day | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$3.68', quantity: '10/100,000', ...parseDeliveryTime('22 minutes'), category: 'Instagram Likes | Emergency | 10/09/25 ᴺᴱᵂ' },
  { id: '4495', description: 'Instagram Likes | Real HQ | 30k/Day | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$4.64', quantity: '50/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Emergency | 10/09/25 ᴺᴱᵂ' },
  { id: '4496', description: 'Instagram Likes | Real HQ | 50k/Day | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$13.20', quantity: '10/150,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Emergency | 10/09/25 ᴺᴱᵂ' },
  { id: '4497', description: 'Instagram Likes | Real HQ | 100k/Day | CB | NR ✅ HQ = High Quality ⛔ CB = Cancel Button ⚠️ NR = No Refill', price: '$14.08', quantity: '10/100,000', ...parseDeliveryTime('4 minutes'), category: 'Instagram Likes | Emergency | 10/09/25 ᴺᴱᵂ' },
  
  // Instagram Likes | No Refill
  { id: '4688', description: 'Instagram Likes | Mix | Instant | 100k/Day | NR ⚠️ NR = No Refill', price: '$2.32', quantity: '10/500,000', ...parseDeliveryTime('2 hours 19 minutes'), category: 'Instagram Likes | No Refill' },
  
  // Instagram Likes | Targeted
  { id: '4690', description: 'Instagram Likes + Impressions | Russian | 10k-20k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$1.60', quantity: '10/20,000', ...parseDeliveryTime('11 minutes'), category: 'Instagram Likes | Targeted' },
  { id: '4691', description: 'Instagram Likes | Asian | 5k-10K | NR ⚠️ NR = No Refill', price: '$3.04', quantity: '20/100,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Targeted' },
  { id: '4689', description: 'Instagram Likes | Iranian | 2k-5K/Day | NR ⚠️ NR = No Refill', price: '$3.12', quantity: '50/5,000', ...parseDeliveryTime(''), category: 'Instagram Likes | Targeted' },
  { id: '4692', description: 'Instagram Likes | Latin | 2k-5k/Day | R30 ♻️ R30 = 30 Days Refill', price: '$10.00', quantity: '20/50,000', ...parseDeliveryTime('52 hours 28 minutes'), category: 'Instagram Likes | Targeted' },
  
  // Instagram Views | Update
  { id: '4643', description: 'Instagram Views | Video+ Reel + IGTV | 20k/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/50,000,000', ...parseDeliveryTime('10 hours 43 minutes'), category: 'Instagram Views | Update' },
  { id: '4644', description: 'Instagram Views | Video+ Reel + IGTV | 50k/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/50,000,000', ...parseDeliveryTime(''), category: 'Instagram Views | Update' },
  { id: '4645', description: 'Instagram Views | Video+ Reel + IGTV | 10k/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/50,000,000', ...parseDeliveryTime('9 minutes'), category: 'Instagram Views | Update' },
  { id: '4646', description: 'Instagram Views | All Link | Instant | 1M/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/217,545,811', ...parseDeliveryTime('2 hours 15 minutes'), category: 'Instagram Views | Update' },
  { id: '4647', description: 'Instagram Views | Post | TV | Reels | 200k/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/217,545,811', ...parseDeliveryTime('13 minutes'), category: 'Instagram Views | Update' },
  { id: '4648', description: 'Instagram Views | All Links | Instant | 1M/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '10/2,147,483,647', ...parseDeliveryTime(''), category: 'Instagram Views | Update' },
  { id: '4649', description: 'Instagram Views | All Link | Instant | 500k/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/217,545,811', ...parseDeliveryTime('8 minutes'), category: 'Instagram Views | Update' },
  { id: '4650', description: 'Instagram Post Views + Reach | HQ | 50k/Day | NR ✅ HQ = High Quality ⚠️ NR = No Refill', price: '$0.08', quantity: '100/217,545,811', ...parseDeliveryTime('39 minutes'), category: 'Instagram Views | Update' },
  
  // Instagram Views | Post | Tv | Reels
  { id: '4651', description: '🇮🇳 Instagram Followers | Indian Mix | Real Quality | 5K/Day | No Refill ⚡⚠️⛔', price: '$0.08', quantity: '100/50,000,000', ...parseDeliveryTime('33 hours 34 minutes'), category: 'Instagram Views | Post | Tv | Reels' },
  { id: '4652', description: 'Instagram Views | Post | TV | Reels | 1M/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/2,147,483,647', ...parseDeliveryTime('58 minutes'), category: 'Instagram Views | Post | Tv | Reels' },
  { id: '4653', description: 'Instagram Video Views | 300k/Day | NR ⚠️ NR = No Refill', price: '$0.08', quantity: '100/2,147,483,647', ...parseDeliveryTime('9 minutes'), category: 'Instagram Views | Post | Tv | Reels' },
  { id: '4654', description: 'Instagram Views | All Link | 20k/Day | NR ⚠️ NR = No Refill', price: '$2.40', quantity: '100/1,000,000', ...parseDeliveryTime(''), category: 'Instagram Views | Post | Tv | Reels' },
  
  // Instagram Comments
  { id: '4727', description: 'Instagram Comments | Custom | Instant | 100-500/Day | NR ⚠️ NR = No Refill', price: '$22.64', quantity: '20/10,000', ...parseDeliveryTime('43 minutes'), category: 'Instagram Comments' },
  { id: '4726', description: 'Instagram Comments | Custom | Instant | 2k-5k/Day | NR ⚠️ NR = No Refill', price: '$27.36', quantity: '10/5,000', ...parseDeliveryTime('58 minutes'), category: 'Instagram Comments' },
  { id: '4730', description: 'Instagram Comments | Random | Instant | 1k-3k/Day | NR ⚠️ NR = No Refill', price: '$34.24', quantity: '10/10,000', ...parseDeliveryTime(''), category: 'Instagram Comments' },
  { id: '4728', description: 'Instagram Comments | Csutom | Instant | 1k-3k/Day | NR ⚠️ NR = No Refill', price: '$36.72', quantity: '10/10,000', ...parseDeliveryTime('15 hours 37 minutes'), category: 'Instagram Comments' },
  { id: '4729', description: 'Instagram Comments | Random | Instant | 100-500/Day | NR ⚠️ NR = No Refill', price: '$52.48', quantity: '5/10,000', ...parseDeliveryTime(''), category: 'Instagram Comments' },
  
  // Instagram Comments Likes
  { id: '4731', description: 'Instagram Comments Likes | 1k-3k/Day | NR ⚠️ NR = No Refill', price: '$5.52', quantity: '50/10,000', ...parseDeliveryTime('176 hours 40 minutes'), category: 'Instagram Comments Likes' },

  ];

  // Real Spotify Services Data (prices multiplied by 8x)
  const realSpotifyServices: Service[] = [
    // Spotify Playlist Plays
    { id: '5046', description: 'Spotify Playlist Plays | Mobile Safe | 5k-50k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$5.12', quantity: '1,000/500,000', ...parseDeliveryTime('13 hours 19 minutes'), category: 'Spotify Playlist Plays' },
    
    // Spotify Plays/Save/Listeners
    { id: '5047', description: 'Spotify Plays | Premium+Free | 2k-10k/Day | ND | Rꝏ 🔥 ND = Non Drop ♻️ Rꝏ = Lifetime Refill', price: '$1.28', quantity: '500/30,000,000', ...parseDeliveryTime('15 hours 13 minutes'), category: 'Spotify Plays/Save/Listeners' },
    { id: '5250', description: 'Spotify Monthly Listeners | WW | 3k/Day | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$23.04', quantity: '1,000/50,000', ...parseDeliveryTime(''), category: 'Spotify Plays/Save/Listeners' },
  ];

  // Real LinkedIn Services Data (prices multiplied by 8x)
  const realLinkedInServices: Service[] = [
    // Linkedin Services | ᴺᴱᵂ
    { id: '5084', description: 'Linkedin Likes | HQ | Instant | 1K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$94.72', quantity: '5/1,000', ...parseDeliveryTime(''), category: 'Linkedin Services | ᴺᴱᵂ' },
    { id: '5085', description: 'Linkedin Reposts | HQ | Instant | 1K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$118.40', quantity: '10/20,000', ...parseDeliveryTime(''), category: 'Linkedin Services | ᴺᴱᵂ' },
    { id: '5086', description: 'Linkedin Profile Followers | HQ | Instant | 1K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$124.72', quantity: '100/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services | ᴺᴱᵂ' },
    { id: '5087', description: 'Linkedin Company Followers | HQ | Instant | 1K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$124.72', quantity: '100/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services | ᴺᴱᵂ' },
    { id: '5088', description: 'Linkedin Comments | Random | HQ | Instant | 200/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$188.80', quantity: '10/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services | ᴺᴱᵂ' },
    { id: '5089', description: 'Linkedin Connections | HQ | Instant | 1K/D | ND | R30 🔥 ND = Non Drop ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$201.20', quantity: '10/500', ...parseDeliveryTime(''), category: 'Linkedin Services | ᴺᴱᵂ' },
    
    // Linkedin Services ᴺᴱᵂ
    { id: '4558', description: 'Linkedin Reposts | Premium | 500/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$81.52', quantity: '10/20,000', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    { id: '4552', description: 'Linkedin Post Likes | Organic - Premium | 500/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$85.60', quantity: '5/1,000', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    { id: '4554', description: 'Linkedin Profile Followers | Premium | 2k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$132.40', quantity: '100/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    { id: '4555', description: 'Linkedin Company Followers | Premium | 2k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$132.40', quantity: '100/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    { id: '4553', description: 'Linkedin Connection | Premium | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$152.72', quantity: '10/500', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    { id: '4556', description: 'Linkedin | Comments | RANDOM | Premium | 500/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$152.72', quantity: '10/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    { id: '4557', description: 'Linkedin Comments | CUSTOM | Premium | 500/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$173.12', quantity: '10/10,000', ...parseDeliveryTime(''), category: 'Linkedin Services ᴺᴱᵂ' },
    
    // LinkedIn Services | German 🇩🇪 ᴺᴱᵂ
    { id: '4559', description: '🇩🇪 LinkedIn Post Likes | German | 50/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$382.64', quantity: '5/50', ...parseDeliveryTime(''), category: 'LinkedIn Services | German 🇩🇪 ᴺᴱᵂ' },
    { id: '4560', description: '🇩🇪 LinkedIn Followers | German | 50/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$476.40', quantity: '5/50', ...parseDeliveryTime(''), category: 'LinkedIn Services | German 🇩🇪 ᴺᴱᵂ' },
    { id: '4561', description: '🇩🇪 LinkedIn Company Page Followers | German | 50/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$476.40', quantity: '5/50', ...parseDeliveryTime(''), category: 'LinkedIn Services | German 🇩🇪 ᴺᴱᵂ' },
    { id: '4562', description: '🇩🇪 LinkedIn Comments | German | 50/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$1,434.56', quantity: '1/50', ...parseDeliveryTime(''), category: 'LinkedIn Services | German 🇩🇪 ᴺᴱᵂ' },
    { id: '4563', description: '🇩🇪 LinkedIn Recommendations | German | 50/D | ND | R365 🔥 ND = Non Drop ♻️ R365 = 365 Days Refill', price: '$3,787.12', quantity: '1/50', ...parseDeliveryTime(''), category: 'LinkedIn Services | German 🇩🇪 ᴺᴱᵂ' },
    
    // LinkedIn Services | Nigerian 🇳🇬 ᴺᴱᵂ
    { id: '4564', description: '🇳🇬 LinkedIn Post Likes | Nigerian | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$259.92', quantity: '50/2,000', ...parseDeliveryTime('204 hours 3 minutes'), category: 'LinkedIn Services | Nigerian 🇳🇬 ᴺᴱᵂ' },
    { id: '4568', description: '🇳🇬 LinkedIn Reposts | Nigerian | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$311.92', quantity: '50/2,000', ...parseDeliveryTime(''), category: 'LinkedIn Services | Nigerian 🇳🇬 ᴺᴱᵂ' },
    { id: '4567', description: '🇳🇬 LinkedIn Comments | Nigerian | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$363.92', quantity: '25/2,000', ...parseDeliveryTime(''), category: 'LinkedIn Services | Nigerian 🇳🇬 ᴺᴱᵂ' },
    { id: '4566', description: '🇳🇬 LinkedIn Followers | Nigerian | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$415.92', quantity: '100/2,000', ...parseDeliveryTime(''), category: 'LinkedIn Services | Nigerian 🇳🇬 ᴺᴱᵂ' },
    { id: '4565', description: '🇳🇬 LinkedIn Connections | Nigerian | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$519.84', quantity: '50/2,000', ...parseDeliveryTime(''), category: 'LinkedIn Services | Nigerian 🇳🇬 ᴺᴱᵂ' },
    
    // Linkedin Followers | Real Users | Premium Quality ᴺᴱᵂ
    { id: '5246', description: 'LinkedIn Profile Followers | Real Users | Instant | 5K/D | ND | R60 🔥 ND = Non Drop ♻️ R60 = 60 Days Refill', price: '$172.96', quantity: '10/5,000', ...parseDeliveryTime(''), category: 'Linkedin Followers | Real Users | Premium Quality ᴺᴱᵂ' },
    { id: '5247', description: 'LinkedIn Company Followers | Real Users | Instant | 5K/D | ND | R60 🔥 ND = Non Drop ♻️ R60 = 60 Days Refill', price: '$172.96', quantity: '10/5,000', ...parseDeliveryTime('3 hours 10 minutes'), category: 'Linkedin Followers | Real Users | Premium Quality ᴺᴱᵂ' },
  ];

  // Real SoundCloud Services Data (prices multiplied by 8x)
  const realSoundCloudServices: Service[] = [
    // SoundCloud Services ᴺᴱᵂ
    { id: '4543', description: 'SoundCloud Plays | 500/D | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$3.52', quantity: '500/100,000,000', ...parseDeliveryTime('169 hours 11 minutes'), category: 'SoundCloud Services ᴺᴱᵂ' },
    { id: '4544', description: 'SoundCloud Plays | Real | 2k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$53.84', quantity: '50/10,000', ...parseDeliveryTime(''), category: 'SoundCloud Services ᴺᴱᵂ' },
    { id: '4545', description: 'SoundCloud Likes | Real | 2k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$53.84', quantity: '50/10,000', ...parseDeliveryTime(''), category: 'SoundCloud Services ᴺᴱᵂ' },
    { id: '4546', description: 'SoundCloud Followers | Real | 2k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$53.84', quantity: '50/10,000', ...parseDeliveryTime('4 hours 49 minutes'), category: 'SoundCloud Services ᴺᴱᵂ' },
    { id: '4547', description: 'SoundCloud Reposts | Real | 2k/D | ND | R30 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$53.84', quantity: '50/10,000', ...parseDeliveryTime(''), category: 'SoundCloud Services ᴺᴱᵂ' },
  ];

  // Real Discord Services Data (prices multiplied by 8x)
  const realDiscordServices: Service[] = [
    // Discord Services ᴺᴱᵂ
    { id: '4548', description: 'Discord Members | Offline | BOT | Instant | 2k/Day | ND | R30 [Read Description] 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$31.52', quantity: '20/1,500', ...parseDeliveryTime(''), category: 'Discord Services ᴺᴱᵂ' },
    { id: '4549', description: 'Discord Members | Offline | BOT | Instant | 3k/Day | ND | R30 [Read Description] 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$37.76', quantity: '50/30,000', ...parseDeliveryTime(''), category: 'Discord Services ᴺᴱᵂ' },
    { id: '4550', description: 'Discord Add Reaction | BOT | Instant | 2k/Day | ND | R30 [Read Description] 🔥 ND = Non Drop ♻️ R30 = 30 Days Refill', price: '$38.88', quantity: '50/10,000', ...parseDeliveryTime(''), category: 'Discord Services ᴺᴱᵂ' },
    { id: '4551', description: 'Discord Members | Real People | No Bot Required | Instant | 3k/Day | ND | NR 🔥 ND = Non Drop ⚠️ NR = No Refill', price: '$141.60', quantity: '100/20,000', ...parseDeliveryTime(''), category: 'Discord Services ᴺᴱᵂ' },
    
    // Discord Server Members [READ DESCRIPTION] | 25/11/25 ᴺᴱᵂ
    { id: '5068', description: 'Discord Server Members | HQ | Offline | 100/D | R30 [READ DESCRIPTION] ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$7.84', quantity: '50/500', ...parseDeliveryTime('4 minutes'), category: 'Discord Server Members [READ DESCRIPTION] | 25/11/25 ᴺᴱᵂ' },
    { id: '5069', description: 'Discord Server Members | HQ | 24/7 Online | 2K/D | R30 [READ DESCRIPTION] ✅ HQ = High Quality ♻️ R30 = 30 Days Refill', price: '$9.52', quantity: '50/900', ...parseDeliveryTime(''), category: 'Discord Server Members [READ DESCRIPTION] | 25/11/25 ᴺᴱᵂ' },
  ];

  // Generate services for each platform
  const generateServices = (platform: string): Service[] => {
    // If TikTok, return real services
    if (platform === 'TikTok') {
      return realTikTokServices;
    }
    
    // If Facebook, return real services
    if (platform === 'Facebook') {
      return realFacebookServices;
    }
    
    // If YouTube, return real services
    if (platform === 'YouTube') {
      return realYouTubeServices;
    }
    
    // If Instagram, return real services
    if (platform === 'Instagram') {
      return realInstagramServices;
    }
    
    // If Spotify, return real services
    if (platform === 'Spotify') {
      return realSpotifyServices;
    }
    
    // If LinkedIn, return real services
    if (platform === 'LinkedIn') {
      return realLinkedInServices;
    }
    
    // If SoundCloud, return real services
    if (platform === 'SoundCloud') {
      return realSoundCloudServices;
    }
    
    // If Discord, return real services
    if (platform === 'Discord') {
      return realDiscordServices;
    }
    // For other platforms, generate dummy services (keeping existing logic)
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
              const IconComponent = platform.icon;
              return (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform.name)}
                  className={`
                    flex flex-col items-center justify-center gap-2 px-4 py-4 md:py-5 rounded-xl font-semibold text-sm md:text-base
                    transition-all duration-300 hover:scale-105 hover:shadow-xl
                    ${isActive
                      ? 'bg-secondary text-background shadow-lg shadow-secondary/50 border-2 border-secondary'
                      : 'bg-primary/80 text-foreground hover:bg-primary border-2 border-transparent hover:border-secondary/30'
                    }
                  `}
                >
                  <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${isActive ? 'text-background' : platform.color} transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                  <span className="hidden sm:inline text-xs md:text-sm font-medium">{platform.name}</span>
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
                <FaChevronDown className="w-4 h-4" />
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
                <FaChevronDown className="w-4 h-4" />
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
          <div className="space-y-10 max-w-[1400px] mx-auto">
            {Object.entries(groupedServices).map(([category, services]) => (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary px-8 py-5 rounded-2xl flex items-center gap-4 shadow-2xl shadow-secondary/40 border border-secondary/30 relative overflow-hidden">
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-background/20 backdrop-blur-sm p-2 rounded-lg">
                      <FaPlay className="w-6 h-6 md:w-7 md:h-7 text-background" />
                    </div>
                    <div className="bg-background/20 backdrop-blur-sm p-2 rounded-lg">
                      <FaGem className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-background drop-shadow-lg">
                      {selectedPlatform} {category}
                    </h2>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90 backdrop-blur-md rounded-2xl p-6 md:p-7 border border-white/10 hover:border-secondary/60 shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 group relative overflow-hidden"
                    >
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:via-secondary/10 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10">
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="bg-gradient-to-r from-secondary to-secondary/80 px-4 py-2 rounded-xl text-background font-bold text-sm md:text-base shadow-lg shadow-secondary/40 group-hover:shadow-secondary/60 transition-all duration-300 group-hover:scale-105 flex items-center gap-2">
                            <FaHashtag className="w-4 h-4" />
                            {service.id}
                          </div>
                          <div className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-foreground shadow-lg transition-all duration-300 group-hover:scale-105 ${
                            service.isInstant 
                              ? 'bg-gradient-to-r from-green-500/30 to-green-600/30 text-green-300 border-2 border-green-400/50 shadow-green-500/20' 
                              : 'bg-gradient-to-r from-blue-500/30 to-blue-600/30 text-blue-300 border-2 border-blue-400/50 shadow-blue-500/20'
                          }`}>
                            {service.isInstant ? (
                              <span className="flex items-center gap-1.5">
                                <FaClock className="w-3.5 h-3.5" />
                                INSTANT
                              </span>
                            ) : (
                              <span className="flex items-center gap-1.5">
                                <FaClock className="w-3.5 h-3.5" />
                                {service.deliveryTime}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Service Description */}
                        <div className="mb-5 min-h-[72px]">
                          <h3 className="text-sm md:text-base text-foreground/85 leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors duration-300 font-medium">
                            {service.description}
                          </h3>
                        </div>

                        {/* Service Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {/* Rate per 1000 */}
                          <div className="bg-gradient-to-br from-primary/60 to-primary/40 rounded-xl p-4 border border-white/10 hover:border-secondary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300"></div>
                            <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="bg-secondary/20 p-1.5 rounded-lg">
                                  <FaDollarSign className="w-3.5 h-3.5 text-secondary" />
                                </div>
                                <span className="text-xs text-foreground/60 font-semibold uppercase tracking-wide">Rate per 1000</span>
                              </div>
                              <p className="text-xl md:text-2xl font-extrabold text-secondary drop-shadow-lg">
                                {service.price}
                              </p>
                            </div>
                          </div>

                          {/* Min / Max order */}
                          <div className="bg-gradient-to-br from-primary/60 to-primary/40 rounded-xl p-4 border border-white/10 hover:border-secondary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300"></div>
                            <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="bg-secondary/20 p-1.5 rounded-lg">
                                  <FaArrowsAlt className="w-3.5 h-3.5 text-secondary" />
                                </div>
                                <span className="text-xs text-foreground/60 font-semibold uppercase tracking-wide">Min / Max</span>
                              </div>
                              <p className="text-base md:text-lg font-bold text-secondary drop-shadow-lg">
                                {service.quantity}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-foreground rounded-xl font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 group/btn">
                            <FaInfoCircle className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-300" />
                            <span>Details</span>
                          </button>
                          <button className="flex-1 px-4 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-background rounded-xl font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/40 flex items-center justify-center gap-2 group/btn">
                            <FaLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            <span>Buy Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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
