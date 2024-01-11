import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    msg:string="";

  constructor(private m:MyserviceService, private r1:ActivatedRoute) {
    this.msg=this.r1.snapshot.params['p1'];
   }

  ngOnInit(): void {
  }

  n1:string="";
  n2:string="";
  r:number=0;
  add():void{
   this.r= parseInt(this.n1) + parseInt(this.n2); 
  }

  str:string ="";
  show():void{
    this.str=this.m.getemployee();
  }
  
}
