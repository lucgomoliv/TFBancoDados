import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-periodos',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent extends BaseComponent {

  item = new Periodo();

  headers = [
    {name: 'Id_Periodo', display: 'ID'},
  ];

}

export class Periodo {
  Id_Periodo = 0;
}
