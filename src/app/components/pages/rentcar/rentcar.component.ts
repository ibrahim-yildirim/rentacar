import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css']
})
export class RentcarComponent implements OnInit {

  car:Car;
  constructor(private carService:CarService,
    private httpClient:HttpClient,
    private activatedRoute:ActivatedRoute) { }

    cars:Car[]

  ngOnInit(): void {
    this.getCars()
    
  }


  // getCars(){
  //   this.activatedRoute.params.subscribe(params =>{     
  //     if(params['id']) {        
  //       this.carService.getCarBrandId(params['id']).subscribe(data=>{         
    
  //       })     
  //     }  else 
  //     {       
  //       this.carService.getCars().subscribe(data=>{         
  
  //       })     
  //     }   
  //   })}

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
      }
      )}
}
