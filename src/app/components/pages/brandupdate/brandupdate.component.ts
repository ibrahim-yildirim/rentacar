
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Brand from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brandupdate',
  templateUrl: './brandupdate.component.html',
  styleUrls: ['./brandupdate.component.css']
})
export class BrandupdateComponent implements OnInit {

  brand:Brand;
  model:Brand= new Brand();
  selectedId:number=1
  brands: Brand[];

  constructor(private formBuilder:FormBuilder,
     private brandService:BrandService,
     private activatedRoute:ActivatedRoute) { }

     brandAddForm:FormGroup
     updateBrandAddForm(){
      this.brandAddForm=this.formBuilder.group({
        id:[this.brand.id,Validators.required],
        name:[this.brand.name,Validators.required]
      })
    }
  

    ngOnInit(): void {
      this.getBrand()
      this.getBrandById()
    }
    getBrand(){
      this.brandService.getBrands().subscribe(data=>{
        this.brands=data
      })
    }
    update(val:number){
      if(this.brandAddForm.valid){
        this.brand=Object.assign({},this.brandAddForm.value)
      }
      this.brandService.updateBrand(this.brand).subscribe(data=>{
        alert(data.name +" başarılıyla güncellendi")
      })
    }
  
  
    getBrandById(){
  
      this.activatedRoute.params.subscribe(params=>{
        if(params["id"])
        this.selectedId=params["id"]
      })
      this.brandService.getBrandById(this.selectedId).subscribe(data => {
        this.brand = data
        this.updateBrandAddForm()
      })
  
    }

    deleteBrand(val:number){
           if(confirm("Are you sure to delete ")) {
          this.brandService.deleteBrand(val).subscribe()
          location.reload() }    

   }
  
  }
  