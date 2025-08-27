import React from 'react';
import { Button } from './button';
import heroImage from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-12 md:pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo removed per request */}
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Building Champions
            <span className="block text-accent">Beyond the Ring</span>
          </h1>
          
          {/* Mission Statement */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Empowering underprivileged youth through boxing, discipline, and community support. 
            Every punch builds character, every round builds confidence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <a href="https://www.zeffy.com/en-US/donation-form/585fa366-e850-45a4-9902-052e1013cbd2?fbclid=PAZXh0bgNhZW0CMTEAAafJ_et_9jjijIw1Gy3VrNTgkSMlPCT35qb10a4vCjsFUkBUIBbKQTGLEw5vYg_aem__j6JDK_hy89tysLC5ioF1w" target="_blank" rel="noreferrer">
              <Button variant="champion" size="lg" className="text-lg px-8 py-4">
                Donate Now
              </Button>
            </a>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Involved
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center animate-slide-in">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/90">Youth Trained</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">20</div>
              <div className="text-primary-foreground/90">Years Strong</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-primary-foreground/90">Champions Made</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};