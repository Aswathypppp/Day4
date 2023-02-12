
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})

export class DistrictComponent{
  districts:any
  constructor(private here:HeroService,private router:Router){
    this.districts=this.here.getData();
  }
  gotoHere(id:any)
  {
       localStorage.setItem('id',id)
           this.router.navigate(['/single'])
    }
 
  }

