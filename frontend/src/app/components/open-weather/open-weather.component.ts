import { Component } from '@angular/core';
import { COUNTRY_CODES } from 'src/app/common/country-codes';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-open-weather',
  templateUrl: './open-weather.component.html',
  styleUrls: ['./open-weather.component.css'],
})
export class OpenWeatherComponent {
  city: string = '';
  countryCode: string = '';
  weatherData: any;
  countyCodes: any = COUNTRY_CODES;

  constructor(private openWeatherService: OpenWeatherService) {
    this.loadWeatherData();
  }

  getWeather() {
    this.openWeatherService
      .getWeather(this.city, this.countryCode)
      .subscribe((data) => {
        this.weatherData = data;
        localStorage.setItem('weatherData', JSON.stringify(this.weatherData));
        localStorage.setItem('city', this.city);
        localStorage.setItem('countryCode', this.countryCode);
      });
  }

  loadWeatherData() {
    const savedCity = localStorage.getItem('city');
    const savedCountryCode = localStorage.getItem('countryCode');
    const savedWeatherData = localStorage.getItem('weatherData');

    if (savedWeatherData) {
      this.weatherData = JSON.parse(savedWeatherData);
      this.city = savedCity || this.city;
      this.countryCode = savedCountryCode || this.countryCode;
    }
  }
}
