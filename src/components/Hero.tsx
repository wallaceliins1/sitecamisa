import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Ideas Into Custom Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Create unique designs with our AI-powered tools and print them on premium products. Your imagination is the only limit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Palette className="mr-2" size={20} />
                Start Creating
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                <Sparkles className="mr-2" size={20} />
                View Gallery
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=80&w=800"
              alt="Custom t-shirt designs"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-gray-900">Already created</p>
              <p className="text-2xl font-bold text-indigo-600">10,000+</p>
              <p className="text-sm text-gray-600">unique designs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;