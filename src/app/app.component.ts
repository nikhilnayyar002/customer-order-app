import { Component } from '@angular/core';
import config from '../config/config';
import { Customer } from './Modal/JSONModel';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  configData=config;
  customer:Customer;
  errorMsg:string;


  constructor(private ms:MainService) {

  }

  ngOnInit(): void {
    this.setscrollEvent();
    this.ms.getCustomerJson().subscribe((data)=>{
      this.customer=data as Customer;
    },
    (error:Error)=>{
      this.errorMsg=error.message;
    })
  }

  setscrollEvent() {
    window.onscroll = ()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        (<HTMLElement>document.querySelector("#nav-bar-logo")).style.fontSize = "1.5rem";
      } else {
        (<HTMLElement>document.querySelector("#nav-bar-logo")).style.fontSize = "3.5rem";
      }
    }
  }

}
