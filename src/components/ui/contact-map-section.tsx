import React, { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export const ContactMapSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const message = String(formData.get('message') || '').trim();

      if (!name || !email || !message) {
        toast({ title: 'Please complete all required fields.' });
        return;
      }

      // Placeholder submit behavior. Replace with API call if desired.
      await new Promise((r) => setTimeout(r, 500));
      (e.target as HTMLFormElement).reset();
      toast({ title: 'Message sent!', description: 'We will get back to you shortly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Have a question about training, schedules, or events? Send us a note or find us on the map.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="rounded-lg border bg-card p-6 shadow-sm h-full flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col min-h-[320px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2 flex-1 min-h-0">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" rows={8} className="resize-none" placeholder="How can we help?" required />
              </div>
              <div className="flex items-center justify-between gap-3 mt-auto">
                <div className="text-sm text-muted-foreground">We usually reply within 1–2 business days.</div>
                <Button type="submit" disabled={isSubmitting} className="min-w-36">
                  <Send className="mr-1.5" /> {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>

          {/* Map + directions */}
          <div className="rounded-lg border overflow-hidden bg-card shadow-sm h-full flex flex-col">
            <div className="w-full flex-1 min-h-[320px]">
              <iframe
                title="King Street Boxing - Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.9320335966217!2d-95.9061960253368!3d36.168208503071604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6ed86ebcfcc45%3A0x7cdca78b514b3861!2sKing%20Street%20Boxing!5e0!3m2!1sen!2sin!4v1756118109062!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center justify-between p-6 mt-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Find us on the map</span>
              </div>
              <a href="https://maps.app.goo.gl/uyVv2aW1wxbzeNAt7" target="_blank" rel="noreferrer">
                <Button variant="champion">Get Directions</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;


