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
  }

  ngOnInit(): void {
    const albumsService = new AlbumsService(this.http);
    albumsService.GetData().subscribe((res) => {
      this.albums = res;
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
          } as User);
        }
      }
    });
  }
}
