import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlbumsComponent } from '../albums/albums.component';
import { Album } from '../album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  GetData() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
}
