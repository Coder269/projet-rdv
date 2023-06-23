import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { MonthCalendarService } from '../services/month-calendar.service';
import { UserService } from '../services/user.service';

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
  currentId!: string;
  userService1!: UserService;
  id!:string;


  constructor(monthCalendarService: MonthCalendarService, userService:UserService) {
    this.monthCalendarService = monthCalendarService; 
    this.userService1 = userService
  }
  ngOnInit(): void {
    this.monthCalendarService.generateMonth();
    console.log(this.monthCalendarService.month);
  }
  createRDV(event:any){
    let modal = document.getElementById("myModal");
    if (modal)
    modal.style.display = "block";
    this.currentId=event.target.id;
  }

  dismiss() {
    let modal = document.getElementById("myModal");
    if (modal)
    modal.style.display = "none";
  }
}

