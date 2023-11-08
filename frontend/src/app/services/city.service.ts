import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UpdateCityInfo {
  cityName: string;
  cityInfo?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cities`);
  }

  addCity(cityData: { cityName: string; cityInfo?: string }): Observable<any> {
    const payload = {
      ...cityData,
      cityInfo: cityData.cityInfo || '',
    };
    return this.http.post(`${this.baseUrl}/city/add-city`, payload);
  }

  deleteCity(cityId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/city/delete-city/${cityId}`);
  }

  updateCityInfo(cityData: { id: number; cityInfo: string }): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/city/update-city-info/${cityData.id}`,
      cityData
    );
  }
}
