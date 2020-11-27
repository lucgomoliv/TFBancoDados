import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../general.service';
import * from 'jquery-modal';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.css'],
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  constructor(private service: GeneralService) {}

  name = this.constructor.name.replace('Component', '');

  @ViewChild('addModal', {static: false}) el: ElementRef;

  objectKeys = Object.keys;
  numberParse = Number.parseInt;

  items = [];

  item: any;

  headers = [
    {name: '', display: ''}
  ];

  ngOnInit() {
    this.get();
  }

  get() {
    this.service.gets(this.constructor.name).subscribe(data => this.items = data);
  }

  post() {
    this.fixID();
    this.service.posts(this.constructor.name, this.item)
      .subscribe(() => null, () => null, () => this.get());
  }

  put() {
    this.fixID();
    this.service.puts(this.constructor.name, this.item[Object.keys(this.item)[0]], this.item)
      .subscribe(() => null, () => null, () => this.get());
  }

  delete(id: number) {
    console.log(id);
    this.service.deletes(this.constructor.name, id)
      .subscribe(() => null, () => null, () => this.get());
  }

  fixID() {
    this.item[Object.keys(this.item)[0]] = Number.parseInt(this.item[Object.keys(this.item)[0]], 10);
  }

  display(name: string) {
    return name.replace('_', ' ');
  }

  resetModel() {
    this.item = new this.item.constructor();
  }

  openModal() {
    $('#addModal').modal('show');
  }
}
