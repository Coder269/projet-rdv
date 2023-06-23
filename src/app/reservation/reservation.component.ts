import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  @Output()
  cancelEvent = new EventEmitter();

  cancel() {
  this.cancelEvent.emit();
  }

  createRdv(form: NgForm) {

  }

}
