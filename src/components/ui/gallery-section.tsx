import React from 'react';
import { cn } from '@/lib/utils';

import img1 from '@/assets/Capture.PNG';
import img2 from '@/assets/Capture2.PNG';
import img3 from '@/assets/Jesus.PNG';
import img4 from '@/assets/KingStreet.PNG';

const photos = [
  { src: img1, alt: 'Training moment 1' },
  { src: img2, alt: 'Training moment 2' },
  { src: img3, alt: 'Coach and athlete' },
  { src: img4, alt: 'King Street Boxing gym' },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:4xl font-display font-bold tracking-tight">Gallery</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Moments from training, community, and wins.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((p, idx) => (
            <figure key={idx} className={cn('group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm')}>
              <img src={p.src} alt={p.alt} className="h-40 sm:h-48 md:h-56 lg:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;



