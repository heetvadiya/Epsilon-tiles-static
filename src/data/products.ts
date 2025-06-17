export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  size: string;
  thickness: string;
  wearLayer: string;
  underpad: string;
  features: string[];
  viewUrl: string;
  related: string[];
}

export const products: Product[] = [
  {
    id: 'african-wenge',
    name: 'African Wenge',
    category: 'Wood Collection',
    description: 'Inspired by the rich, dark tones of African Wenge wood, this premium SPC flooring option brings timeless elegance to any space. Its deep, chocolate brown hue with subtle grain patterns creates a sophisticated foundation for both traditional and contemporary interiors.',
    image: 'https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '1220 × 180 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/african-wenge',
    related: ['french-oak', 'nordic-ash', 'american-walnut']
  },
  {
    id: 'french-oak',
    name: 'French Oak',
    category: 'Wood Collection',
    description: 'Our French Oak SPC flooring captures the authentic beauty of European oak with its warm honey tones and distinctive grain patterns. This versatile option complements a wide range of interior styles, from rustic farmhouse to modern minimalist.',
    image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '1220 × 180 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/french-oak',
    related: ['african-wenge', 'nordic-ash', 'american-walnut']
  },
  {
    id: 'nordic-ash',
    name: 'Nordic Ash',
    category: 'Wood Collection',
    description: 'Nordic Ash SPC flooring brings the light, airy essence of Scandinavian design to your space. Its pale, cool tones and subtle grain create a sense of openness and tranquility, perfect for modern, minimalist interiors seeking a clean, fresh aesthetic.',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '1220 × 180 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/nordic-ash',
    related: ['african-wenge', 'french-oak', 'american-walnut']
  },
  {
    id: 'american-walnut',
    name: 'American Walnut',
    category: 'Wood Collection',
    description: 'American Walnut SPC flooring showcases the rich, warm character of this prized hardwood. Its deep brown tones with purplish undertones and straight-to-wavy grain patterns create a sense of luxury and sophistication, ideal for upscale residential and commercial spaces.',
    image: 'https://images.pexels.com/photos/4992478/pexels-photo-4992478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/4992478/pexels-photo-4992478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4992478/pexels-photo-4992478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4992478/pexels-photo-4992478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '1220 × 180 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/american-walnut',
    related: ['african-wenge', 'french-oak', 'nordic-ash']
  },
  {
    id: 'italian-marble',
    name: 'Italian Marble',
    category: 'Stone Collection',
    description: 'Our Italian Marble SPC flooring replicates the timeless beauty of Carrara marble with remarkable accuracy. Its white background with subtle grey veining brings a touch of refined elegance to any interior, from classic to contemporary.',
    image: 'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '600 × 600 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/italian-marble',
    related: ['belgian-bluestone', 'spanish-travertine', 'nordic-ash']
  },
  {
    id: 'belgian-bluestone',
    name: 'Belgian Bluestone',
    category: 'Stone Collection',
    description: 'Belgian Bluestone SPC flooring captures the unique character of this distinctive natural stone. Its deep blue-gray color with subtle fossil-like inclusions creates a striking yet sophisticated backdrop for contemporary architectural spaces.',
    image: 'https://images.pexels.com/photos/5998520/pexels-photo-5998520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5998520/pexels-photo-5998520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5998521/pexels-photo-5998521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5998522/pexels-photo-5998522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '600 × 600 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/belgian-bluestone',
    related: ['italian-marble', 'spanish-travertine', 'nordic-ash']
  },
  {
    id: 'spanish-travertine',
    name: 'Spanish Travertine',
    category: 'Stone Collection',
    description: 'Spanish Travertine SPC flooring faithfully reproduces the warm, earthy tones and characteristic porous texture of this beloved Mediterranean stone. Its beige to honey-colored palette with subtle linear patterns adds natural warmth and visual interest to any living space.',
    image: 'https://images.pexels.com/photos/6510968/pexels-photo-6510968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6510968/pexels-photo-6510968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6510968/pexels-photo-6510968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6510968/pexels-photo-6510968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '600 × 600 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/spanish-travertine',
    related: ['italian-marble', 'belgian-bluestone', 'french-oak']
  },
  {
    id: 'nordic-concrete',
    name: 'Nordic Concrete',
    category: 'Modern Collection',
    description: 'Nordic Concrete SPC flooring offers the raw, industrial appeal of polished concrete in a comfortable, practical format. Its cool gray tones with subtle variations create a minimalist canvas that works beautifully in contemporary urban spaces.',
    image: 'https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5998530/pexels-photo-5998530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5998531/pexels-photo-5998531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5998532/pexels-photo-5998532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    size: '600 × 900 mm',
    thickness: '5.5 mm',
    wearLayer: '0.5 mm',
    underpad: '1.5 mm IXPE',
    features: [
      'Water Resistant',
      'Highly Durable',
      'Scratch Resistant',
      'Easy to Install'
    ],
    viewUrl: 'https://example.com/360/nordic-concrete',
    related: ['belgian-bluestone', 'french-oak', 'urban-slate']
  }
];

export const categories = [
  'All',
  'Wood Collection',
  'Stone Collection',
  'Modern Collection'
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return product.related
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};