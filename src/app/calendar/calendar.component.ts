import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  public selectedYear:number = new Date().getFullYear();
  public selectedMonth:number = new Date().getMonth()+1;
  public month:Array<number> = [];
  public prevMonth:Array<number> = []
  public nextMonth: Array<number> = []

  constructor(){
    this.generateMonth()
  }

  isBisextil(year:number): boolean{
    if (year%4 == 0  && (year% 100 !=0 || year %400 ==0)){
      return true
    }
    else return false
  }

  nbDay(month:number, year:number): number{
    if([0, 2, 4, 6, 7, 9, 11].includes(month)){
      return 31;
    }
    else if (month == 1)
    {
      if (this.isBisextil(year))
      {
        return 29
      }
      else{
        return 28
      }
    }
    else{
      return 30;
    }
  }
  generateMonth(): void {
    this.month.length = this.nbDay(this.selectedMonth-1 , this.selectedYear);
    for (let i=0; i<this.month.length; i++){
      this.month[i] = new Date(this.selectedYear, this.selectedMonth-1, i).getDay()
    }
  this.fillEmpty()
  }

  fillEmpty(){
    this.prevMonth.length=this.month[0];
    this.nextMonth.length=7-((this.month.length+this.prevMonth.length)%7)

    let prevNbDay = this.nbDay(this.selectedMonth-2, this.selectedYear)
    for(let i=this.prevMonth.length; i>0; i--){
      this.prevMonth[this.prevMonth.length-i]=prevNbDay-i+1;
    }
    console.log(this.prevMonth)
    for(let i=1; i<=this.nextMonth.length; i++){
      this.nextMonth[i-1]=i;
    }
  }
  createRDV(event:any){
    console.log(event)
  }
}
