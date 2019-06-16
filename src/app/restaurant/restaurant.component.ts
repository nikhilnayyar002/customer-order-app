import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../Modal/JSONModel';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant;
  constructor() { }

  ngOnInit() {
  }

}
