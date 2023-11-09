import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeatherComponent } from './add-weather.component';

describe('AddWeatherComponent', () => {
  let component: AddWeatherComponent;
  let fixture: ComponentFixture<AddWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWeatherComponent]
    });
    fixture = TestBed.createComponent(AddWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
