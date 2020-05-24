import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../IEmployee';



@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  public employees : IEmployee[];

  constructor(private _employeeServiceService : EmployeeServiceService) {

   }

  ngOnInit(): void {
   this._employeeServiceService.getEmployeesFromHttp().subscribe( data => {
     return this.employees = data;
   });
  }

}
