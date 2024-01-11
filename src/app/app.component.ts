import { Component } from '@angular/core';
import { Person } from './Person';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title="Hello Angular";

  check1:boolean=false;
  check2:boolean=false;

  signin():void{
    this.check1=true;
    this.check2=false;
  }
  signup():void{
    this.check2=true;
    this.check1=false;
  }






























  // Day-2-------------------------------
  // myperson = {pid:1 , pname:'swapnil', page:22};
  // constructor(){
  //   this.myperson.pid=100;
  //   this.myperson.pname="harry";
  //   this.myperson.page=24;
  // }
  
  // name:string = "Swapnil wanode";

  // num:number = 1000;

  // var1:number = 5;

  // d:Date = new Date();

  // person = {pid:1 , pname:'swapnil', page:22};

  // persons =[
  //     {pid:101 , pname:'swpanil' , page:22},
  //     {pid:102 , pname:'Tom' , page:23},
  //     {pid:103 , pname:'Jerry' , page:21},
  //     {pid:104 , pname:'harry' , page:24},   
  //   ];

  //   select(p:Person):void{
  //     this.person.pid=p.pid;
  //     this.person.pname=p.pname;
  //     this.person.page=p.page;
  //   }

  //   addRecord():void{
  //     let p:Person={pid:this.person.pid, pname:this.person.pname,page:this.person.page};
  //     this.persons.push(p);
  //   }

  //   editRecord(p:Person):void{
  //     this.person.pid=p.pid;
  //     this.person.pname=p.pname;
  //     this.person.page=p.page;
  //     // let p1:Person={pid:this.person.pid, pname:this.person.pname,page:this.person.page};
  //     // this.persons.push(p1);
      
  //   }
  //   delRecord(id:number):void{
  //     let temp:Person[] = [];
  //     temp = this.persons.filter((p)=> p.pid != id);
  //     this.persons=temp;
  //   }

  //   flag:number=0;
    
  //   sortbyid():void{
  //     this.flag=1;
  //   }

  //   sortbyname():void{
  //     this.flag=2;
  //   }
  //   sortbyage():void{
  //     this.flag=3;
  //   }


  // Day-1------------------------------------
  // name:string ="Hello iam swapnil wanode";

  // n:number = 100;

  // person = {pid:1 , pname:'swapnil', page:22};

  // array = ['swapnil', 'Tom' , 'Jerry'];

  // cities: Array<string> = ['Nagpur','Pune','Bhopal'];

  // flag:boolean = true;

  // persons =[
  //   {pid:101 , pname:'swpanil' , page:22},
  //   {pid:102 , pname:'Tom' , page:23},
  //   {pid:103 , pname:'Jerry' , page:21},
  //   {pid:104 , pname:'harry' , page:24},   
  // ];

  // person1:Person [] =[
  //   {pid:111 , pname:'swpanil' , page:22},
  //   {pid:122 , pname:'Tom' , page:23},
  //   {pid:133 , pname:'Jerry' , page:21},
  //   {pid:144 , pname:'harry' , page:24},   
  // ];

  // f1():void{
  //   alert('you are using angular');
  // }

  // uname:string ="swapnil";

  // var1:number=2;
    

  // 1. Hands-on Angular starts

  // name:string="swapnil";
  // num:number=100;
  // array = ['swapnil', 'Tom' , 'Jerry'];
  // person = {pid:1 , pname:'swapnil', page:22};
  // persons =[
  //     {pid:101 , pname:'swpanil' , page:22},
  //     {pid:102 , pname:'Tom' , page:23},
  //     {pid:103 , pname:'Jerry' , page:21},
  //     {pid:104 , pname:'harry' , page:24},   
  //   ];

  // check:boolean=false;
  // nm:boolean=false;
  // n:boolean=false;
  // arr:boolean=false;
  // obj:boolean=false;
  // per:boolean=false;


  // p1():void{
  //  this.check=true;
  //  this.nm=false;
  //  this.n=true;
  //  this.arr=false;
  //  this.obj=false;
  //  this.per=false;
  // }
  // p2():void{
  //   this.check=true;
  //   this.nm=true;
  //   this.n=false;
  //   this.arr=false;
  //   this.obj=false;
  //   this.per=false;
  // }
  // p3():void{
  //   this.check=true;
  //   this.nm=false;
  //   this.n=false;
  //   this.arr=false;
  //   this.obj=true;
  //   this.per=false;
  // }
  // p4():void{
  //   this.check=true;
  //   this.nm=false;
  //   this.n=false;
  //   this.arr=true;
  //   this.obj=false;
  //   this.per=false;
  // }
  // p5():void{
  //   this.check=true;
  //   this.nm=false;
  //   this.n=false;
  //   this.arr=false;
  //   this.obj=false;
  //   this.per=true;
  // }
  // 1. Hands-on Angular comnpleted

  // 2. Hands-on Angular starts

  // 2. Hands-on Angular comnpleted









}





function num(num: any) {
  throw new Error('Function not implemented.');
}

