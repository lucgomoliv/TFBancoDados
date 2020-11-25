import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class PeriodosComponent implements OnInit {

  constructor(private service: GeneralService) {}

  items = [];

  item: Periodo;

  headers = [
    {name: 'Id_Periodo', display: 'ID'},
  ];

  ngOnInit() {
    this.getPeriodos();
  }

  getPeriodos() {
    this.service.getPeriodos().subscribe(data => this.items = data);
  }

}

export class Periodo {
  Id_Periodo: number;
}
