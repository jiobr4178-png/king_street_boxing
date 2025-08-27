import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#about', label: 'About Us' },
    { href: '#programs', label: 'Programs' },
    { href: '#trainers', label: 'Trainers' },
    { href: '#events', label: 'Events' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  // Premium smooth scroll animation with easing and fixed-header offset
  const smoothScrollTo = useCallback((targetId: string) => {
    const target = document.querySelector(targetId) as HTMLElement | null;
    if (!target) return;

    const headerOffset = 16; // tighter gap under navbar per request
    const startY = window.scrollY || window.pageYOffset;
    const targetRect = target.getBoundingClientRect();
    const endY = startY + targetRect.top - headerOffset;
    const distance = Math.abs(endY - startY);
    const duration = Math.min(1200, Math.max(400, distance * 0.6));

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(progress);
      const currentY = startY + (endY - startY) * eased;
      window.scrollTo(0, currentY);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  // Intercept clicks on internal anchors for animated scrolling
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      smoothScrollTo(href);
    }
  }, [smoothScrollTo]);

  // Scroll spy: highlight active nav item while scrolling
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setIsScrolled(y > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy for active link
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href).filter((h) => h.startsWith('#'));
    const sections = sectionIds
      .map((id) => document.querySelector(id) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const headerOffset = 16; // align spy with 16px offset
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = `#${(visible[0].target as HTMLElement).id}`;
          setActiveId(id);
        }
      },
      { root: null, rootMargin: `-${headerOffset}px 0px -60% 0px`, threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all",
      isScrolled
        ? "bg-background/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-border/60 shadow-sm"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img src="/favicon.ico" alt="King Street Boxing" className="h-6 w-6" />
              <span className={cn(
                "text-2xl font-bold transition-colors",
                isScrolled ? "text-primary" : "text-primary-foreground"
              )}>King Street Boxing</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 rounded-full bg-background/60 border border-border/60 p-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                    activeId === item.href
                      ? "bg-primary text-primary-foreground shadow-boxing"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://www.zeffy.com/en-US/donation-form/585fa366-e850-45a4-9902-052e1013cbd2?fbclid=PAZXh0bgNhZW0CMTEAAafJ_et_9jjijIw1Gy3VrNTgkSMlPCT35qb10a4vCjsFUkBUIBbKQTGLEw5vYg_aem__j6JDK_hy89tysLC5ioF1w" target="_blank" rel="noreferrer">
              <Button variant="champion" size="sm">
                Donate Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 rounded-md border border-transparent hover:border-border"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur border-b border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeId === item.href ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary'}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a href="https://www.zeffy.com/en-US/donation-form/585fa366-e850-45a4-9902-052e1013cbd2?fbclid=PAZXh0bgNhZW0CMTEAAafJ_et_9jjijIw1Gy3VrNTgkSMlPCT35qb10a4vCjsFUkBUIBbKQTGLEw5vYg_aem__j6JDK_hy89tysLC5ioF1w" target="_blank" rel="noreferrer">
                <Button variant="champion" size="sm" className="w-full">
                  Donate Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};