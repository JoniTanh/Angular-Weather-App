import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeatherPageComponent } from './add-weather-page.component';

describe('AddWeatherPageComponent', () => {
  let component: AddWeatherPageComponent;
  let fixture: ComponentFixture<AddWeatherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWeatherPageComponent]
    });
    fixture = TestBed.createComponent(AddWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
