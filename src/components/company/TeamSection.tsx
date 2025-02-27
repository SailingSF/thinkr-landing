import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

interface TeamSectionProps {
  title: string;
  subtitle?: string;
  teamMembers: TeamMember[];
}

const TeamSection = ({ title, teamMembers }: TeamSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto pt-8 pb-20 sm:pt-10 sm:pb-24 md:pt-12 md:pb-28 lg:pt-14 lg:pb-36 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="text-left max-w-5xl">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      </div>

      <div className="mt-18 sm:mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl pr-0 sm:pr-12 md:pr-24 lg:pr-32">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col"
          >
            <div className="relative w-full h-[400px] md:h-[450px] mb-6 rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {member.title}
              </p>
              <div className="flex gap-2 mb-4">
                {member.social?.twitter && (
                  <Link 
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                    </svg>
                  </Link>
                )}
                {member.social?.linkedin && (
                  <Link 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                    </svg>
                  </Link>
                )}
              </div>
              <p className="text-gray-600 mb-4">
                {member.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 max-w-5xl">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl mb-6">
          Careers
        </h2>
        <p className="text-[16px] sm:text-[20px] md:text-[25px] font-normal text-gray-600 mb-4">
          We're a team of builders and visionaries creating software that operates at the edge of what's useful and possible. Our work has already improved businesses and we are growing daily.
        </p>
        <p className="text-[16px] sm:text-[20px] md:text-[25px] font-normal text-gray-600 mb-8">
          If you want to join our journey, we'd love to hear from you.
        </p>
        <Link 
          href="/contact" 
          className="inline-block text-[16px] sm:text-[20px] md:text-[25px] font-medium text-black hover:text-gray-700 transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default TeamSection; 