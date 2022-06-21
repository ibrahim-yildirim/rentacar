import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddbrandComponent } from './common/brand/addbrand/addbrand.component';
import { BrandComponent } from './common/brand/brand.component';
import { BrandupdateComponent } from './components/pages/brandupdate/brandupdate.component';
import { ColorlistComponent } from './common/colorlist/colorlist.component';
import { AddcarComponent } from './components/pages/addcar/addcar.component';
import { CarlistComponent } from './components/pages/carlist/carlist.component';
import { RentcarComponent } from './components/pages/rentcar/rentcar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/pages/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    AddbrandComponent,
    BrandupdateComponent,
    ColorlistComponent,
    CarlistComponent,
    AddcarComponent,
    RentcarComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
