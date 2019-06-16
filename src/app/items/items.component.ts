import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Modal/JSONModel';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() items:Array<Item>;
  
  constructor() { }

  ngOnInit() {
  }

}
