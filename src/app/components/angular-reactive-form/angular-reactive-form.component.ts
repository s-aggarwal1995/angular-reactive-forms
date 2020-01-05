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
    this.employeeForm = this.fb.group({
      userName: ['sanchit',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email: ['sanchit.aggarwal@svam.com'],
      skill: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['begineer']
      })
    })

    this.logKeyValuePairs(this.employeeForm);
  }

  logKeyValuePairs(formGroup:FormGroup): void{
    
    Object.keys(formGroup.controls).forEach((key:any)=>{
      const abstractControl = formGroup.get(key);
      if(abstractControl instanceof FormGroup){
        this.logKeyValuePairs(abstractControl);
      }
      else{
        console.log(key + abstractControl.value);
      }
    });
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