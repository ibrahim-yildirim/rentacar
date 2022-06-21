// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Car } from 'src/app/models/car';
// import { AccountService } from 'src/app/services/account.service';
// import { CarService } from 'src/app/services/car.service';

// @Component({
//   selector: 'app-cardetail',
//   templateUrl: './cardetail.component.html',
//   styleUrls: ['./cardetail.component.css']
// })
// export class CardetailComponent implements OnInit {

//   cars:Car[]
//   constructor(private carService:CarService,
//     private activatedRoute:ActivatedRoute,
//     private accountService:AccountService) { }

//   ngOnInit(): void {
//     this.getCars()
//   }

//   getCars(){
//     this.activatedRoute.params.subscribe(params =>{     
//       if(params['id']) {        
//         this.carService.getCarBrandId(params['id']).subscribe(data=>{         
//           this.cars=data       
//         })     
//       }  else 
//       {       
//         this.carService.getCars().subscribe(data=>{         
//           this.cars=data       
//         })     
//       }   
//     })}

//   deleteCar(val:number){  
//     if(confirm("Are you sure to delete ")) { 
//      this.carService.deleteCar(val).subscribe()}      
//    }

//    isLoggedIn(){
//     return this.accountService.isLoggedIn()
//   }

//   logOut(){
//     this.accountService.logOut()
//   }

// }
