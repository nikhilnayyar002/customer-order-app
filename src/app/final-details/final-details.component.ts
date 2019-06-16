import { Component, OnInit, Input } from '@angular/core';
import { Customer, Item } from '../Modal/JSONModel';

@Component({
  selector: 'app-final-details',
  templateUrl: './final-details.component.html',
  styleUrls: ['./final-details.component.scss']
})
export class FinalDetailsComponent implements OnInit {

  @Input() customer:Customer;
  constructor() { }

  ngOnInit() {
  }

  getTotalTax(customer:Customer) {
    let taxTotal=0;
    for(let item of customer.items)
      taxTotal+=this.getItemTax(item)
    return taxTotal;
  }
  getTotalItems(customer:Customer) {
    let itemsTotal=0;
    for(let item of customer.items)
      itemsTotal+=item.quantity
    return itemsTotal;   
  }
  getTotalAmount(customer:Customer) {
    let taxOnItem=0,itemPriceTotal=0;
    for(let item of customer.items) {
      itemPriceTotal+=this.getItemAmount(item)
    }
    return itemPriceTotal;
  }

  getItemTax(item:Item) {
    return item.price*item.tax*item.quantity;
  }
  getItemAmount(item:Item) {
    return (item.price*item.quantity+this.getItemTax(item))
  }
  
  
}
