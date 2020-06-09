import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Classes/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private EmployeeSer:EmployeeService) { }
EmployeeList:Array<Employee>;
  ngOnInit() {
    this.EmployeeSer.GetAllEmployees().subscribe(
      mydata=>{this.EmployeeList=mydata;},
      myeror=>{alert(myeror.message);});
  }

}
