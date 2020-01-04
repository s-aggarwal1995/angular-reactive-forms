import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent implements OnInit {

  employeeForm:FormGroup

  constructor() { 
  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      userName: new FormControl('sanchit'),
      email: new FormControl('')
    })
  }

  saveEmployee():void {
   console.log("Save Employee Is Called" + JSON.stringify(this.employeeForm.value));
  }

}
