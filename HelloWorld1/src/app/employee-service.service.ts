import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from "./IEmployee";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public  _url = "/assets/data/employee.json";

  constructor(private http:HttpClient) { }

  public getEmployees(){
    return [{"id":1,"name":"Rishi","code":"N1"},
    {"id":2,"name":"Sandip","code":"N2"},
    {"id":3,"name":"Kalpesh","code":"N3"}];
  }

  public getEmployeesFromHttp():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);  }
  
}
