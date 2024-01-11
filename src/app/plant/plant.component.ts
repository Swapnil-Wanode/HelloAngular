import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IplantService } from '../iplant.service';
import { Plant } from '../Plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plant: Plant=new Plant();
  plants:Plant[] = []; 

  list:Plant[]=[];
  constructor(private m: IplantService, private r:Router) { }

  addPlant():void{
    this.m.addPlant(this.plant).subscribe((p)=>this.plant= p);
  }
  updatePlant():void{
    this.m.updatePlant(this.plant).subscribe((p)=>this.plant= p);
  }

  deletePlant():void{
    this.m.deletePlant(this.plant.plantId).subscribe((p)=> this.plant=p);
  }
  viewById():void{
    this.m.getPlantById(this.plant.plantId).subscribe((p)=>this.plant=p);
  }

  viewallplant():void{
    this.m.getAllPlant().subscribe((p)=>this.plants=p);
  }

  viewByName():void{
      this.m.getPlantByCommonName(this.plant.commonName).subscribe((p)=>this.plant=p)
  }
  viewByType():void{
    this.m.getPlantByType(this.plant.typeOfPlant).subscribe((p)=>this.list=p);
  }

  // goto():void{
  //     this.r.navigate(['/Home']);
  // }
  

  ngOnInit(): void {
  }

}
