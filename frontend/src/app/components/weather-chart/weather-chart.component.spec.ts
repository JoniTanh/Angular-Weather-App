import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChartComponent } from './weather-chart.component';

describe('WeatherChartComponent', () => {
  let component: WeatherChartComponent;
  let fixture: ComponentFixture<WeatherChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherChartComponent]
    });
    fixture = TestBed.createComponent(WeatherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
