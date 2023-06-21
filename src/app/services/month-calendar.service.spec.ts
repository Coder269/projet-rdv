import { TestBed } from '@angular/core/testing';

import { MonthCalendarService } from './month-calendar.service';

describe('MonthCalendarService', () => {
  let service: MonthCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
