import { Component, OnInit } from '@angular/core';
import { MonthCalendarService } from '../services/month-calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
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
  createRDV(){
    let modal = document.getElementById("myModal");
    if (modal)
    modal.style.display = "block";
  }

  dismiss() {
    let modal = document.getElementById("myModal");
    if (modal)
    modal.style.display = "none";
  }
}

