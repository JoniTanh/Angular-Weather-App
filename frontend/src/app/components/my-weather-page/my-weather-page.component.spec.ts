import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeatherPageComponent } from './my-weather-page.component';

describe('MyWeatherPageComponent', () => {
  let component: MyWeatherPageComponent;
  let fixture: ComponentFixture<MyWeatherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWeatherPageComponent]
    });
    fixture = TestBed.createComponent(MyWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
