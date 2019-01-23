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
    
  constructor(
    public firstName: string ="",
    public lastName: string = "",
    public dob: NgbDateStruct = null,
    public email: string = "",
    public password: string = "",
    public country: string = "select country"
  ) { 
    this.registrations.push(new Registration(
      'Johan',
      'pete',
      {year: 1980, month: 5, day: 12 },
      'pete@gmail.com',
      'johan123',
      'uk'));
      this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
      this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));
  }
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
    } 
    onSave(){
      if(this.submitType === 'save'){
        this.registrations.push(this.regModel);
      }
      else{
        this.registrations[this.selectedRow].firstName = this.regModel.firstName;
        this.registrations[this.selectedRow].lastName = this.regModel.lastName;
        this.registrations[this.selectedRow].dob = this.regModel.dob;
        this.registrations[this.selectedRow].email = this.regModel.email;
        this.registrations[this.selectedRow].password = this.regModel.password;
        this.registrations[this.selectedRow].country = this.regModel.country;
      }
      this.showNew = false;
    }
    onEdit(index: number){
      this.selectedRow = index;
      this.regModel = new Registration();
      this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
      this.submitType = 'update';
      this.showNew = true;
    }
    onDelete(index: number){
      this.registrations.splice(index, 1);
    }
}
