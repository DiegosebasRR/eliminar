import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://www.fakesoteapi.somee.com/api/Users?results=8&seed=423&page=1&pageSize=8'; // Reemplaza esta URL con la URL de tu API

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
