import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IloginService } from '../ilogin.service';
import { User } from '../User';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login:User = new User();
  log:User [] = [];
  msg='';
  constructor( private r:Router,private m:IloginService){}

  loginUser(){
    this.r.navigate(['/customer']);
    // this.m.signIn(this.login).subscribe(
    //   data =>{
    //     console.log("response received");
    //     this.r.navigate(['/customer']);

    //   },
    //   error =>{
    //     console.log("Exception occured")
    //     this.msg="Invalid Credentials, Please enter correct Username & Password"

    //   }
    //   );

  }

  adminblock():void{
    this.r.navigate(['/admin']);
  }


  ngOnInit(): void {
  }

}
