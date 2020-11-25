import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor(private service: GeneralService) {}

  items = [];

  Professor: Professor;

  headers = [
    {name: 'Id_Professor', display: 'ID'},
    {name: 'Nome', display: 'Nome'}
  ];

  ngOnInit() {
    this.getProfessores();
  }

  getProfessores() {
    this.service.getProfessores().subscribe(data => this.items = data);
  }

}

export class Professor {
  Id_Professor: number;
  Nome: string;
}
