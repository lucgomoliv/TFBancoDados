import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-cursos',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent extends BaseComponent {

  item = new Curso();

  headers = [
    {name: 'Id_Curso', display: 'ID'},
    {name: 'Nome_Curso', display: 'Nome'},
  ];
}

export class Curso {
  Id_Curso: number;
  Nome_Curso: string;
}
