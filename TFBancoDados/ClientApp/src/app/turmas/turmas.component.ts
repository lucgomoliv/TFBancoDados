import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  constructor(private service: GeneralService) {}

  items = [];

  item: Turma;

  headers = [
    {name: 'Id_Turma', display: 'ID'},
    {name: 'Horario_Inicio', display: 'Horário de Início'},
    {name: 'Horario_Fim', display: 'Horário de Fim'},
    {name: 'Dia_Semana', display: 'Dia da Semana'},
  ];

  ngOnInit() {
    this.getTurmas();
  }

  getTurmas() {
    this.service.getTurmas().subscribe(data => this.items = data);
  }

}

export class Turma {
  Id_Turma: number;
  Horario_Inicio: string;
  Horario_Fim: string;
  Dia_Semana: string;
}
