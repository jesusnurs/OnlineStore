import { Component } from '@angular/core';
import { Categories } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = Categories;

  enableCategory(name: string) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === name) {
        this.categories[i].active = true;
      } else this.categories[i].active = false;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
