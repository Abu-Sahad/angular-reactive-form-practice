import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Gender {
  value: string;
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
  providers: [DatePipe]
})
export class FormGroupComponent implements OnInit {

  userForm!: FormGroup;

  foods: Food[] = [
    { value: 'america-101', viewValue: 'American' },
    { value: 'canadian-102', viewValue: 'Canadian' },
    { value: 'indian-103', viewValue: 'Indian' },
    { value: 'other', viewValue: 'Other' },
  ];
  genders: Gender[] = [
    { value: 'Male' },
    { value: 'Female' },
  ];

  constructor(private fb: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: ['0'],
      firstName: [''],
      lastName: [''],
      email: [''],
      designation: [''],
      nationality: [''],
      dateOfBirth: [''],
      gender: [''],
      organization: [''],
      nrb: Boolean,
      passport: [''],
      countryOfResidence: [''],
      image: [''],
    });
  }

  onSubmit() {
    const dateOfBirthControl = this.userForm.get('dateOfBirth');
    if (dateOfBirthControl) {
      const formattedDate = this.datePipe.transform(dateOfBirthControl.value, 'MM/dd/yyyy');
      dateOfBirthControl.setValue(formattedDate); // Set the formatted date as the value
    }
    console.log(this.userForm.value);
  }
}
