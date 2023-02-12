import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single: any;
  constructor(private hero: HeroService){}
  ngOnInit():void{
    let id=localStorage.getItem('id')
    console.log(id);
    
    let singleDataArray=this.hero.getData()
    console.log(singleDataArray);
    this.single=singleDataArray.filter(e=>e.name===id)
    console.log(this.single)
    
  }

}
