import { Product } from './product-item/product-item.component';

import {
  MainMenu,
  PhoneProducts,
  FoodProducts,
  TVProducts,
  HAProducts,
} from './products';

export interface Category {
  id: number;
  name: string;
  active: boolean;
  products: Product[];
}

export const Categories: Category[] = [
  {
    id: 1,
    name: '',
    active: true,
    products: MainMenu,
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
    products: HAProducts,
  },
  {
    id: 4,
    name: 'Televisions',
    active: false,
    products: TVProducts,
  },
  {
    id: 5,
    name: 'Food',
    active: false,
    products: FoodProducts,
  },
];
