import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonthCalendarService {
  public selectedYear: number = new Date().getFullYear();
  public selectedMonth: number = new Date().getMonth() + 1;
  public month: Array<number> = [];
  public prevMonth: Array<number> = [];
  public nextMonth: Array<number> = [];
  public monthAllDays: Array<number> = [];
  public monthWeeks: Array<any> = [];
  public monthInLetter: Array<string> = [
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
  public weekDays: Array<string> = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  constructor() {}

  isBisextil(year: number): boolean {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      return true;
    } else return false;
  }

  nbDay(month: number, year: number): number {
    if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
      return 31;
    } else if (month == 1) {
      if (this.isBisextil(year)) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return 30;
    }
  }
  generateMonth(): any {
    this.month.length = this.nbDay(this.selectedMonth - 1, this.selectedYear);
    for (let i = 0; i < this.month.length; i++) {
      this.month[i] = new Date(
        this.selectedYear,
        this.selectedMonth - 1,
        i
      ).getDay();
    }
    this.fillEmpty();
    this.monthAllDays = [];
    this.getMonthAllDays();
    this.monthWeeks = [];
    this.getWeeks();
    console.log(this.monthAllDays);
  }

  fillEmpty() {
    this.prevMonth.length = this.month[0];
    this.nextMonth.length =
      7 - ((this.month.length + this.prevMonth.length) % 7);

    let prevNbDay = this.nbDay(this.selectedMonth - 2, this.selectedYear);
    for (let i = this.prevMonth.length; i > 0; i--) {
      this.prevMonth[this.prevMonth.length - i] = prevNbDay - i + 1;
    }
    console.log(this.prevMonth);
    for (let i = 1; i <= this.nextMonth.length; i++) {
      this.nextMonth[i - 1] = i;
    }
  }
  createRDV(event: any) {
    console.log(event);
  }

  changeNextMonth() {
    if (this.selectedMonth < 11) {
      this.selectedMonth = this.selectedMonth + 1;
      this.generateMonth();
      this.fillEmpty();
    } else if ((this.selectedMonth = 11)) {
      this.selectedMonth = 0;
      this.selectedYear = this.selectedYear + 1;
      this.generateMonth();
      this.fillEmpty();
    }
  }

  changePrevMonth() {
    if (this.selectedMonth > 0) {
      this.selectedMonth = this.selectedMonth - 1;
      this.generateMonth();
      this.fillEmpty();
    } else if ((this.selectedMonth = 1)) {
      this.selectedMonth = 11;
      this.selectedYear = this.selectedYear - 1;
      this.generateMonth();
      this.fillEmpty();
    }
  }

  getMonthAllDays() {
    for (let i = this.prevMonth.length; i > 0; i--) {
      let prevNbDay = this.nbDay(this.selectedMonth - 2, this.selectedYear);
      this.monthAllDays.push(prevNbDay - i + 1);
    }

    for (let i = 0; i < this.month.length; i++) {
      this.monthAllDays.push(i + 1);
    }

    for (let i = 1; i <= this.nextMonth.length; i++) {
      this.monthAllDays.push(i);
    }
  }

  getWeeks() {
    const nbWeekInMonth = Math.ceil(this.monthAllDays.length / 7);
    for (let i = 0; i < nbWeekInMonth; i++) {
      this.monthWeeks.push(this.monthAllDays.slice(i * 7, 7 + i * 7));
    }
    console.log(this.monthWeeks, nbWeekInMonth);
  }
}
