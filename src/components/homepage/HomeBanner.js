"use client"

import React from 'react';
import Image from 'next/image';
import homeBanner from '../../assets/signup.svg'

const HomePageBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-16">
      <div className="flex justify-center gap-72 items-center">
        <div className='w-64'>
            <Image src={homeBanner} alt='img' />
        </div>
        <div>
        <h1 className="text-4xl text-white font-semibold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-200">Discover amazing content and services.</p>
        <button className="bg-white text-blue-500 px-6 py-2 mt-6 rounded-full hover:bg-blue-400 hover:text-white">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
