import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Album, User } from '../album';
import { AlbumsService } from '../albums-service/albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  user: User;
  userId: any;
  albums: Album[];

  albumN: Album = {} as Album;
  addAlbumValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {
    this.user = {} as User;
    this.albums = [];
  }

  ngOnInit(): void {
    this.albumN = {} as Album;
    this.route.paramMap.subscribe((param) => {
      this.userId = param.get('id');
      this.user = {} as User;
      this.user.id = this.userId;

      this.albumsService
        .getAlbums()
        .subscribe((result: Album[]) => (this.albums = result));

      for (let i = 0; i < this.albums.length; i++) {
        if (this.albums[i].userId == this.userId) {
          this.user.albums.push(this.albums[i]);
        }
      }
    });
  }
  DeleteAlbum(album: Album) {
    let clone = [] as Album[];
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].id != album.id) {
        clone.push(this.albums[i]);
      }
    }
    this.albums = clone;
  }
  addAlbumToUser() {
    this.albumN.title = this.addAlbumValue;
    this.albumsService.addAlbum(this.albumN).subscribe((res) => {
      this.ngOnInit();
    });
  }
}
