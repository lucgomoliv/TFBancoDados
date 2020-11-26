import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-disciplinas',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent extends BaseComponent {

  item: Disciplina;

  headers = [
    {name: 'Id_Materia', display: 'ID'},
    {name: 'Nome_Materia', display: 'Nome'},
  ];

}

export class Disciplina {
  Id_Materia: number;
  Nome_Materia: string;
}
