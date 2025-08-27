import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, CalendarDays, UserRound } from 'lucide-react';

type Trainer = {
  id: string;
  name: string;
  role: string;
  badges: string[];
  ctaLabel: string;
};

const trainers: Trainer[] = [
  {
    id: 'eddie',
    name: 'Eduardo "Eddie" Castaneda',
    role: 'Founder & Head Coach',
    badges: ['USAPL Competitor', '120lbs Transformation'],
    ctaLabel: 'Book Session',
  },
  {
    id: 'join',
    name: 'Join Our Team',
    role: "We're always looking for passionate coaches to join our family",
    badges: ['Mentorship', 'Community Impact'],
    ctaLabel: 'Apply Now',
  },
  {
    id: 'coming',
    name: 'Coming Soon',
    role: 'More expert coaches joining soon',
    badges: ['Strength', 'Conditioning'],
    ctaLabel: 'Stay Updated',
  },
];

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Train</span> with the Best
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Our certified coaches bring years of experience and proven results to help you reach your potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trainers.map((t) => (
            <Card key={t.id} className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {t.id === 'eddie' ? <Award /> : t.id === 'join' ? <UserRound /> : <CalendarDays />}
                </div>
                <CardTitle className="text-xl">{t.name}</CardTitle>
                <div className="text-sm text-muted-foreground max-w-xs">{t.role}</div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap justify-center gap-2">
                  {t.badges.map((b, i) => (
                    <span key={i} className="inline-flex items-center rounded-full bg-accent/15 text-foreground px-2.5 py-1 text-xs">
                      {b}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">
                  {t.ctaLabel}
                </Button>
              </CardFooter>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-primary transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;


