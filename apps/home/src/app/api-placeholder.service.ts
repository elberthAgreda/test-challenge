import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPlaceholderService {

  constructor(private readonly httpClient: HttpClient) { }

  getAlbums(): Observable<any[]> {
    const API = 'https://jsonplaceholder.typicode.com/albums';
    return this.httpClient.get(API) as Observable<any[]>;
  }

  getPhotos(albumId: string) {
    const API = 'https://jsonplaceholder.typicode.com/photos?albumId='+albumId;
    return this.httpClient.get(API);
  }

}
