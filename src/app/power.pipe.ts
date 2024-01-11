import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(n:number,pow:number): number{
    let pw:number=1;
    for(let i=0;i<pow;i++) {
      pw=pw*n;
    }
    return pw;
  }

}
