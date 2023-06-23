import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent {
  @Input()
  id!: string;
  modalVisible: boolean = false;
  rdvOfDay: Array<any> = [];

  displayModal() {
    this.modalVisible = true;
  }

  deleteModal() {
    this.modalVisible = false;
  }

  addRdv(event: any) {
    this.rdvOfDay.push(event);
  }
}
