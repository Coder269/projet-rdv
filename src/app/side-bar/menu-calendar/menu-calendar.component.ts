import { Component, OnInit } from '@angular/core';
import { MonthCalendarService } from 'src/app/services/month-calendar.service';
@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css'],
})
export class MenuCalendarComponent implements OnInit {
  monthCalendarService: MonthCalendarService;
  nextMonth: any;
  month: any;
  prevMonth: any;
  constructor(monthCalendarService: MonthCalendarService) {
    this.monthCalendarService = monthCalendarService;
  }
  ngOnInit(): void {
    this.monthCalendarService.generateMonth();
    console.log(this.monthCalendarService.month);
  }
}
