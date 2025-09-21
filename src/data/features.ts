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
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/2730_ACACIA_BROWN.jpg'
  },
  {
    title: 'Highly Durable',
    description: 'Engineered to maintain its beauty under heavy foot traffic with commercial-grade wear layer protection.',
    icon: ShieldCheck,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/5072_DARK_PADAUK.jpg'
  },
  {
    title: 'Scratch Resistant',
    description: 'Tough wear layer prevents scratches from furniture, pet claws, and daily activities.',
    icon: Eraser,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/1147_FANCY_OAK.jpg'
  },
  {
    title: 'Easy to Install',
    description: 'Innovative click-lock system allows for straightforward DIY installation without special tools.',
    icon: Hammer,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/6370_EUCALYPTUS.jpg'
  },
  {
    title: 'Anti-Slippery',
    description: 'Textured surface provides reliable traction even when wet, enhancing safety for all ages.',
    icon: FootprintsIcon,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/7017_PROTO_OAK.jpg'
  },
  {
    title: 'Fire Resistant',
    description: 'FLORA flooring meets strict fire safety regulations with inherent flame-retardant properties.',
    icon: Flame,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/1124_BOSTON_GREY.jpg'
  },
  {
    title: 'Sound Insulation',
    description: 'Built-in underlayment reduces impact noise and creates a quieter, more peaceful environment.',
    icon: Volume2,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/9452_PINE_CHARCOAL.jpg'
  },
  {
    title: 'Non-Volatile & Child-Safe',
    description: 'Zero VOCs and phthalate-free construction ensures healthy indoor air quality for your family.',
    icon: Baby,
    backgroundImage: 'https://360.epsiloninc.in/uploads/preview/3885_BLACKJACK_OAK.jpg'
  }
];