import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  addWeather(cityName: string, weatherData: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/weather/add-weather/${cityName}`,
      weatherData
    );
  }
}
