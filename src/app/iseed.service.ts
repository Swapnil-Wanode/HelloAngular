import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seed } from './Seed';

@Injectable({
  providedIn: 'root'
})
export class IseedService {

  url="http://localhost:9093/seeds";
 
  

  constructor(private h:HttpClient) { }

  getAllSeed():Observable<any>{
    return this.h.get<any[]>(this.url+"/viewallseed")
    }
  addSeed(seed:Seed):Observable<any>{
    return this.h.post<any[]>(this.url+"/add",seed);
  }
  updateSeed(seed:Seed):Observable<any>{
    return this.h.put<any[]>(this.url+"/update",seed);
  }
  deleteSeed(id:number):Observable<any>{
    return this.h.delete<any[]>(this.url+"/delete/"+id);
  }
  getSeedById(id:number):Observable<any>{
    return this.h.get<any[]>(this.url+"/viewbyid/"+id);
  }
  getSeedByCommonName(name:String):Observable<any>{
    return this.h.get<any[]>(this.url+"/viewbyname/"+name);
  }
  getSeedBySeedType(type:String):Observable<any>{
    return this.h.get<any[]>(this.url+"/viewallseed/"+type);
  } 
}
