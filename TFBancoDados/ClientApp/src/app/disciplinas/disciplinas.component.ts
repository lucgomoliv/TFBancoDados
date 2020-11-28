import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

export class Disciplina {
  Id_Materia = 0;
  Nome_Materia = '';
}

@Component({
  selector: 'app-disciplinas',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent extends BaseComponent {

  item = new Disciplina();

  headers = [
    {name: 'Id_Materia', display: 'ID'},
    {name: 'Nome_Materia', display: 'Nome'},
  ];

}
