import { Component } from '@angular/core';

class day {
  public day: Array<number> = [];
  constructor() {
    let i: number = 0;
    while (i++ < 12) {
      this.day[i] = i + 7;
    }
  }
}

class mounth {
  public mounth: Array<day> = [];
  constructor(private mounthNumber: number, private isBisextil: boolean) {
    let nbDay: number;
    if ([1, 3, 5, 7, 8, 10, 12].includes(mounthNumber)) {
      nbDay = 31;
    } else if (mounthNumber == 2) {
      isBisextil ? (nbDay = 29) : (nbDay = 28);
    } else {
      nbDay = 30;
    }

    let i: number = 0;
    while (i++ < nbDay) {
      this.mounth[i] = new day();
    }
  }
}

class year {
  public year: Array<mounth> = [];
  constructor(private yearNumber: number) {
    let isBisextil: boolean;
    if (
      yearNumber % 4 == 0 &&
      (yearNumber % 100 != 0 || yearNumber % 400 == 0)
    ) {
      isBisextil = true;
    } else isBisextil = false;

    let i: number = 0;
    while (i++ < 12) {
      this.year[i] = new mounth(i, isBisextil);
    }
  }
}
class years {
  public years: Array<year> = [];
  constructor(private firstyear: number, private lastyear: number) {
    let i: number = 0;
    while (i++ <= lastyear - firstyear) {
      this.years[i] = new year(firstyear + i - 1);
    }
  }
}

class Display {
  public week: Array<number> = [];
  public mounth: Array<number> = [];
  public display: string = 'mounth';

  constructor() {
    let i: number = 0;

    while (i < 7) {
      this.week[i] = i;
      i++;
    }

    i = 0;

    while (i < 4) {
      this.mounth[i] = i;
      i++;
    }
  }
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  public calendar: any = new Display();
  constructor() {
    console.log(this.calendar);
  }
}
