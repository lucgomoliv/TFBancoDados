import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  constructor(private service: GeneralService) {}

  items = [];

  item: Sala;

  headers = [
    {name: 'Id_Sala', display: 'ID'},
  ];

  ngOnInit() {
    this.getSalas();
  }

  getSalas() {
    this.service.getSalas().subscribe(data => this.items = data);
  }

}

export class Sala {
  Id_Sala: number;
}
