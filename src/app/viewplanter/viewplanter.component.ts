import { Component, OnInit } from '@angular/core';
import { IplanterService } from '../iplanter.service';
import { Planter } from '../Planter';

@Component({
  selector: 'app-viewplanter',
  templateUrl: './viewplanter.component.html',
  styleUrls: ['./viewplanter.component.css']
})
export class ViewplanterComponent implements OnInit {

  planter: Planter= new Planter();
  planters:Planter[] = []; 
  list:Planter[]=[];

  constructor(private p: IplanterService) { }

  
   addPlanter(): void {
     this.p.addPlanter(this.planter).subscribe((m) => (this.planter = m));
   }

   updatePlanter(): void {
     this.p.updatePlanter(this.planter).subscribe((m) => (this.planter = m));
   }

   deletePlanter(): void {
     this.p.deletePlanter(this.planter.planterId).subscribe((m) => (this.planter = m));
   }

   getPlanterById(): void {
     this.p.getPlanterById(this.planter.planterId).subscribe((m) => (this.planter = m));
   }

   getAllPlanters(): void {
     this.p.getAllPlanters().subscribe((m) => (this.planters = m));
   }


  ngOnInit(): void {
  }

}
