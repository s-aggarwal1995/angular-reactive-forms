import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent implements OnInit {

  createEmployeeForm:FormGroup;

  constructor() { 
    this.createEmployeeForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
    console.log(this.createEmployeeForm.touched);
    console.log(this.createEmployeeForm.dirty);
  }

  submit(){
    console.log(this.createEmployeeForm);
    console.log(this.createEmployeeForm.touched);
    console.log(this.createEmployeeForm.dirty);
  }

}
