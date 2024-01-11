import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { IcustomerService } from '../icustomer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer: Customer=new Customer();
  customers:Customer[] = [];

  list:Customer[]=[];

  constructor(private m: IcustomerService,private r:Router) { }

  addCustomer():void{
    this.m.addCustomer(this.customer).subscribe((p)=>this.customer=p);
    this.r.navigate(['/customer']);
  } 
  updateCustomer():void{
    this.m.updateCustomer(this.customer).subscribe((p)=>this.customer=p);
    
  }
  deleteCustomer():void{
    this.m.deleteCustomer(this.customer.customerId).subscribe((p)=>this.customer=p);
  }
  
  viewById():void{
    this.m.getCustomerById(this.customer.customerId).subscribe((p)=>this.customer=p);
  }
  
  viewallCustomer():void{
    this.m.getAllCustomer().subscribe((p)=>this.customers=p);
  }
  // validateCustomer():void{
  //   this.m.getValidateCustomer().subscribe((p)=>this.customer=p);
  // }


  ngOnInit(): void {
  }

}
