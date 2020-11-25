import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  constructor(private service: GeneralService) {}

  items = [];

  item: Disciplina;

  headers = [
    {name: 'Id_Materia', display: 'ID'},
    {name: 'Nome_Materia', display: 'Nome'},
  ];

  ngOnInit() {
    this.getDisciplinas();
  }

  getDisciplinas() {
    return this.service.getDisciplinas().subscribe(data => this.items = data);
  }

}

export class Disciplina {
  Id_Materia: number;
  Nome_Materia: string;
}
