import { EmployeeComponent } from './Components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreparatoryComponent } from './Components/preparatory/preparatory.component';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsdayComponent } from './Components/visitorsday/visitorsday.component';
import { InterstedComponent } from './Components/intersted/intersted.component';
import { ReminderComponent } from './Components/reminder/reminder.component';
import { HomeComponent } from './Components/home/home.component';



let appRoute:Routes = 
[
    {path:"", component:HomeComponent, 
        children:
        [ 
          {path:"",component:ReminderComponent},
          {path:"Reminder",component:ReminderComponent,
          children:
            [

              {path:"",component:InterstedComponent},
              {path:"Intersted",component:InterstedComponent,     
              children:
                [ 
                  {path:"",component:VisitorsdayComponent},
                  {path:"Visitorsday",component:VisitorsdayComponent,
                      children:
                        [
                          {path:"",component:PreparatoryComponent},
                          {path:"Preparatory",component:PreparatoryComponent,}
                        ]
                      }
                    
                ]
              }
            ]
          }
        
          ]
        }
 ];    
    






@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SigninComponent,
    PreparatoryComponent,
    HomeComponent,
    VisitorsdayComponent,
    ReminderComponent,
    InterstedComponent


   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
