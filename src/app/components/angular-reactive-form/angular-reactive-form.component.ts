import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormControlName, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent implements OnInit {

  employeeForm:FormGroup

  constructor(private fb:FormBuilder) { 
  }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   userName: new FormControl(),
    //   email: new FormControl(''),
    //   skill: new FormGroup({
    //     skillName:new FormControl(),
    //     experienceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // })
    this.employeeForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email: [''],
      skill: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['begineer']
      })
    })

    this.employeeForm.valueChanges.subscribe((value:any)=>{
      console.log(value);
    })
  }

  saveEmployee():void {
   console.log(this.employeeForm);
  }

  loadData(){
    this.employeeForm.patchValue({
      userName: 'sanchit',
      email: 'sanchitaggarwal751@gmail.com',
      skill: {
        skillName:'I Dont Know',
        experienceInYears: '5',
        proficiency: 'begineer'
      }
    })
  }

}

// abstract control properties: value, dirty, touch, valid
// abstract control properties: setValue, patchValue, reset, setValidators(), clearValidators(), updateValueAndValidity()