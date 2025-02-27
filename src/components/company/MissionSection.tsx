import React from 'react';

interface MissionSectionProps {
  content: string;
}

const MissionSection = ({ content }: MissionSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mt-8 max-w-3xl mx-auto">
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          {content}
        </p>
      </div>
    </section>
  );
};

export default MissionSection; 