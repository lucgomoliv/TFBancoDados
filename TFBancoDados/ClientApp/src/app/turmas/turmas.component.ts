import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

export class Turma {
  Id_Turma = 0;
  Horario_Inicio = '';
  Horario_Fim = '';
  Dia_Semana = '';
}

@Component({
  selector: 'app-turmas',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent extends BaseComponent {

  item = new Turma();

  interaction = [['Professores', 'Periodos', 'Disciplinas', 'Salas'], ['lecionar', 'pertence', 'ofertar_Turma_Disciplina_Sala']];

  headers = [
    {name: 'Id_Turma', display: 'ID'},
    {name: 'Horario_Inicio', display: 'Horário de Início'},
    {name: 'Horario_Fim', display: 'Horário de Fim'},
    {name: 'Dia_Semana', display: 'Dia da Semana'},
  ];
}
