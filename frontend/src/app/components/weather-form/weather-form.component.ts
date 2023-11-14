import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css'],
})
export class WeatherFormComponent implements OnInit, OnChanges {
  @Input() editWeatherData: any;
  @Output() weatherUpdated = new EventEmitter<any>();

  isEditMode: boolean = false;

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
      cityId: [null],
    });
  }

  ngOnInit() {
    this.cityName = this.route.snapshot.params['cityName'];

    this.weatherForm.patchValue({
      appCityId: history.state.cityId,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editWeatherData'] && this.editWeatherData) {
      const formattedDate = this.formatDate(this.editWeatherData.date);

      this.weatherForm.patchValue({
        tempC: this.editWeatherData.tempC,
        rainfall: this.editWeatherData.rainfall,
        windSpeed: this.editWeatherData.windSpeed,
        date: formattedDate,
        cityId: this.editWeatherData.cityId,
      });
      this.isEditMode = true;
    }
  }

  private formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset)
      .toISOString()
      .split('T')[0];
  }

  submit() {
    if (this.weatherForm.valid) {
      this.weatherService
        .addWeather(this.cityName, this.weatherForm.value)
        .subscribe({
          next: (res) => {
            // Onnistumisilmotus pitää tehä
            this.weatherUpdated.emit();
            this.weatherForm.reset();
          },
          error: (err) => console.error(err),
        });
    } else {
      console.error('Form is invalid, city name or city ID is missing');
    }
  }

  updateWeather() {
    if (this.weatherForm.valid) {
      const {
        id,
        cityId = null,
        ...rest
      } = {
        ...this.weatherForm.value,
        id: this.editWeatherData.id,
      };

      const weatherDataToUpdate = {
        ...rest,
        appCityId: cityId,
      };

      this.weatherService.updateWeatherData(id, weatherDataToUpdate).subscribe({
        next: (res) => {
          // Onnistumisilmotus pitää tehä
          this.weatherUpdated.emit();
          this.weatherForm.reset();
          this.isEditMode = false;
        },
        error: (err) => console.log(err),
      });
    } else {
      console.error('Form is invalid');
    }
  }

  clearForm() {
    this.weatherForm.reset();
    this.isEditMode = false;
  }
}
