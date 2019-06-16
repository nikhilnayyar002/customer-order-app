import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../Modal/JSONModel';

type User={
  name:string,
  id:string
};

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  @Input() customer:Customer;

  constructor() { }

  ngOnInit() {
  }

}
