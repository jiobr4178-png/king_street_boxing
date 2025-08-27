import React, { FormEvent } from 'react';
import { Button } from './button';
import { Input } from './input';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export const Footer = () => {
  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('newsletterEmail') || '').trim();
    if (!email) return;
    toast({ title: 'Subscribed!', description: 'Thanks for joining our newsletter.' });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="relative text-primary-foreground">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent to-primary" />
      <div className="bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Brand */}
            <div className="col-span-1">
              <div className="mb-5">
              <h3 className="text-2xl font-bold mb-2">King Street Boxing Foundation</h3>
                <p className="text-primary-foreground/90 leading-relaxed max-w-xl">
                  Empowering underprivileged youth through boxing, discipline, and community support. Building champions beyond the ring since 2004.
              </p>
            </div>
              <div className="flex items-center gap-3">
                <a href="https://www.zeffy.com/en-US/donation-form/585fa366-e850-45a4-9902-052e1013cbd2?fbclid=PAZXh0bgNhZW0CMTEAAafJ_et_9jjijIw1Gy3VrNTgkSMlPCT35qb10a4vCjsFUkBUIBbKQTGLEw5vYg_aem__j6JDK_hy89tysLC5ioF1w" target="_blank" rel="noreferrer">
                  <Button variant="champion" size="sm">Make a Donation</Button>
                </a>
                <a href="#contact">
                  <Button variant="hero" size="sm">Contact Us</Button>
                </a>
              </div>
          </div>

          {/* Contact Info */}
          <div>
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="h-0.5 w-10 bg-accent rounded-full mt-2 mb-4" />
              <div className="space-y-4">
                <div className="rounded-lg border border-primary-foreground/15 bg-background/10 p-4 text-sm space-y-3">
                  <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <div>6514 E King St, Tulsa, OK 74115</div>
                </div>
                  <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
                  <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@kingstreetboxing.org</span>
                  </div>
                </div>
                <div className="rounded-lg border border-primary-foreground/15 bg-background/10 p-4">
                  <div className="text-sm font-semibold mb-2">Hours</div>
                  <ul className="text-sm space-y-1 text-primary-foreground/90">
                    <li>Sunday – Closed</li>
                    <li>Monday – 04:30PM – 09:00PM</li>
                    <li>Tuesday – 04:30PM – 09:00PM</li>
                    <li>Wednesday – 04:30PM – 09:00PM</li>
                    <li>Thursday – 04:30PM – 09:00PM</li>
                    <li>Friday – 06:00PM – 09:00PM</li>
                    <li>Saturday – Closed</li>
                  </ul>
                </div>
            </div>
          </div>

            {/* Newsletter */}
          <div>
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <div className="h-0.5 w-10 bg-accent rounded-full mt-2 mb-4" />
              <p className="text-sm text-primary-foreground/80 mb-3">Get training tips and event updates in your inbox.</p>
              <form onSubmit={onSubscribe} className="flex items-center gap-2">
                <Input name="newsletterEmail" type="email" placeholder="you@example.com" className="bg-background/90 text-foreground" required />
                <Button type="submit" size="sm">
                  Subscribe <ArrowRight className="ml-1" />
                </Button>
              </form>
              <div className="flex mt-5 gap-3">
                <a href="https://www.facebook.com/share/16qUSvY2g8/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/kingstreetboxing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

          {/* Quick Links & Bottom */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/15">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="#about" className="hover:text-accent transition-colors">About Us</a>
                <a href="#programs" className="hover:text-accent transition-colors">Programs</a>
                <a href="#trainers" className="hover:text-accent transition-colors">Trainers</a>
                <a href="#events" className="hover:text-accent transition-colors">Events</a>
                <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>

              <div className="text-sm text-primary-foreground/80">© 2024 King Street Boxing Foundation. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};