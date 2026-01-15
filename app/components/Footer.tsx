import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSnapchat } from 'react-icons/fa';

export default function Footer() {
  const usefulLinks = [
    { name: 'Sign in', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Sign up', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  const services = [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Youtube', href: '#' },
    { name: 'Snapchat', href: '#' },
  ];

  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: FaFacebook,
      href: '#' 
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter,
      href: '#' 
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram,
      href: '#' 
    },
    { 
      name: 'Youtube', 
      icon: FaYoutube,
      href: '#' 
    },
    { 
      name: 'Snapchat', 
      icon: FaSnapchat,
      href: '#' 
    },
  ];

  return (
    <footer className="w-full bg-background py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Company Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-foreground font-bold text-lg md:text-xl">O</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-foreground font-bold text-xl md:text-2xl">PAK</span>
                <span className="text-foreground/80 font-medium text-lg md:text-xl">Panel</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
              All user information is kept 100% private and will NOT be shared with anyone. Always remember, you are protected with PAK Panel - Most trusted
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-secondary">Useful Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-foreground hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-secondary">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm md:text-base text-foreground hover:text-secondary transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us here */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-secondary">Follow us here</h3>
            <ul className="space-y-3 md:space-y-4">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <li key={index}>
                    <a
                      href={social.href}
                      className="flex items-center gap-3 text-sm md:text-base text-foreground hover:text-secondary transition-colors duration-200"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-background" />
                      </div>
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Row - Copyright and Legal Links */}
        <div className="border-t border-foreground/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base text-foreground/80">
              © Copyright PAK Panel.Com All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm md:text-base text-secondary hover:text-secondary/80 transition-colors duration-200"
              >
                Terms & conditions
              </a>
              <span className="text-foreground/40">|</span>
              <a
                href="#"
                className="text-sm md:text-base text-secondary hover:text-secondary/80 transition-colors duration-200"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
