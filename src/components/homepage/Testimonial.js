"use client"

import React, { useState } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrevious = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-gray-700 font-semibold mb-8">Testimonials</h2>
        <div className="relative bg-white rounded-lg shadow-lg p-8">
          <blockquote className="text-lg text-gray-700 mb-4">{testimonials[activeTestimonial].text}</blockquote>
          <cite className="text-blue-500 text-lg font-semibold">{testimonials[activeTestimonial].name}</cite>
          <div className="absolute left-0 top-0 mt-4 ml-4 cursor-pointer" onClick={handlePrevious}>
            <i className="fas fa-chevron-left text-gray-400 text-2xl"></i>
          </div>
          <div className="absolute right-0 top-0 mt-4 mr-4 cursor-pointer" onClick={handleNext}>
            <i className="fas fa-chevron-right text-gray-400 text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
