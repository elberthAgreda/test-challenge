import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ApiPlaceholderService } from '../api-placeholder.service';

@Component({
  selector: 'technical-test-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnChanges {
  @Input() id: any;
  @Output() showDetail = new EventEmitter();
  photo: any[] = [];
  query = '';

  constructor(private readonly apiPlaceholder: ApiPlaceholderService) {}

  ngOnChanges(): void {
    this.getInfo();
  }

  onBack() {
    this.showDetail.emit(false);
  }

  searchItem() {
    this.photo = this.photo.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(this.query.toLowerCase())
    )
  }

  getInfo() {
    this.apiPlaceholder.getPhotos(this.id).subscribe(
      photo => this.photo = photo as any[]
    );
  }

}
