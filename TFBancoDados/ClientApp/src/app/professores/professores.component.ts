import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

export class Professor {
  Id_Professor = 0;
  Nome = '';
}

@Component({
  selector: 'app-professores',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent extends BaseComponent {

  item = new Professor();

  headers = [
    {name: 'Id_Professor', display: 'ID'},
    {name: 'Nome', display: 'Nome'}
  ];
}
