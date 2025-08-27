import React from 'react';
import { Card, CardContent } from './card';
import { Button } from './button';
import { Calendar, MapPin, Trophy, DollarSign, Heart } from 'lucide-react';
export const FundraisingHighlight = () => {
  return <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Help Our Champions <span className="text-secondary">Fight</span> for Glory
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Support our young fighters as they prepare for the National Silver Gloves 2025 Championship
            </p>
          </div>

          {/* Main Fundraising Card */}
          <Card className="bg-impact-gradient text-secondary-foreground shadow-impact mb-12">
            <CardContent className="p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Event Info */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Trophy className="text-accent" size={24} />
                    <span className="text-lg font-semibold">Featured Event</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                    National Silver Gloves 2025
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Calendar size={20} className="text-accent" />
                      <span className="text-lg">March 15-20, 2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin size={20} className="text-accent" />
                      <span className="text-lg">Independence, Missouri</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Trophy size={20} className="text-accent" />
                      <span className="text-lg">12 King Street fighters qualified</span>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our dedicated young athletes have earned their spots at nationals through 
                    months of rigorous training and local competitions. Now they need our support 
                    to make this life-changing opportunity a reality.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <a
                    href="https://www.zeffy.com/en-US/fundraising/national-silver-gloves--2025?fbclid=PAZXh0bgNhZW0CMTEAAadKN8IGQ0ZmK4hIIcbqKLmzYouUJr_yEAZZdVnjsilv_OiMJxHSzTU8dooHYg_aem_nYuwkJM7sSW5OUaDR0mq8w"
                    target="_blank"
                    rel="noreferrer"
                  >
                      <Button variant="champion" size="lg" className="text-lg px-8 py-4">
                        Support Our Fighters
                      </Button>
                    </a>
                    <a href="#events-list">
                      <Button variant="champion" size="lg" className="text-lg px-8 py-4">
                        More Events
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Fundraising Progress */}
                <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-secondary-foreground/20">
                  <div className="text-center mb-6">
                    <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">$20</div>
                    <div className="text-lg">raised of $1,200 goal</div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-secondary-foreground/20 rounded-full h-3 mb-6">
                    <div className="bg-accent h-3 rounded-full transition-all duration-1000 ease-out" style={{
                    width: '2%'
                  }}></div>
                  </div>
                  
                  {/* Funding Breakdown */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Travel & Accommodation</span>
                      <span className="font-semibold">$600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equipment & Gear</span>
                      <span className="font-semibold">$300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Training Camp</span>
                      <span className="font-semibold">$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Competition Fees</span>
                      <span className="font-semibold">$100</span>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 pt-4 border-t border-secondary-foreground/20">
                    <div className="text-lg font-semibold text-accent">
                      2% Complete
                    </div>
                    <div className="text-sm">Help us reach the finish line!</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Cards */}
          <div id="events-list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card hover:shadow-champion transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">$50 Donation</h4>
                <p className="text-muted-foreground text-sm">
                  Covers meals for one fighter during the 6-day tournament
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-champion transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Trophy className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">$150 Donation</h4>
                <p className="text-muted-foreground text-sm">
                  Sponsors complete gear set for one young champion
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-champion transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Heart className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">$500 Donation</h4>
                <p className="text-muted-foreground text-sm">
                  Full travel sponsorship for one fighter's nationals journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};