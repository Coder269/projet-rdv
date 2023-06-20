import { Component } from '@angular/core';

class day {
  constructor(private dayOfWeek: number, private dayOfMounth: number) {}
}

class mounth {
  public mounth: Array<day> = [];
  constructor(
    private mounthNumber: number,
    private isBisextil: boolean,
    private year: number
  ) {
    let nbDay: number;
    if ([0, 2, 4, 6, 7, 9, 11].includes(mounthNumber)) {
      nbDay = 31;
    } else if (mounthNumber == 2) {
      isBisextil ? (nbDay = 29) : (nbDay = 28);
    } else {
      nbDay = 30;
    }

    let i: number = 0;
    while (i < nbDay) {
      this.mounth[i] = new day(
        new Date(2023, mounthNumber - 1, i).getDay(),
        i + 1
      );
      i++;
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
    while (i < 12) {
      this.year[i] = new mounth(i + 1, isBisextil, yearNumber);
      i++;
    }
  }
}

class display {
  public weekGrid: Array<number> = [];
  public mounthGrid: Array<number> = [];
  public display: string = 'mounth';

  constructor(private mounthToDisplay: number) {
    let i: number = 0;

    while (i < 7) {
      this.weekGrid[i] = i;
      i++;
    }

    i = 0;

    while (i < 4) {
      this.mounthGrid[i] = i;
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
  public calendar: any = new display(12);
  constructor() {
    console.log(this.calendar);
  }
}
