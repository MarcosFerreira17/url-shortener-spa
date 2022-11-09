import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Url } from '../models/url';

@Injectable({
  providedIn: 'root'
})
export class UrlshortenerService {

  baseURL = environment.apiURL + 'url/';

  constructor(private http: HttpClient) { }

  public getUrlByHash(hash: string): Observable<Url> {
    return this.http
      .get<Url>(`${this.baseURL}/${hash}`)
      .pipe(take(1));
  }

  public post(url: Url): Observable<Url> {
    return this.http
      .post<Url>(this.baseURL, url)
      .pipe(take(1));
  }
}
