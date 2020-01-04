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
      userName: new FormControl(),
      email: new FormControl(''),
      skill: new FormGroup({
        skillName:new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    })
  }

  saveEmployee():void {
   console.log("to")
  }

}

// abstract control properties: value, dirty, touch, valid
// abstract control properties: setValue, patchValue, reset, setValidators(), clearValidators(), updateValueAndValidity()