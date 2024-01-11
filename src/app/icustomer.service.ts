import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class IcustomerService {

  url="http://localhost:9093/customer";

  constructor(private h:HttpClient) { }

  getAllCustomer():Observable<any>{
    return this.h.get<any[]>(this.url+"/viewallcustomer");
    }
    addCustomer(customer:Customer):Observable<any>{
      return this.h.post(this.url+"/add",customer,{responseType:"text"});

    }
    updateCustomer(customer:Customer):Observable<any>{
      return this.h.put(this.url+"/update",customer,{responseType:"text"});

    }
    deleteCustomer(id:number):Observable<any>{
      return this.h.delete<any[]>(this.url+"/delete/"+id);

    }
    getCustomerById(id:number):Observable<any>{
      return this.h.get<any>(this.url+"/viewbyid/"+id);
    }
   getValidateCustomer(username:string, password: string): Observable<any>{
     return this.h.get<any>(this.url+"/validatecustomer/" + username  + password );
     
   }

}
