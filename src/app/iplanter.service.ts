import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planter } from './Planter';

@Injectable({
  providedIn: 'root'
})
export class IplanterService {

  url="http://localhost:9093/planters";

  constructor(private h:HttpClient) { }

 addPlanter(planter :Planter) : Observable<any>{
     return this.h.post(this.url+"/add",planter,{responseType:"text"});
 }

 updatePlanter(planter: Planter): Observable<any>{
     return this.h.put(this.url+"/update",planter,{responseType:"text"});
 }

 deletePlanter(planterId:number) : Observable<any>{
     return this.h.delete<any[]>(this.url+"/delete/"+planterId);
 }

 getPlanterById(planterId: number): Observable<any>{
     return this.h.get<any>(this.url+"/getPlanter/id/"+planterId);
 }
 
 getAllPlanters(): Observable<any>{
     return this.h.get<any[]>(this.url+"/getallPlanters");
 }

 getAllPlantersInRange(minCost:number, maxCost:number): Observable<any>{
     return this.h.get<any[]>(this.url+"/getplanters/"+minCost+"/"+maxCost);

 }
}
