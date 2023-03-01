import { Component } from '@angular/core';
import { Categories, Category } from '../categories';
import { Product } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  categories = Categories;

  shareWhatsApp(link: string) {
    window.open(`https://web.whatsapp.com://send?text=${link}`);
  }
  shareTelegram(link: string, text: string) {
    window.open(`https://telegram.me/share/url?url=${link}&text=${text}`);
  }
  goToSite(s: string) {
    window.open(`${s}`);
  }

  Like(product: Product) {
    product.likes++;
  }
  DeleteProduct(product: Product, category: Category) {
    let cloneCategory: Product[] = [];
    for (let i = 0; i < category.products.length; i++) {
      if (product.id !== category.products[i].id) {
        cloneCategory.push(category.products[i]);
      }
    }
    category.products = cloneCategory;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
