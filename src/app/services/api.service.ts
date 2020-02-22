import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum searchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  searchData(title: string, type: searchType): Observable<any> {
    return this.http.get(`${this.api}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search']));
  }

  getDetails(id) {
    return this.http.get(`${this.api}?i=${id}&plot=full&apikey=${this.apiKey}`)
  }


}
