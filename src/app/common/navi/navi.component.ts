import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  // colors:Color[];
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  //   this.getColors()

  }

  // getColors(){
  //   this.colorService.getColors().subscribe(data=>{
  //     this.colors=data
  //   })
  // }

  isLoggedIn(){
    return this.accountService.isLoggedIn()
  }

  logOut(){
    this.accountService.logOut()
  }

}
