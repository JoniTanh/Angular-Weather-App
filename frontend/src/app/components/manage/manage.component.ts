import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface City {
  id: number;
  cityname: string;
  cityInfo: string;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit, OnDestroy {
  cities: City[] = [];
  editInfoIndex: number | null = null;
  addCityForm: FormGroup;
  updateCityForm: FormGroup;
  private unsubscribe$ = new Subject<void>();

  constructor(private cityService: CityService, private router: Router) {
    this.addCityForm = new FormGroup({
      cityName: new FormControl('', Validators.required),
    });

    this.updateCityForm = new FormGroup({
      cityName: new FormControl('', Validators.required),
      cityInfo: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
    });
  }

  ngOnInit(): void {
    this.fetchCities();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchCities(): void {
    this.cityService
      .getCities()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (cities) => {
          this.cities = cities.sort((a: any, b: any) =>
            a.cityname.localeCompare(b.cityname)
          );
        },
        error: this.handleError,
      });
  }

  onSubmit(): void {
    if (this.addCityForm.invalid) {
      return;
    }

    this.cityService
      .addCity({ cityName: this.addCityForm.value.cityName, cityInfo: '' })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.fetchCities();
          this.addCityForm.reset();
        },
        error: this.handleError,
      });
  }

  deleteCity(cityId: number): void {
    if (confirm('Are you sure to delete this city?')) {
      this.cityService
        .deleteCity(cityId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: () => this.fetchCities(),
          error: this.handleError,
        });
    }
  }

  updateCityInfo(cityId: number, cityInfo: string): void {
    if (!cityInfo) return;

    this.cityService
      .updateCityInfo({ id: cityId, cityInfo })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => this.fetchCities(),
        error: this.handleError,
      });
  }

  navigateToManageWeather(cityId: number, cityName: string) {
    this.router.navigate(['/manage/weather', cityName], {
      state: { cityId, cityName },
    });
  }

  private handleError = (error: any): void => {
    console.error('There was an error!', error);
  };
}
