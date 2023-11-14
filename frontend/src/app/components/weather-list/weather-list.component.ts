import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CityService } from '../../services/city.service';
import { WeatherService } from '../../services/weather.service';
import { City } from '../manage/manage.component';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent implements OnInit {
  selectedCityWeatherData: any[] = [];
  cityName!: string;
  cityId!: number;
  private unsubscribe$ = new Subject<void>();

  @Output() weatherSelected = new EventEmitter<any>();

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchCityData();
    this.cityName = this.route.snapshot.params['cityName'];
  }

  fetchCityData(): void {
    this.cityService
      .getCities()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (cities) => {
          const city = cities.find(
            (city: City) => city.cityname === this.cityName
          );
          if (city && city.weatherData) {
            this.selectedCityWeatherData = city.weatherData.sort(
              (a: any, b: any) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            this.cityId = city.id;
          }
        },
        error: this.handleError,
      });
  }

  deleteWeatherData(weatherId: number): void {
    this.weatherService.deleteWeatherData(weatherId).subscribe({
      next: (response) => {
        this.selectedCityWeatherData = this.selectedCityWeatherData.filter(
          (weather) => weather.id !== weatherId
        );
      },
      error: (err) => {
        console.error('Error deleting weather data:', err);
        // Esim. virheilmotus
      },
    });
  }

  showWeatherDetail(weather: any): void {
    const weatherDataWithCityId = {
      ...weather,
      cityId: this.cityId,
    };
    this.weatherSelected.emit(weatherDataWithCityId);
  }

  private handleError = (error: any): void => {
    console.error('There was an error!', error);
  };
}
