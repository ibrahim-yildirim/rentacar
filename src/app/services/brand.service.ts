
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Brand  from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>("http://localhost:3000/brands")
  }

  addBrand(brand:Brand):Observable<Brand>{

    return this.httpClient.post<Brand>("http://localhost:3000/brands",brand)

  }
  getBrandById(val:number):Observable<Brand>{
    return this.httpClient.get<Brand>("http://localhost:3000/brands/"+val)
  }

  updateBrand(brand:Brand):Observable<Brand>{
    return this.httpClient.put<Brand>("http://localhost:3000/brands/"+brand.id,brand)
  }

  deleteBrand(val:number):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/brands/"+val)
  }

}
