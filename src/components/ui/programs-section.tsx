import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dumbbell, Target, User, Flame } from 'lucide-react';

type Program = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
};

const programs: Program[] = [
  {
    id: 'fundamentals',
    icon: <Dumbbell className="h-6 w-6" />,
    title: 'Boxing Fundamentals',
    subtitle: 'Master the basics of boxing technique and fitness',
    bullets: [
      'Stance, footwork & guard training',
      'Punch mechanics (jab, cross, hook, uppercut)',
      'Basic defense: slips, blocks, parries',
      'Conditioning & agility drills',
    ],
  },
  {
    id: 'competitive',
    icon: <Target className="h-6 w-6" />,
    title: 'Competitive Boxing Training',
    subtitle: 'Advanced training for boxers preparing for competition',
    bullets: [
      'Sparring sessions with coaching feedback',
      'Fight strategy & ring awareness',
      'High-intensity conditioning',
      'Weight management for fight prep',
    ],
  },
  {
    id: 'personal',
    icon: <User className="h-6 w-6" />,
    title: '1-on-1 Personal Boxing Coaching',
    subtitle: 'Personalized boxing sessions tailored to your goals',
    bullets: [
      'Custom training plan (fitness or competition focus)',
      'Technical correction & pad work',
      'Strength & conditioning integration',
      'Flexible scheduling',
    ],
  },
  {
    id: 'fitness',
    icon: <Flame className="h-6 w-6" />,
    title: 'Boxing for Fitness & Conditioning',
    subtitle: 'A boxing-inspired workout for fat loss & endurance',
    bullets: [
      'Bag work & mitt drills',
      'High-intensity interval training (HIIT)',
      'Core strengthening for stability & power',
      'Stress relief & full-body conditioning',
    ],
  },
];

export const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Programs</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Training paths for every level—from first steps to fight night.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />)
          )}
        </div>
      </div>
    </section>
  );
};

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  return (
    <Card className={cn(
      'group relative h-full overflow-hidden border-border/60',
      'bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/80',
      'flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30'
    )}>
      <CardHeader>
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-boxing transition-all duration-300 group-hover:bg-primary/15 group-hover:shadow-lg">
          {program.icon}
        </div>
        <CardTitle className="text-xl">{program.title}</CardTitle>
        <CardDescription>{program.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {program.bullets.map((b, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-sm leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="default">Learn More</Button>
      </CardFooter>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-primary transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
    </Card>
  );
};

export default ProgramsSection;


