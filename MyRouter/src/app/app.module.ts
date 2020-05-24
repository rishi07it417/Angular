import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DepartmentTestComponent } from './department-test/department-test.component';
import { EmployeeTestComponent } from './employee-test/employee-test.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentTestComponent,
    EmployeeTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
