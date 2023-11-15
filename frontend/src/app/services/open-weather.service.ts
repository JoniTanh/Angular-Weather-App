import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  getWeather(city: string, countryCode?: string): Observable<any> {
    const url = countryCode
      ? `${this.baseUrl}/openweather/${city}/${countryCode}`
      : `${this.baseUrl}/openweather/${city}`;
    return this.http.get(url);
  }
}
