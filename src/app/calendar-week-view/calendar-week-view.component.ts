import { Component, OnInit } from '@angular/core';
import { MonthCalendarService } from '../services/month-calendar.service';

@Component({
  selector: 'app-calendar-week-view',
  templateUrl: './calendar-week-view.component.html',
  styleUrls: ['./calendar-week-view.component.css'],
})
export class CalendarWeekViewComponent implements OnInit {
  monthCalendarService: MonthCalendarService;
  constructor(monthCalendarService: MonthCalendarService) {
    this.monthCalendarService = monthCalendarService;
  }
  ngOnInit(): void {
    this.monthCalendarService.generateMonth();
    console.log(this.monthCalendarService.month);
  }
}
