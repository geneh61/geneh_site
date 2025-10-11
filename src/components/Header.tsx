"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = navLinks
        .filter(link => link.href.startsWith('/#'))
        .map(link => document.getElementById(link.href.substring(2)));
        
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="glass-card flex items-center justify-between px-6 py-3 rounded-full">
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.href.substring(2);
            
            if (!link.href.startsWith('/#')) {
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`relative text-sm font-medium transition-colors hover:text-white ${pathname === link.href ? 'text-white' : 'text-gray-400'}`}>
                    {link.name}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <a 
                  href={isHomePage ? link.href.substring(1) : link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-white ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[--color-accent-teal]"
                      layoutId="underline"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;