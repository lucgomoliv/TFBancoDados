import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../general.service';
import * as $ from 'jquery';
import { stringify } from 'querystring';

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

  item: any;
  items = [];
  itemsInteraction = [];
  interaction = [];
  interactionIds = [];
  options = {};
  option;
  fks: string[] = [];
  editar = false;

  headers = [
    {name: '', display: ''}
  ];

  ngOnInit() {
    this.interaction.forEach(v => {
      this.service.gets(v + 'sComponent').subscribe(data => this.options[v] = data);
    });
    this.get();
  }

  addInteraction(id1: number, id2: number, id3?: number) {
    const obj = {};
    obj[this.fks[0]] = id1;
    obj[this.fks[1]] = id2;
    if (id3) { obj[this.fks[2]] = id3; }
    this.itemsInteraction.push(obj);
  }

  addId(id: number) {
    this.interactionIds.push(id);
  }

  log(object) {
    console.log(object);
  }

  get() {
    this.service.gets(this.constructor.name).subscribe(data => this.items = data);
  }

  post() {
    this.interactionIds.forEach(element => {
      this.addInteraction(element, Number.parseInt(this.item[Object.keys(this.item)[0]], 10));
    });
    this.item['possui'] = this.itemsInteraction;
    this.fixID();
    console.log(this.item);
    this.editar ? this.put() :
    this.service.posts(this.constructor.name, this.item)
      .subscribe(() => null, () => null, () => this.get());
  }

  put() {
    this.fixID();
    this.service.puts(this.constructor.name, this.item[Object.keys(this.item)[0]], this.item)
      .subscribe(() => null, () => null, () => this.get());
  }

  delete(id: number) {
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
}
