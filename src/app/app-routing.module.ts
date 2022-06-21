import { LoginComponent } from './components/pages/login/login.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './common/brand/addbrand/addbrand.component';
import { ColorlistComponent } from './common/colorlist/colorlist.component';
import { AddcarComponent } from './components/pages/addcar/addcar.component';
import { BrandupdateComponent } from './components/pages/brandupdate/brandupdate.component';
import { CarlistComponent } from './components/pages/carlist/carlist.component';
import { RentcarComponent } from './components/pages/rentcar/rentcar.component';
import { LoginGuard } from './guard/login.guard';
// import { CardetailComponent } from './components/pages/cardetail/cardetail.component';



const routes: Routes = [

  {path:"", component:CarlistComponent},
  {path:"addbrand",  component:AddbrandComponent},
  {path:"updatebrand/:id",  component:BrandupdateComponent},
  {path:"addcar",  component:AddcarComponent},
  {path:"cars/:id",  component:CarlistComponent},
  {path:"cars/:id",  component:ColorlistComponent},
  {path:"rent/:id",  component:RentcarComponent},
  {path:"login",  component:LoginComponent},
  // {path:"detail",  component:CardetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
