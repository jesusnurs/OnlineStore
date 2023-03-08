import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AlbumsService } from './albums-service/albums.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    AboutComponent,
    AlbumDetailComponent,
    AlbumPhotoComponent,
    AlbumsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AlbumsService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
