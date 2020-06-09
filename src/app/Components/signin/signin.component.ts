import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private Userser:UserService) { }
  u:User=new User();
  result:string;
   save()
   {
    this.Userser.FindeUser(this.u).subscribe(
      mydata=>{this.result=mydata;},
      myeror=>{alert(myeror.message);});

   } 
  ngOnInit() {
  }

}
