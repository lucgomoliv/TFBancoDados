import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../general.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.css'],
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  constructor(private service: GeneralService) {}

  name = this.constructor.name.replace('Component', '');

  objectKeys = Object.keys;
  numberParse = Number.parseInt;

  item: any;
  items = [];
  itemsInteraction = {};
  interaction = [[], []];
  interactionIds = {};
  options = {};
  option = {};
  fks: string[] = [];
  editar = false;

  headers = [
    {name: '', display: ''}
  ];

  ngOnInit() {
    this.interaction[0].forEach(v => {
      this.service.gets(v).subscribe(data => this.options[v] = data);
      this.interactionIds[v] = [];
      this.option[v] = 0;
    });
    this.get();
  }

  addInteraction(inter: string, id1: number, id2: number) {
    const obj = {};
    obj[this.fks[0]] = id1;
    obj[this.fks[1]] = id2;
    if (!this.itemsInteraction[inter]) { this.itemsInteraction[inter] = []; }
    this.itemsInteraction[inter].push(obj);
  }

  addId(key: string, id: number) {
    this.interactionIds[key].push(id);
  }

  log(object) {
    console.log(object);
  }

  get() {
    this.service.gets(this.constructor.name.replace('Component', ''))
      .subscribe(data => {this.items = this.normalize(data); console.log(this.items); });
  }

  post() {
    Object.keys(this.interactionIds).forEach((element, index) => {
      this.interactionIds[element].forEach(element2 => {
        this.addInteraction(this.interaction[1][index], element2, Number.parseInt(this.item[Object.keys(this.item)[0]], 10));
      });
    });
    this.interaction[1].forEach(v => {
      this.item[v] = this.itemsInteraction[v];
    });
    console.log(this.item);
    this.fixID();
    this.editar ? this.put() :
    this.service.posts(this.constructor.name.replace('Component', ''), this.item)
      .subscribe(() => null, () => null, () => this.get());
  }

  put() {
    this.service.puts(this.constructor.name.replace('Component', ''), this.item[Object.keys(this.item)[0]], this.item)
      .subscribe(() => null, () => null, () => this.get());
  }

  delete(id: number) {
    this.service.deletes(this.constructor.name.replace('Component', ''), id)
      .subscribe(() => null, () => null, () => this.get());
  }

  fixID() {
    this.item[Object.keys(this.item)[0]] = Number.parseInt(this.item[Object.keys(this.item)[0]], 10);
  }

  display(name: string) {
    return name.replace('_', ' ');
  }

  resetModel() {
    this.interactionIds = {};
    this.interaction[0].forEach(v => {
      this.interactionIds[v] = [];
      $('#' + v).val(0);
    });
    this.item = new this.item.constructor();
    this.editar = false;
  }

  objectToItem(object) {
    return Object.assign(new this.item.constructor(), object);
  }

  openModal() {
    this.editar = true;
    $('#btnAddModal').click();
  }

  closeModal() {
    this.editar = false;
    $('#btnCancel').click();
  }

  normalize(objs) {
    objs.forEach(element => {
      Object.keys(element).forEach((key) => (element[key] == null) && delete element[key]);
    });
    return objs;
  }
}
