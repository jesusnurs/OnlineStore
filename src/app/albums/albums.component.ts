import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsService } from '../albums-service/albums.service';
import { Album, User } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: any;
  users: User[];

  constructor(private http: HttpClient) {
    this.users = [];
    const albumsService = new AlbumsService(http);
    albumsService.GetData().subscribe((res) => {
      this.albums = res;
    });
  }
  ngOnInit(): void {
    var i = -1;
    this.albums.forEach((album: Album) => {
      if (album.userId == i) {
        this.users[i].albums.push(album);
      } else {
        i++;
        this.users.push({ id: i, albums: [album] } as User);
      }
    });
  }
}
