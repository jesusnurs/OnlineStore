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
  albums: Album[];
  users: User[];

  constructor(private http: HttpClient) {
    this.users = [];
    this.albums = [];

    const albumsService = new AlbumsService(this.http);
    albumsService.GetData().subscribe((res) => {
      this.albums = res;
    });
  }
  ngOnInit(): void {
    var prevId = 0;
    console.log(this.albums.length);
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].userId == prevId) {
        this.users[prevId].albums.push(this.albums[i]);
      } else {
        prevId = this.albums[i].userId;
        this.users.push({ id: prevId, albums: [this.albums[i]] } as User);
      }
    }
  }
}
