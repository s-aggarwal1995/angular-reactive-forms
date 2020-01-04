import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  createEmployeeForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.createEmployeeForm= new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experience: new FormControl(),
        proficiency: new FormControl(),
      })

    })
  }

  loadData(){
    this.createEmployeeForm.setValue({
      fullName:'sanchit',
      email:'sanccchit@gmail.com',
      skills:{
        skillName:'Angular',
        experience:'2',
        proficiency:'begineer'
      }
    })
  }

  submit(){
    console.log('function is called');
  }


  

}
