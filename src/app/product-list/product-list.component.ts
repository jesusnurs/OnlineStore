import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  shareWhatsApp() {
    window.open('https://web.whatsapp.com://send?text=""');
  }
  shareTelegram() {
    window.open('https://telegram.me/share/url?url={url}&text={text}');
  }
  goToSite(s: string) {
    window.open(`${s}`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
