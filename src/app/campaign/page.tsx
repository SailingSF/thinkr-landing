"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "./AnimatedBackground";
import HeroSection from "./HeroSection";
import SuccessMessage from "./SuccessMessage";

export default function Campaign() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSuccess = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setSuccess(true);
  };
  
  const handleClose = () => {
    setSuccess(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
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