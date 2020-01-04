import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-atap-intake-form',
  templateUrl: './atap-intake-form.component.html',
  styleUrls: ['./atap-intake-form.component.css']
})
export class AtapIntakeFormComponent implements OnInit {

  

  cities:Array<any>=[{id:1,name:'ohio'},{id:2,name:'indiana'}];
  states:Array<any>=[{id:1,name:'newyork'},{id:2,name:'california'}];
  programTypes:Array<any>=[{id:1,name:'online'},{id:2,name:'classroom'}];
  selectedProgramTypesValues = [];

  

  


  // documents:Array<Object> = [{id:1,documentName:"Atap",documentType:'Pdf',uploadedDate:'xyz',uploadedBy:'sanchit'},
  // {id:2,documentName:'Enforcement',documentType:'Pdf',uploadedDate:'xyz',uploadedBy:'sanchit'}];

  // atapIntakeForm = this.fb.group({
  //   providerName: ['',Validators.required],
  //   providerTelephoneNumber: ['',Validators.required],
  //   providerEmailAddress:['',[Validators.required,Validators.email]],
  //   directorFirstName:[''],
  //   directorMiddleInitial:[''],
  //   directorLastName:[''],
  //   directorEmailAddress:[''],
  //   federalIdNo:[''],
  //   address1:[''],
  //   Address2:[''],
  //   cityTown:[''],
  //   state: [''],
  //   zipPostalCode:[''],
  //   country:['USA'],
  //   programName:[''],
  //   programType:[''],
  //   date:[''],
  //   signature:[''],
  //   documentName:[''],
  //   documentType:[''],
  //   attachDocument:[''],
  //   confirm:[''],
  //   scan:[''],
  //   documentNo:[''],
  //   documentsArray: this.fb.group({
  //     documentId: [''],
  //     documentName: [''],
  //     documentType: [''],
  //     uploadDate: [''],
  //     uploadedBy:['']
  //   }),
  // });

  

  

  

  

  // get documents() {
  //   return this.atapIntakeForm.get('documents') as FormArray;
  // }

  // addDocument() {
  //   //this.documents.push({
  //     //   documentId:this.fb.control(''),
  //     //   documentName:this.fb.control(''),
  //     //   uploadDate:this.fb.control(''),
  //     //   uploadBy:this.fb.control('')
  //     // });
  // }


  atapIntakeForm: FormGroup;


  constructor(private fb: FormBuilder) {

    const subject = new BehaviorSubject(123);

    subject.subscribe(console.log);

    subject.next(200);
    subject.subscribe(console.log);

    subject.next(250);
    subject.subscribe(console.log);

    const formControls = this.programTypes.map(control => new FormControl(false));

    this.atapIntakeForm = this.fb.group({
      providerName: ['',[Validators.required]],
      providerTelephoneNumber: ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8)]],
      providerEmailAddress:['',[Validators.required,Validators.pattern('[^ @]*@[^ @]*')]],
      directorFirstName:[''],
      directorMiddleInitial:[''],
      directorLastName:[''],
      directorEmailAddress:['',[Validators.pattern('[^ @]*@[^ @]*')]],
      federalIdNo:[''],
      address1:[''],
      address2:[''],
      cityName:['',Validators.required],
      stateName:['',Validators.required],
      zipCode:['',],
      country:['USA'],
      programName:[''],
      programTypes:new FormArray(formControls),
      date:[''],
      signature:['',Validators.required]


    });

   }

  ngOnInit() {
    
  }

  onSubmit(){

    const selectedPreferences = this.atapIntakeForm.value.programTypes
    .map((checked, index) => checked ? this.programTypes[index].name : null)
    .filter(value => value !== null);
    this.selectedProgramTypesValues=selectedPreferences;
    
    let object = this.atapIntakeForm.value;
    object['ProgramTypesValues'] = this.selectedProgramTypesValues;


    console.log(object);
    
  }



  

}


