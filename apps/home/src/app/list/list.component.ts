import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiPlaceholderService } from '../api-placeholder.service';

@Component({
  selector: 'technical-test-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ApiPlaceholderService]
})
export class ListComponent implements OnInit{

  albums: any;
  @Output() showDetail = new EventEmitter();

  constructor(private readonly apiPlaceholder: ApiPlaceholderService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.apiPlaceholder.getAlbums().subscribe(
      albums => this.albums = albums
    );
  }

  viewAlbum(id: string) {
    this.showDetail.emit({id});
  }

}
