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
}

export const features: Feature[] = [
  {
    title: 'Water Resistant',
    description: 'FLORA SPC flooring withstands moisture and spills without warping, making it ideal for bathrooms and kitchens.',
    icon: Droplets
  },
  {
    title: 'Highly Durable',
    description: 'Engineered to maintain its beauty under heavy foot traffic with commercial-grade wear layer protection.',
    icon: ShieldCheck
  },
  {
    title: 'Scratch Resistant',
    description: 'Tough wear layer prevents scratches from furniture, pet claws, and daily activities.',
    icon: Eraser
  },
  {
    title: 'Easy to Install',
    description: 'Innovative click-lock system allows for straightforward DIY installation without special tools.',
    icon: Hammer
  },
  {
    title: 'Anti-Slippery',
    description: 'Textured surface provides reliable traction even when wet, enhancing safety for all ages.',
    icon: FootprintsIcon
  },
  {
    title: 'Fire Resistant',
    description: 'FLORA flooring meets strict fire safety regulations with inherent flame-retardant properties.',
    icon: Flame
  },
  {
    title: 'Sound Insulation',
    description: 'Built-in underlayment reduces impact noise and creates a quieter, more peaceful environment.',
    icon: Volume2
  },
  {
    title: 'Non-Volatile & Child-Safe',
    description: 'Zero VOCs and phthalate-free construction ensures healthy indoor air quality for your family.',
    icon: Baby
  }
];