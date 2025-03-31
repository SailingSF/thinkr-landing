import React from 'react';
import WaitlistForm from './WaitlistForm';
import PartnerLogos from './PartnerLogos';

interface HeroSectionProps {
  onJoinWaitlist: (email: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="pt-10 pb-20 px-4 max-w-4xl mx-auto flex flex-col items-center">
      <div className="w-full animate-fade-in" style={{ animationDelay: '100ms' }}>
        <PartnerLogos />
      </div>

      <div className="text-center space-y-6 my-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance animate-fade-in" style={{ animationDelay: '200ms' }}>
          Sign up for the best Shopify AI
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground tracking-tight text-balance animate-fade-in" style={{ animationDelay: '250ms' }}>
          Be the first to unlock AI-Powered Revenue
        </p>
      </div>

      <WaitlistForm onSuccess={onJoinWaitlist} />
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance text-center mt-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
        Join our exclusive waitlist to be among the first to experience AI for Shopify Automations.
      </p>
    </section>
  );
};

export default HeroSection;
