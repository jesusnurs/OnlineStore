import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlbumsComponent } from '../albums/albums.component';
import { Album, User } from '../album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService implements OnInit {
  albums: Album[];
  users: User[];

  constructor(private http: HttpClient) {
    this.albums = [];
    this.users = [];
  }

  ngOnInit(): void {
    let prevId = 0;
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].userId == prevId) {
        this.users[prevId - 1].albums.push(this.albums[i]);
      } else {
        prevId = Number(this.albums[i].userId);
        this.users.push({
          id: prevId,
          albums: [this.albums[i]],
          active: false,
          link: prevId,
        } as User);
      }
    }
  }
  GetData() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(
      'https://jsonplaceholder.typicode.com/albums',
      album
    );
  }
  editAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(
      'https://jsonplaceholder.typicode.com/albums' + album.id,
      album
    );
  }
}
