"use client"

import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-laptop',
    },
    {
      title: 'Feature 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Feature 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      icon: 'fas fa-mobile-alt',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-gray-700 font-semibold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg bg-white shadow-lg">
              <i className={`${feature.icon} text-4xl text-blue-500 mb-4`}></i>
              <h3 className="text-xl text-gray-700 font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
