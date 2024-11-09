import React from 'react';
import { Palette, Image, TrendingUp, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      title: 'AI-Powered Design',
      description: 'Create stunning designs with our advanced AI tools. No design experience needed.'
    },
    {
      icon: <Image className="w-6 h-6 text-indigo-600" />,
      title: 'Premium Products',
      description: 'High-quality materials and printing techniques for the perfect result.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: 'Trending Styles',
      description: 'Stay ahead with our curated collection of trending designs and styles.'
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: 'Fast Delivery',
      description: 'Quick production and shipping to get your custom products to you faster.'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PrintLab?</h2>
          <p className="text-lg text-gray-600">Experience the future of custom product creation</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;