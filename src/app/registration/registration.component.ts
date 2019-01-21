import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

    registrations: Registration[] = [];
    regModel: Registration;
    showNew: Boolean = false;
    submitType: string = 'save';
    selectedRow: number;
    countries: string[] = ['US', 'UK', 'India', 'UAE'];
    onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
    } 
  constructor(
    public firstName: string ="",
    public lastName: string = "",
    public dob: NgbDateStruct = null,
    public email: string = "",
    public password: string = "",
    public counry: string = "select country"
  ) { 
    this.registrations.push(new Registraction(
      'Johan',
      'pete',
      {year: 1980, month: 5, day: 12 },
      'pete@gmail.com',
      'johan123',
      'uk'));
      this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
      this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));
  }


}
