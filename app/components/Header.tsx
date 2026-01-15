import React from 'react';

export default function Header() {
  return (
    <header className="bg-primary w-full sticky top-0 z-[1000] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 md:gap-6 lg:gap-8 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center justify-center shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
              <circle cx="20" cy="20" r="18" stroke="#FF8C00" strokeWidth="2" fill="none"/>
              <path d="M 12 20 A 8 8 0 0 1 20 12" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="18" r="2" fill="#FFD700"/>
            </svg>
          </div>
          <div className="flex items-baseline gap-1 font-semibold text-lg md:text-xl leading-none">
            <span className="text-secondary font-bold">PAK</span>
            <span className="text-foreground font-medium">Panel</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2 flex-wrap justify-end lg:justify-end w-full lg:w-auto overflow-x-auto lg:overflow-visible scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
          {/* <a 
            href="#" 
            className="flex items-center gap-2 px-3 md:px-4 lg:px-5 py-2 md:py-2.5 text-foreground no-underline rounded-lg text-sm md:text-[0.9375rem] font-medium whitespace-nowrap bg-secondary hover:bg-[rgba(251,180,20,0.8)] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(251,180,20,0.3)] transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M 3 14 Q 3 10 8 10 Q 13 10 13 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M 10 6 L 11 5 M 11 5 L 12 4 M 11 5 L 12 6" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
            <span className="hidden md:inline">Sign in</span>
          </a> */}
          
          <a 
            href="/services" 
            className="flex items-center gap-2 px-2 md:px-3 lg:px-4 py-2 text-foreground no-underline rounded-lg text-xs md:text-sm lg:text-[0.9375rem] font-normal whitespace-nowrap hover:bg-white/10 transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="4" width="4" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="6" y="2" width="4" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="10" y="5" width="4" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span className="hidden md:inline">Services</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-2 md:px-3 lg:px-4 py-2 text-foreground no-underline rounded-lg text-xs md:text-sm lg:text-[0.9375rem] font-normal whitespace-nowrap hover:bg-white/10 transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M 6 6 L 10 6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M 6 8 L 10 8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M 6 10 L 8 10" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="hidden md:inline">Blog</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-2 md:px-3 lg:px-4 py-2 text-foreground no-underline rounded-lg text-xs md:text-sm lg:text-[0.9375rem] font-normal whitespace-nowrap hover:bg-white/10 transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M 3 3 L 6 6 M 6 6 L 3 9 M 6 6 L 13 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="13" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span className="hidden md:inline">Contact Us</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-2 md:px-3 lg:px-4 py-2 text-foreground no-underline rounded-lg text-xs md:text-sm lg:text-[0.9375rem] font-normal whitespace-nowrap hover:bg-white/10 transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M 8 5 L 8 8 L 10 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="hidden md:inline">FAQ</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-2 md:px-3 lg:px-4 py-2 text-foreground no-underline rounded-lg text-xs md:text-sm lg:text-[0.9375rem] font-normal whitespace-nowrap hover:bg-white/10 transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="4" width="5" height="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="9" y="7" width="5" height="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M 7 6.5 L 9 6.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M 7 8.5 L 9 8.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="hidden md:inline">API</span>
          </a>
          
          {/* <a 
            href="#" 
            className="flex items-center gap-2 px-2 md:px-3 lg:px-4 py-2 text-foreground no-underline rounded-lg text-xs md:text-sm lg:text-[0.9375rem] font-normal whitespace-nowrap hover:bg-white/10 transition-all duration-200"
          >
            <svg className="shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M 3 14 Q 3 10 8 10 Q 13 10 13 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="10" y="3" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span className="hidden md:inline">Sign up</span>
          </a> */}
        </nav>
      </div>
    </header>
  );
}
