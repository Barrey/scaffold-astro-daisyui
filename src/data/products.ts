import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Scented Candle',
    price: 29.99,
    description: 'Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem amet, euismod aliquam, lacus laoreet dui facilisi morbi ullamcorper turpis nisi aconsequat cursus volutpat facilisi eget.',
    images: [
      '/images/product1.jpg',
      '/images/product2.jpg',
      '/images/product3.jpg',
    ],
    rating: 4.5,
    reviews: 12,
    specs: {
      weight: '140 - 440 gramms',
      material: 'Concrete bowl',
      duration: '60 hours of comfort and combustion',
      composition: '100% soy wax, cotton wick',
      country: 'France',
    },
    variants: [
      { color: '#F5F5DC' },
      { color: '#DEB887' },
      { color: '#A52A2A' },
    ],
    stock: 10,
    sku: 'SC-001',
    category: 'Home Decor',
  },
  {
    id: '2',
    name: 'Loft Style Lamp',
    price: 49.99,
    description: 'Modern loft style lamp with adjustable arm and warm lighting.',
    images: [
      '/images/lamp1.jpg',
      '/images/lamp2.jpg',
      '/images/lamp3.jpg',
    ],
    rating: 4.0,
    reviews: 8,
    specs: {
      weight: '2.5 kg',
      material: 'Metal and wood',
      duration: 'LED lifetime: 50,000 hours',
      composition: 'Steel frame, wooden base',
      country: 'Italy',
    },
    variants: [
      { color: '#000000' },
      { color: '#FFFFFF' },
    ],
    stock: 15,
    sku: 'LL-002',
    category: 'Lighting',
  },
];
