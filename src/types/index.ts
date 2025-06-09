export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  consent?: string;
}