import { TestBed } from '@angular/core/testing';

import { WeeklyWeatherService } from './weekly-weather.service';

describe('WeeklyWeatherService', () => {
  let service: WeeklyWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
