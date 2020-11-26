import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-turmas',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent extends BaseComponent {

  item: Turma;

  headers = [
    {name: 'Id_Turma', display: 'ID'},
    {name: 'Horario_Inicio', display: 'Horário de Início'},
    {name: 'Horario_Fim', display: 'Horário de Fim'},
    {name: 'Dia_Semana', display: 'Dia da Semana'},
  ];
}

export class Turma {
  Id_Turma: number;
  Horario_Inicio: string;
  Horario_Fim: string;
  Dia_Semana: string;
}
