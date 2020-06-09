import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="http://localhost:50245/api/Employee/" 
  constructor(private http:HttpClient) { }

  GetAllEmployees():Observable<Array<Employee>>
  {
    return this.http.get<Array<Employee>>(this.url + "GetAll");
  }
  
}
