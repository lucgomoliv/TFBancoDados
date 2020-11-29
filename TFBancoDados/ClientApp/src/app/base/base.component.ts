import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.css'],
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  constructor(protected service: GeneralService) {}

  name = this.constructor.name.replace('Component', '');

  objectKeys = Object.keys;
  numberParse = Number.parseInt;

  item: any;
  items = [];
  itemsInteraction = {};
  interaction = [[], []];
  interactions = {};
  interactionIds = {};
  options = {};
  option = {};
  fks: string[] = [];
  editar = false;
  varios = false;

  headers = [
    {name: '', display: ''}
  ];

  ngOnInit() {
    this.interaction[0].forEach(v => {
      this.service.gets(v).subscribe(data => this.options[v] = data);
      this.interactionIds[v] = [];
      this.option[v] = 0;
      this.headers.push({name: v, display: v});
    });
    this.get();
  }

  popularInteraction() {}

  addInteraction(inter: string, id1: number, id2: number, id3?: number) {
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

  containsID(key: string) {
    return key.startsWith('Id', 0);
  }

  get() {
    if (this.interaction[1].length) {
      this.interaction[1].forEach(element => {
        this.service.gets(element).subscribe(value => this.interactions[element] = value, () => null,
        () => this.service.gets(this.normalizeName())
          .subscribe(data => this.items = this.normalize(data), () => null, () => this.popularInteraction()));
      });
    } else {
      this.service.gets(this.normalizeName())
          .subscribe(data => this.items = this.normalize(data), () => null, () => this.popularInteraction());
    }
  }

  post() {
    this.interaction[1].forEach(v => {
      this.item[v] = this.itemsInteraction[v];
    });
    this.editar ? this.put() :
      this.update(this.service.posts(this.normalizeName(), this.item));
  }

  put() {
    this.update(this.service.puts(this.normalizeName(), this.item[Object.keys(this.item)[0]], this.item));
  }

  delete(id: number) {
    this.update(this.service.deletes(this.normalizeName(), id));
  }

  update(observable: Observable<any>) {
    observable.subscribe(() => null, () => null, () => this.get());
  }

  fixID() {
    this.item[Object.keys(this.item)[0]] = Number.parseInt(this.item[Object.keys(this.item)[0]], 10);
  }

  display(name: string) {
    return name.replace('_', ' ');
  }

  resetModel() {
    this.itemsInteraction = {};
    Object.keys(this.option).forEach(v => this.option[v] = null);
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

  existInInteraction(inter: string) {
    return this.interaction[0].some(v => v === inter);
  }

  openModal() {
    this.interaction[0].forEach(v => {
      this.interactionIds[v] = this.item[v].slice(0, -2).split('; ').map(x => +x);
    });
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

  normalizeName() {
    return this.constructor.name.replace('Component', '');
  }
}
