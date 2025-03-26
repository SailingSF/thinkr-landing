"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import AnimatedBackground from "./AnimatedBackground";
import HeroSection from "./HeroSection";
import SuccessMessage from "./SuccessMessage";

// Add type declaration for dataLayer
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export default function Campaign() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  // Track campaign page view when component mounts
  useEffect(() => {
    // Send pageview with custom dimension
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: '/campaign',
          title: 'Waitlist Campaign',
          campaignID: 'waitlist-campaign'
        }
      });
    }
  }, []);

  const handleSuccess = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setSuccess(true);
    
    // Track successful waitlist submission
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'waitlist_signup',
        waitlistInfo: {
          path: '/campaign',
          email: submittedEmail
        }
      });
    }
  };
  
  const handleClose = () => {
    setSuccess(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow relative">
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-16 md:py-24">
          {!success ? (
            <>
              <HeroSection onJoinWaitlist={handleSuccess} />
            </>
          ) : (
            <SuccessMessage email={email} onClose={handleClose} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}