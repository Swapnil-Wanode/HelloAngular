import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  getemployee():string{
    return "Hello my name is swapnil wanode";
  }
  
}
