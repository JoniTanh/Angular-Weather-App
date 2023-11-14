import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFormComponent } from './weather-form.component';

describe('WeatherFormComponent', () => {
  let component: WeatherFormComponent;
  let fixture: ComponentFixture<WeatherFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherFormComponent]
    });
    fixture = TestBed.createComponent(WeatherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
