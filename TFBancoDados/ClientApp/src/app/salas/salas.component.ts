import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

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
}

export class Sala {
  Id_Sala = 0;
}
