import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './Order';

@Injectable({
  providedIn: 'root'
})
export class IorderService {

  url="http://localhost:9093/order";

  constructor(private h:HttpClient) { }

  viewAllOrder():Observable<any>{
    return this.h.get<any[]>(this.url+"/viewallorder");
    }
  addOrder(order:Order):Observable<any>{
    return this.h.post(this.url+"/add",order,{responseType:"text"});
  }
  updateOrder(order:Order):Observable<any>{
    return this.h.put(this.url+"/update",order,{responseType:"text"});
  }
  deleteOrder(id:number):Observable<any>{
    return this.h.delete<any[]>(this.url+"/delete/"+id);
  }
  viewOrder(id:number):Observable<any>{
    return this.h.get<any>(this.url+"/vieworderbyid/"+id);
  }

}
