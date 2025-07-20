import React from 'react';
import HeroImageSrc from '../assets/HeroImage.jpg';

// HeroImage component displays a full-screen header image with a gradient overlay

const HeroImage = (props) => {
  return (
    <div className="relative w-screen h-[50vh] top-0 left-0">
      {/* Header Image */}
      <img
        src={HeroImageSrc}
        alt="Hero Image"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20" />

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4 z-10">
        <h1 className="text-white text-4xl md:text-3xl sm:text-2xl font-bold mb-10 md:mb-8 sm:mb-6 text-center">
          Welcome to G Automotive
        </h1>
        <p className="text-white text-lg max-w-5xl text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="mt-8 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
