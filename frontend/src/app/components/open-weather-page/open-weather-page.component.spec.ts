import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherPageComponent } from './open-weather-page.component';

describe('OpenWeatherPageComponent', () => {
  let component: OpenWeatherPageComponent;
  let fixture: ComponentFixture<OpenWeatherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenWeatherPageComponent]
    });
    fixture = TestBed.createComponent(OpenWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
