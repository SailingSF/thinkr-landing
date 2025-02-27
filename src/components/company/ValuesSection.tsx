import React from 'react';

interface Value {
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title: string;
  subtitle?: string;
  values: Value[];
}

const ValuesSection = ({ title, subtitle, values }: ValuesSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection; 