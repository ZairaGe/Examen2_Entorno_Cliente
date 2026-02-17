import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private http = inject(HttpClient);
  private url = 'https://peticiones.online/api/series';

  getAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  create(series: any): Observable<any> {
    return this.http.post<any>(this.url, series);
  }
}