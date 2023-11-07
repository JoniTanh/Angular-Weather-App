import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather App';
  cities: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/cities').subscribe({
      next: (response) => (this.cities = response),
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }
}
