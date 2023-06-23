import { Component, OnInit } from '@angular/core';
import { MonthCalendarService } from '../services/month-calendar.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
})
export class CalendarViewComponent implements OnInit {
  monthCalendarService: MonthCalendarService;
  width: { [klass: string]: any } | null | undefined;
  constructor(monthCalendarService: MonthCalendarService) {
    this.monthCalendarService = monthCalendarService;
  }
  ngOnInit(): void {
    this.monthCalendarService.generateMonth();
  }
}
