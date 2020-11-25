import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private service: GeneralService) {}

  items = [];

  item: Curso;

  headers = [
    {name: 'Id_Curso', display: 'ID'},
    {name: 'Nome_Curso', display: 'Nome'},
  ];

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this.service.getCursos().subscribe(data => this.items = data);
  }

}

export class Curso {
  Id_Curso: number;
  Nome_Curso: string;
}
