import { Product, PhoneProducts, FoodProducts } from './products';

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
  {
    id: 3,
    name: 'Household appliances',
    active: false,
    products: undefined,
  },
  {
    id: 4,
    name: 'Televisions',
    active: false,
    products: undefined,
  },
  {
    id: 5,
    name: 'Food',
    active: false,
    products: FoodProducts,
  },
];
