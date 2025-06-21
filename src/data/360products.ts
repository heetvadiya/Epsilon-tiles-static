export interface Product360 {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  viewUrl: string;
  size: string;
  thickness: string;
  wearLayer: string;
  underpad: string;
  features: string[];
}

export const products360: Product360[] = [
  {
    id: 'lily-oak-beige',
    name: 'Lily Oak Beige',
    category: 'Wood Collection',
    description: 'Experience the warm, natural beauty of Lily Oak Beige with our immersive 360° view. This premium SPC flooring captures the authentic grain patterns and subtle color variations of natural oak.',
    image: 'https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    viewUrl: 'https://360.epsiloninc.in/34/lily-oak-beige',
    size: '1220 × 180 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ]
  },
  {
    id: 'rustic-walnut',
    name: 'Rustic Walnut',
    category: 'Wood Collection',
    description: 'Discover the rich, deep tones of Rustic Walnut in stunning 360° detail. This premium flooring option brings sophisticated elegance to any space.',
    image: 'https://images.pexels.com/photos/4992478/pexels-photo-4992478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    viewUrl: 'https://360.epsiloninc.in/34/rustic-walnut',
    size: '1220 × 180 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ]
  },
  {
    id: 'marble-classic',
    name: 'Marble Classic',
    category: 'Stone Collection',
    description: 'Explore the timeless elegance of Marble Classic with our interactive 360° viewer. See every detail of this luxurious stone-look flooring.',
    image: 'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    viewUrl: 'https://360.epsiloninc.in/34/marble-classic',
    size: '600 × 600 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ]
  },
  {
    id: 'concrete-modern',
    name: 'Concrete Modern',
    category: 'Modern Collection',
    description: 'Experience the contemporary appeal of Concrete Modern in full 360° view. Perfect for modern architectural spaces.',
    image: 'https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    viewUrl: 'https://360.epsiloninc.in/34/concrete-modern',
    size: '600 × 900 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ]
  }
];

export const categories360 = [
  'All',
  'Wood Collection',
  'Stone Collection',
  'Modern Collection'
];

export const getProduct360ById = (id: string): Product360 | undefined => {
  return products360.find(product => product.id === id);
};