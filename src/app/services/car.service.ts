import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>("http://localhost:3000/cars")
  }


  updateCar(car:Car):Observable<Car>{
    return this.httpClient.put<Car>("http://localhost:3000/cars/"+car.id,car)
  }

  addCar(car:Car):Observable<Car>{

    return this.httpClient.post<Car>("http://localhost:3000/cars",car)

  }

  deleteCar(val:number):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/cars/"+val)
  }

  getCarById(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars/"+val)
  }

  getCarBrandId(val:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars?brandId=" + (val)
    return this.httpClient.get<Car[]>(newPath)
  }

}
