import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {}

export interface Product {
  id: number;
  name: string;
  description: string;
  url: string;
  img: string;
  rating: string;
  likes: number;
}
