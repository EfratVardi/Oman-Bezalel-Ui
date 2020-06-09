import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:50245/api/User/" 
  constructor(private http:HttpClient) { }

  FindeUser(u:User):Observable<string>
  {

   
    
    return this.http.post<string>(this.url + "FindeUser/",u);
  }
  
}