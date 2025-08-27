import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { MissionSection } from '@/components/ui/mission-section';
import { FundraisingHighlight } from '@/components/ui/fundraising-highlight';
import { Footer } from '@/components/ui/footer';
import { ProgramsSection } from '@/components/ui/programs-section';
import { ContactMapSection } from '@/components/ui/contact-map-section';
import { TrainersSection } from '@/components/ui/trainers-section';
import { GallerySection } from '@/components/ui/gallery-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <TrainersSection />
      <FundraisingHighlight />
      <GallerySection />
      <ContactMapSection />
      <Footer />
    </div>
  );
};

export default Index;
