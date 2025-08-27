import React from 'react';
import { Card, CardContent } from './card';
import { Heart, Trophy, Users, Target } from 'lucide-react';

export const MissionSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Community Impact",
      description: "Building stronger communities one young fighter at a time, creating lasting positive change in neighborhoods."
    },
    {
      icon: Trophy,
      title: "Championship Mindset",
      description: "Developing discipline, perseverance, and excellence that extends far beyond the boxing ring."
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Providing safe spaces and mentorship for underprivileged youth to grow, learn, and thrive."
    },
    {
      icon: Target,
      title: "Life Skills Training",
      description: "Teaching focus, respect, and goal-setting that prepares young people for success in all areas of life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            King Street Boxing Foundation transforms lives through the power of boxing, 
            providing underprivileged youth with discipline, confidence, and opportunity to succeed.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-hero-gradient text-primary-foreground shadow-boxing">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                "Every child deserves a fighting chance"
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed mb-6">
                Since 2004, we've been more than just a boxing gym. We're a sanctuary where young people 
                discover their strength, build unshakeable confidence, and learn that with dedication 
                and proper guidance, they can overcome any obstacle life puts in their path.
              </p>
              <div className="text-lg font-semibold">
                — King Street Boxing Foundation
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-boxing transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <value.icon size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};