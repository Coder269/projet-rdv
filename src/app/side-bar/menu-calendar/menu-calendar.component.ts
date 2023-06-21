import { Component } from '@angular/core';

export class actualDate {
  currentDate: Date;
  currentMonth: string;
  currentYear: number;
  month: Array<string> = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  weekDays: Array<string> = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];
  daysInMonth: number;
  dayOfWeek: number;
  monthDays: Array<any> = [];
  monthRows: Array<any> = [];

  constructor() {
    this.currentDate = new Date();
    this.currentMonth = this.month[this.currentDate.getMonth()];
    this.currentYear = this.currentDate.getFullYear();
    this.dayOfWeek = this.currentDate.getDay();
    this.daysInMonth = new Date(
      this.currentYear,
      this.currentDate.getMonth(),
      0
    ).getDate();
    for (let i = 1; i < this.daysInMonth + 1; i++) {
      let monthDayName = new Date(
        this.currentYear,
        this.currentDate.getMonth(),
        i
      ).getDay();
      this.monthDays.push(i);
      this.monthRows.push({ i, monthDayName });
    }
  }
}

@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css'],
})
export class MenuCalendarComponent {
  date: actualDate;

  constructor() {
    this.date = new actualDate();
    console.log(
      this.date.daysInMonth,
      this.date.dayOfWeek,
      this.date.monthDays,
      this.date.monthRows
    );
  }
}
