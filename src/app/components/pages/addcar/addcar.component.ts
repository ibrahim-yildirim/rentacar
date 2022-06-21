import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  car:Car;
  model:Car= new Car();
  selectedId:number=1
  brands: Car[];

  constructor(private formBuilder:FormBuilder,
    private carService:CarService) { }

  carAddForm:FormGroup

  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      brandName:["",Validators.required],
      description:["",Validators.required],
      logo:["",Validators.required],
    })
  }

  ngOnInit(): void {
    this.getCar()
    this.createCarAddForm()

  }
  
  getCar(){
    this.carService.getCars().subscribe(data=>{
      this.brands=data
    })
  }

  add(){
    if(this.carAddForm.valid){
      this.car=Object.assign({},this.carAddForm.value)
    }

    this.carService.addCar(this.car).subscribe(data=>{
      console.log(data)        
      alert(data.brandName +"başarılıyla eklendi")
      location.reload()
    })
  }

}
