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

  @Output()
  cancelEvent = new EventEmitter();

  @Input()
  currentId!: string;

  cancel() {
  this.cancelEvent.emit();
  }

  createRdv(form: NgForm) {
    this.cancel();
    this.userService.currentUser.rdv.push(form.value)
    console.log(this.userService.currentUser.rdv)
    this.displayRdv()
  }

  displayRdv(){
    
  }

}
