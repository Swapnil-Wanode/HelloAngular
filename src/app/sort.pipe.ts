import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './Person';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(persons:Person[],n:number): any {
    if(n==1)
        persons.sort((a,b)=>a.pid - b.pid);
    else if(n==2)
        persons.sort((a,b)=>a.pname.localeCompare(b.pname));
    else if(n==3)
        persons.sort((a,b)=>a.page-b.page);
    return persons;
  }

}
