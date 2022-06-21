
import { Component, OnInit } from '@angular/core';
import Brand from 'src/app/models/brand';
import { AccountService } from 'src/app/services/account.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[];
  selectedCategory: Brand;
  filterText:string
  constructor(private brandService:BrandService,
    private accountService:AccountService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }
  changeCategory():void{
    window.location.href="/product/"+this.selectedCategory.id

  }

  deleteBrand(val:number){  
   if(confirm("Are you sure to delete ")) { 
    this.brandService.deleteBrand(val).subscribe()}      
  }

  isLoggedIn(){
    return this.accountService.isLoggedIn()
  }

  logOut(){
    this.accountService.logOut()
  }

  
}