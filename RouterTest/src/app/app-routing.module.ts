import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentTestComponent } from './department-test/department-test.component';
import { EmployeeTestComponent } from './employee-test/employee-test.component';
import { Component } from '@angular/compiler/src/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


const routes: Routes = [ { path: '', redirectTo : 'department', pathMatch : 'full'},
                        { path: 'department', component : DepartmentTestComponent},
                        { path: 'employee', component : EmployeeTestComponent},
                        { path: 'department/:id', component : DepartmentDetailsComponent},
                        { path: '**',component : NotFoundComponent} 
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingCmp  = [DepartmentTestComponent,EmployeeTestComponent,NotFoundComponent]
