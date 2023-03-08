import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsService } from '../albums-service/albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  data: any;
  users: Album[];

  constructor(private http: HttpClient) {
    this.users = [];
    const albumsService = new AlbumsService(http);
    albumsService.GetData().subscribe((res) => {
      this.data = res;
    });
  }
  ngOnInit(): void {
    // while (true) {}
  }
}
