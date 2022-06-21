
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators  } from '@angular/forms'
import Brand from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css'],
  providers:[BrandService]
})
export class AddbrandComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    ) { }

  brand:Brand = new Brand()
  brandAddForm:FormGroup
  brands:Brand[]

  createCategoryAddForm(){
    this.brandAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
    })
  }
  ngOnInit(): void {
    this.getBrand()
    this.createCategoryAddForm()
  }

  getBrand(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }

  add(){
    if(this.brandAddForm.valid){
      this.brand=Object.assign({},this.brandAddForm.value)
    }

    this.brandService.addBrand(this.brand).subscribe(data=>{
      console.log(data)        
      alert(data.name +"başarılıyla eklendi")
      location.reload()
    })
  }

}
