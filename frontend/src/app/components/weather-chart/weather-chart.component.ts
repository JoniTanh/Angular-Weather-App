import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css'],
})
export class WeatherChartComponent implements OnInit {
  temperatureChart?: Chart;
  windSpeedChart?: Chart;
  rainfallChart?: Chart;
  cities: any[] = [];
  selectedCity: any = null;
  dateOptions: string[] = [];
  selectedDate: string | null = null;

  isDropdownOpen: boolean = false;
  isDateDropdownOpen: boolean = false;

  constructor(private cityService: CityService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.fetchCities();
  }

  fetchCities(): void {
    this.cityService.getCities().subscribe({
      next: (cities) => {
        this.cities = cities.sort((a: any, b: any) =>
          a.cityname.localeCompare(b.cityname)
        );
      },
      error: this.handleError,
    });
  }

  selectCity(city: any, event: MouseEvent): void {
    event.preventDefault();
    this.selectedCity = city;
    this.dateOptions = this.initializeDateOptions(city.weatherData);
    this.selectedDate = null;
    this.isDropdownOpen = false;
    this.isDateDropdownOpen = this.dateOptions.length > 0;
    this.updateChartData();
  }

  selectDate(date: string): void {
    this.selectedDate = date;
    this.isDateDropdownOpen = false;
    this.updateChartData();
  }

  updateChartData(): void {
    if (this.selectedCity && this.selectedDate) {
      const weatherData = this.selectedCity.weatherData.filter((data: any) => {
        const date = new Date(data.date);
        const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
        return monthYear === this.selectedDate;
      });

      weatherData.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      const labels = weatherData.map((data: any) => {
        const date = new Date(data.date);
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
          date.getDay()
        ];
        const dayOfMonth = date.getDate();
        return `${dayOfWeek} ${dayOfMonth}`;
      });

      const temperatureData = weatherData.map((data: any) => data.tempC);
      const windSpeedData = weatherData.map((data: any) => data.windSpeed);
      const rainfallData = weatherData.map((data: any) => data.rainfall);

      this.createChart(
        'temperatureCanvas',
        'temperatureChart',
        'Temp (°C)',
        temperatureData,
        'line',
        labels
      );
      this.createChart(
        'windSpeedCanvas',
        'windSpeedChart',
        'Wind Speed (m/s)',
        windSpeedData,
        'line',
        labels
      );
      this.createChart(
        'rainfallCanvas',
        'rainfallChart',
        'Rainfall (mm)',
        rainfallData,
        'bar',
        labels
      );
    }
  }

  createChart(
    canvasId: string,
    chartRefKey: keyof WeatherChartComponent,
    label: string,
    data: number[],
    type: 'line' | 'bar',
    labels: string[]
  ): void {
    if (this[chartRefKey] instanceof Chart) {
      this[chartRefKey]!.data.labels = labels;
      this[chartRefKey]!.data.datasets[0].data = data;
      this[chartRefKey]!.update();
    } else {
      this[chartRefKey] = new Chart(canvasId, {
        type: type,
        data: {
          labels: labels,
          datasets: [
            {
              label: label,
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }

  initializeDateOptions(weatherData: any[]): string[] {
    const dateOptionsSet = new Set<string>();
    weatherData.forEach((data) => {
      const date = new Date(data.date);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`.padEnd(
        7,
        '0'
      );
      dateOptionsSet.add(monthYear);
    });
    return Array.from(dateOptionsSet)
      .map((dateStr) => new Date(dateStr))
      .sort((a: any, b: any) => b - a)
      .map((date) => `${date.getMonth() + 1}/${date.getFullYear()}`);
  }

  private handleError = (error: any): void => {
    console.error('There was an error!', error);
  };
}
