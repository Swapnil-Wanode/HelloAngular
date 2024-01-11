import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IloginService {
  
  url="http://localhost:9093/login";
  constructor(private h:HttpClient) { }

  signIn(login:User):Observable<any>{
   return this.h.post(this.url+"/signin",login,{responseType:"text"})
  }
  signUp(login:User):Observable<any>{
    return this.h.post(this.url+"/signup",login,{responseType:"text"})
   }
   signOut(login:User):Observable<any>{
    return this.h.put(this.url+"/signout",login,{responseType:"text"})
   }


}
