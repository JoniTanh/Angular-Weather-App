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

  constructor(private openWeatherService: OpenWeatherService) {}

  getWeather() {
    this.openWeatherService
      .getWeather(this.city, this.countryCode)
      .subscribe((data) => {
        this.weatherData = data;
      });
  }
}
