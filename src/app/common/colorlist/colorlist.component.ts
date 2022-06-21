import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { Car } from 'src/app/models/car';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-colorlist',
  templateUrl: './colorlist.component.html',
  styleUrls: ['./colorlist.component.css']
})
export class ColorlistComponent implements OnInit {

  colors:Color[];
  constructor(private colorService:ColorService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private accountService:AccountService) { }

    cars:Car[];
  ngOnInit(): void {
    this.getColors()
    this.getColor()

  }

  getColor(){
    this.activatedRoute.params.subscribe(params =>{     
      if(params['id']) {        
        this.colorService.getColorById(params['id']).subscribe(data=>{         
          this.colors=data       
        })     
      }  else 
      {       
        this.colorService.getColors().subscribe(data=>{         
          this.colors=data       
        })     
      }   
    })}

  getColors(){
    this.colorService.getColors().subscribe(data=>{
      this.colors=data
    })
  }

  isLoggedIn(){
    return this.accountService.isLoggedIn()
  }

  logOut(){
    this.accountService.logOut()
  }


}
