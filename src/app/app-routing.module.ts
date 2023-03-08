import { NgModule} from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import {CreateComponent} from './CreateComponent/create.component';
import {EditComponent} from './EditComponent/edit.component';
import {ListComponent} from './ListComponent/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ListComponent},
      {path: 'create', component: CreateComponent},
      {path: 'edit:id', component: EditComponent},
      {path: 'delete', component: EditComponent},
      {path: 'search', component: EditComponent},
      {path: 'home', component: ListComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}