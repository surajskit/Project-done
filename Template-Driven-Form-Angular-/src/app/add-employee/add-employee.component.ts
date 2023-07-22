import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  title = "Angular Template-driven Forms";

  name!: string;
  score: number | null = null;
  email: string = '';

  @ViewChild('employeeForm') employeeForm!: NgForm;
  constructor() { }

  validateForm(): void {
    console.log("Form submitted");
    console.log(this.employeeForm);

    if (this.employeeForm.valid) {
      console.log('Form is valid');

      // Access the form values
      const { name, score, email } = this.employeeForm.value;

      // Perform further actions with the form values
      console.log('Name:', name);
      console.log('Score:', score);
      console.log('Email:', email);

      const employee = { name: name, score: score, email: email };
      console.log(employee);
      let employees: any[] = JSON.parse(localStorage.getItem('employees') || '[]');
      employees.unshift(employee);

      localStorage.setItem('employees', JSON.stringify(employees));
      window.location.href = "/employee-detail";
      
      this.employeeForm.reset();

    } 
    else {
      console.log('Form is invalid');
    }
  }

  resetHandler(): void {
    this.employeeForm.reset();
    this.name = '';
    this.score = null;
    this.email = '';
   }
}
