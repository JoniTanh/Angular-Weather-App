import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherListComponent } from '../weather-list/weather-list.component';

@Component({
  selector: 'app-weather-management',
  templateUrl: './weather-management.component.html',
  styleUrls: ['./weather-management.component.css'],
})
export class WeatherManagementComponent implements OnInit {
  @ViewChild(WeatherListComponent) weatherListComponent!: WeatherListComponent;
  selectedWeatherData: any;
  cityName!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityName')!;
  }

  displayWeatherDetail(weatherDataWithCityId: any): void {
    this.selectedWeatherData = weatherDataWithCityId;
  }

  updateWeatherList() {
    if (this.weatherListComponent) {
      this.weatherListComponent.fetchCityData();
    }
  }
}
