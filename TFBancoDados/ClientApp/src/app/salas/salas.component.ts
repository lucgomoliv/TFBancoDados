import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';


export class Sala {
  Id_Sala = 0;
}

@Component({
  selector: 'app-salas',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./salas.component.css']
})

export class SalasComponent extends BaseComponent {

  item = new Sala();

  headers = [
    {name: 'Id_Sala', display: 'ID'},
  ];

  post() {
    this.fixID();
    super.post();
  }
}

