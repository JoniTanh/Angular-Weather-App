import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css'],
})
export class AddWeatherComponent implements OnInit {
  weatherForm: FormGroup;
  cityName!: string;
  cityId!: number;

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    this.weatherForm = this.fb.group({
      date: ['', Validators.required],
      tempC: [
        '',
        [Validators.required, Validators.pattern(/^[-+]?\d*\.?\d+$/)],
      ],
      rainfall: [
        '',
        [Validators.required, Validators.pattern(/^[-+]?\d*\.?\d+$/)],
      ],
      windSpeed: [
        '',
        [Validators.required, Validators.pattern(/^[-+]?\d*\.?\d+$/)],
      ],
    });
  }

  ngOnInit() {
    this.cityName = this.route.snapshot.params['cityName'];

    this.weatherForm.patchValue({
      appCityId: history.state.cityId,
    });
  }

  submit() {
    if (this.weatherForm.valid) {
      this.weatherService
        .addWeather(this.cityName, this.weatherForm.value)
        .subscribe({
          next: (res) => {
            console.log('Weather data added', res);
            // Onnistumisilmotus pitää tehä
            this.weatherForm.reset();
          },
          error: (err) => console.error(err),
        });
    } else {
      console.error('Form is invalid, city name or city ID is missing');
    }
  }
}
