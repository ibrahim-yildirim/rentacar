import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  cars:Car[]
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private accountService:AccountService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.activatedRoute.params.subscribe(params =>{     
      if(params['id']) {        
        this.carService.getCarBrandId(params['id']).subscribe(data=>{         
          this.cars=data       
        })     
      }  else 
      {       
        this.carService.getCars().subscribe(data=>{         
          this.cars=data       
        })     
      }   
    })}

  deleteCar(val:number){  
    if(confirm("Are you sure to delete ")) { 
     this.carService.deleteCar(val).subscribe()}      
     location.reload()
   }

   isLoggedIn(){
    return this.accountService.isLoggedIn()
  }

  logOut(){
    this.accountService.logOut()
  }

}
