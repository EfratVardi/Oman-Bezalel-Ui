import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rout:Router) { }
  OpenReminder()
  {
    this.rout.navigate(['/Reminder/']);
  }
  OpenIntersted()
  {
    this.rout.navigate(['/Reminder/Intersted/']);
  }
  OpenVisitorsday()
  {
    this.rout.navigate(['/Reminder/Intersted/Visitorsday/']);
  }
  
  OpenPreparatory()
  {
    this.rout.navigate(['/Reminder/Intersted/Visitorsday/Preparatory/']);
  }



  ngOnInit() {
  }

}
