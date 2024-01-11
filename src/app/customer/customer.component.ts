import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { IcustomerService } from '../icustomer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer=new Customer();
  customers:Customer[] = [];

  list:Customer[]=[];

  constructor(private m: IcustomerService, private r:Router) { }

  signOut():void{
    this.r.navigate(['/signin'])
  }


  addCustomer():void{
    this.m.addCustomer(this.customer).subscribe((p)=>this.customer=p);

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
