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

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {
    this.user = {} as User;
    this.albums = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.userId = param.get('id');
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
}
