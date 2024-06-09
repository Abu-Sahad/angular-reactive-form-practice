import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    { value: 'bangladesh-101', viewValue: 'Bangladesh' },
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
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      designation: [null],
      nationality: [null],
      dateOfBirth: [null],
      gender: [null],
      organization: [null],
      nrb: [true],
      passport: [null],
      countryOfResidence: [null],
      image: [null],
      skills: this.fb.array([
        new FormControl(null),
      ])
    });
  }
  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  onSubmit() {
    const dateOfBirthControl = this.userForm.get('dateOfBirth');
    if (dateOfBirthControl) {
      const formattedDate = this.datePipe.transform(dateOfBirthControl.value, 'MM/dd/yyyy');
      dateOfBirthControl.setValue(formattedDate); // Set the formatted date as the value
    }
    console.log(this.userForm.value);

    console.log(this.userForm);
  }

  AddSkills() {
    (this.userForm.get('skills') as FormArray).push(new FormControl(null))
  }
  DeleteSkill(index: number) {
    const skillsArray = this.userForm.get('skills') as FormArray;
    skillsArray.removeAt(index);
  }
}
