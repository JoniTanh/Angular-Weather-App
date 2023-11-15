import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherComponent } from './open-weather.component';

describe('OpenWeatherComponent', () => {
  let component: OpenWeatherComponent;
  let fixture: ComponentFixture<OpenWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenWeatherComponent]
    });
    fixture = TestBed.createComponent(OpenWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
