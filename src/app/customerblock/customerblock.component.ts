import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { IcustomerService } from '../icustomer.service';

@Component({
  selector: 'app-customerblock',
  templateUrl: './customerblock.component.html',
  styleUrls: ['./customerblock.component.css']
})
export class CustomerblockComponent implements OnInit {

  customer: Customer=new Customer();
  customers:Customer[] = [];

  list:Customer[]=[];

  constructor(private m: IcustomerService) { }

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
