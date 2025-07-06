import { 
  Droplets, 
  ShieldCheck, 
  Hammer, 
  Eraser, 
  FootprintsIcon, 
  Flame, 
  Volume2, 
  Stethoscope, 
  Baby 
} from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  backgroundImage?: string;
}

export const features: Feature[] = [
  {
    title: 'Water Resistant',
    description: 'FLORA SPC flooring withstands moisture and spills without warping, making it ideal for bathrooms and kitchens.',
    icon: Droplets,
    backgroundImage: 'https://images.pexels.com/photos/6585590/pexels-photo-6585590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Highly Durable',
    description: 'Engineered to maintain its beauty under heavy foot traffic with commercial-grade wear layer protection.',
    icon: ShieldCheck,
    backgroundImage: 'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Scratch Resistant',
    description: 'Tough wear layer prevents scratches from furniture, pet claws, and daily activities.',
    icon: Eraser,
    backgroundImage: 'https://images.pexels.com/photos/4992478/pexels-photo-4992478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Easy to Install',
    description: 'Innovative click-lock system allows for straightforward DIY installation without special tools.',
    icon: Hammer,
    backgroundImage: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Anti-Slippery',
    description: 'Textured surface provides reliable traction even when wet, enhancing safety for all ages.',
    icon: FootprintsIcon,
    backgroundImage: 'https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Fire Resistant',
    description: 'FLORA flooring meets strict fire safety regulations with inherent flame-retardant properties.',
    icon: Flame,
    backgroundImage: 'https://images.pexels.com/photos/7061066/pexels-photo-7061066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Sound Insulation',
    description: 'Built-in underlayment reduces impact noise and creates a quieter, more peaceful environment.',
    icon: Volume2,
    backgroundImage: 'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Non-Volatile & Child-Safe',
    description: 'Zero VOCs and phthalate-free construction ensures healthy indoor air quality for your family.',
    icon: Baby,
    backgroundImage: 'https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];