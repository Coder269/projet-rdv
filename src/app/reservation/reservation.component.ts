import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';




@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})

export class ReservationComponent {
  constructor(private userService:UserService){
  }

  @Input()
  id!:string;

  @Output()
  cancelEvent = new EventEmitter();

  @Output()
  confirmEvent = new EventEmitter();

  confirm(form:any){
    this.confirmEvent.emit(form.value)
    this.dismiss()
  }

  dismiss(){
    this.cancelEvent.emit();
  }

}
