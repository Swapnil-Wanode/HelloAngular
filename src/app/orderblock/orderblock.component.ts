import { Component, OnInit } from '@angular/core';
import { IorderService } from '../iorder.service';
import { Order } from '../Order';

@Component({
  selector: 'app-orderblock',
  templateUrl: './orderblock.component.html',
  styleUrls: ['./orderblock.component.css']
})
export class OrderblockComponent implements OnInit {

  order: Order=new Order();
  orders:Order[]=[];
  list:Order[]=[];

  constructor(private m:IorderService) { }
  
  addOrder():void{
    this.m.addOrder(this.order).subscribe((o)=>this.order=o);
  }

  updateOrder():void{
    this.m.updateOrder(this.order).subscribe((o)=>this.order=o);
  }

  deleteOrder():void{
    this.m.deleteOrder(this.order.bookingOrderId).subscribe((o)=>this.order=o);
  }

  viewOrderById():void{
   this.m.viewOrder(this.order.bookingOrderId).subscribe((o)=>this.order=o);
  }

  viewallorder():void{
   this.m.viewAllOrder().subscribe((o)=>this.order=o);
 }

  ngOnInit(): void {
  }

}
