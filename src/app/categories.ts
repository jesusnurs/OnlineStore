import { Product, PhoneProducts } from './products';

export interface Category {
  id: number;
  name: string;
  active: boolean;
  products: Product[];
}

export const Categories = [
  {
    id: 1,
    name: '',
    active: true,
    products: undefined,
  },
  {
    id: 2,
    name: 'Phones',
    active: false,
    products: PhoneProducts,
  },
];
