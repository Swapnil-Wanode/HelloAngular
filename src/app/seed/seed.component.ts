import { Component, OnInit } from '@angular/core';
import { IseedService } from '../iseed.service';
import { Seed } from '../Seed';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {

  seed: Seed=new Seed();
  seeds:Seed[] = [];
  list:Seed[]=[];
  constructor(private m: IseedService) { }
  

  addSeed():void{
    this.m.addSeed(this.seed).subscribe((p)=>this.seed= p);
  }
  updateSeed():void{
    this.m.updateSeed(this.seed).subscribe((p)=>this.seed= p);
  }

  deleteSeed():void{
    this.m.deleteSeed(this.seed.seedId).subscribe((p)=> this.seed=p);
  }
  viewById():void{
    this.m.getSeedById(this.seed.seedId).subscribe((p)=>this.seed=p);
  }

  viewallseed():void{
    this.m.getAllSeed().subscribe((p)=>this.seeds=p);
  }

  viewByName():void{
      this.m.getSeedByCommonName(this.seed.commonName).subscribe((p)=>this.seed=p)
  }
  viewByType():void{
    this.m.getSeedBySeedType(this.seed.typeOfSeeds).subscribe((p)=>this.list=p);
  }

  

  ngOnInit(): void {
  }

}
