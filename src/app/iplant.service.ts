import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './Plant';

@Injectable({
  providedIn: 'root'
})
export class IplantService {

  url="http://localhost:9093/plants";
 
 
  

  constructor(private h:HttpClient) { }

  getAllPlant():Observable<any>{
    return this.h.get<any[]>(this.url+"/viewallplants");
    }
  addPlant(plant:Plant):Observable<any>{
    return this.h.post(this.url+"/add",plant,{responseType:"text"});
  }
  updatePlant(plant:Plant):Observable<any>{
    return this.h.put(this.url+"/update",plant,{responseType:"text"});
  }
  deletePlant(id:number):Observable<any>{
    return this.h.delete<any[]>(this.url+"/delete/"+id);
  }
  getPlantById(id:number):Observable<any>{
    return this.h.get<any>(this.url+"/viewbyid/"+id);
  }
  getPlantByCommonName(name:String):Observable<any>{
    return this.h.get<any[]>(this.url+"/viewbyname/"+name);
  }
  getPlantByType(name:String):Observable<any>{
    return this.h.get<any[]>(this.url+"/viewbytype/"+name);
  }
}
