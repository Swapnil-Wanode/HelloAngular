import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IloginService } from '../ilogin.service';
import { User } from '../User';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  login:User = new User();
  log:User[] = [];
  private m:IloginService;
  constructor(private r: Router) { }

  signUp():void{
    alert("do u want to continue");
      // this.m.signUp(this.login).subscribe((p)=>this.login= p);     
      this.r.navigate(['/registration']);
      
  }

  ngOnInit(): void {
  }

}
