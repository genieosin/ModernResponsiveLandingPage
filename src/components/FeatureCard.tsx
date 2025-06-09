import React from 'react';
import * as Icons from 'lucide-react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-blue-100">
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {feature.description}
        </p>
        
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;