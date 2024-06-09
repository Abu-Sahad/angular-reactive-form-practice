import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {

  userForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    designation: new FormControl(''),
    nationality: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    organization: new FormControl(''),
    image: new FormControl(''),
    favoriteFood: new FormControl('')


  })


  foods: Food[] = [
    { value: 'america-101', viewValue: 'American' },
    { value: 'canadian-102', viewValue: 'Canadian' },
    { value: 'indian-103', viewValue: 'Indian' },
    { value: 'other', viewValue: 'Other' },
  ];

  onSubmit() {
    console.log(this.foods);
    console.log(this.userForm.value);
  }

}
