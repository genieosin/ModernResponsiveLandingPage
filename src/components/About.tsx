import React from 'react';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: Award, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '40%', label: 'Productivity Gain' },
  ];

  const benefits = [
    'Enterprise-grade security and compliance',
    'Seamless integration with existing tools',
    'Advanced automation capabilities',
    'Real-time collaboration features'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">40%</div>
                  <div className="text-sm text-slate-600">Growth Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built for
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tomorrow's Leaders
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We've spent years perfecting our platform to deliver exceptional results for businesses of all sizes. 
                From startups to Fortune 500 companies, our solution adapts to your unique needs and scales with your growth.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;