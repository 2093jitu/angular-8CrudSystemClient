import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  message:any;

  constructor(private employeeService: EmployeeService ,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    
      this.employeeService.createEmployee(this.employee)
      .subscribe(data =>data==null?this.message="This email is allraddy use......Please enter unique email" : this.gotoList(), error => console.log(error));     
      
  }

  onSubmit() {  
    this.save();    
  }

  gotoList() {
    this.submitted = true;
    this.employee = new Employee();
    this.router.navigate(['/employees']);
  }
}
