import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.css'],
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  constructor(private service: GeneralService) {}

  name = this.constructor.name.replace('Component', '');

  loaded = false;

  items = [];

  item: any;

  headers = [
    {name: '', display: ''}
  ];

  ngOnInit() {
    console.log(this.item);
    console.log(Object.keys(this.item));
    this.get();
  }

  get() {
    this.service.gets(this.constructor.name).subscribe(data => this.items = data);
  }

}
