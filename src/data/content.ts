import { Feature, Testimonial } from '../types';

export const features: Feature[] = [
  {
    id: '1',
    icon: 'Zap',
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times and seamless user experiences across all devices.'
  },
  {
    id: '2',
    icon: 'Shield',
    title: 'Secure by Design',
    description: 'Enterprise-grade security with end-to-end encryption and compliance with industry standards.'
  },
  {
    id: '3',
    icon: 'Users',
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools that keep your team aligned and productive from anywhere.'
  },
  {
    id: '4',
    icon: 'BarChart3',
    title: 'Advanced Analytics',
    description: 'Comprehensive insights and reporting to drive data-driven decisions and growth.'
  },
  {
    id: '5',
    icon: 'Smartphone',
    title: 'Mobile First',
    description: 'Native mobile experience with offline capabilities and cross-platform synchronization.'
  },
  {
    id: '6',
    icon: 'Clock',
    title: '24/7 Support',
    description: 'Round-the-clock customer support with dedicated success managers for enterprise clients.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    position: 'CTO',
    company: 'TechFlow Inc',
    content: 'This platform transformed our workflow completely. The performance gains are remarkable and our team productivity increased by 40%.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    position: 'Product Manager',
    company: 'Innovation Labs',
    content: 'The analytics dashboard provides insights we never had before. Making data-driven decisions has never been easier.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emily Watson',
    position: 'CEO',
    company: 'StartupCo',
    content: 'Outstanding support team and incredible features. This solution scaled perfectly with our rapid growth from 10 to 100+ employees.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];