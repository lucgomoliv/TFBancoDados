import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

export class Curso {
  Nome_Curso = '';
  Periodos: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: '../base/base.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent extends BaseComponent {

  item = new Curso();

  varios = true;

  fks = ['fk_Periodo_Id_Periodo', 'fk_Curso_Id_Curso'];

  interaction = [['Periodos'], ['possui']];

  headers = [
    {name: 'Id_Curso', display: 'ID'},
    {name: 'Nome_Curso', display: 'Nome'}
  ];

  popularInteraction() {
    this.items.forEach(element => {
      let aux = '';
      this.interactions['possui'].filter((v) => v['fk_Curso_Id_Curso'] === element['Id_Curso'])
        .forEach(element2 => {
          aux += element2['fk_Periodo_Id_Periodo'] + '; ';
        });
      element['Periodos'] = aux;
    });
  }

  post() {
    Object.keys(this.interactionIds).forEach((element, index) => {
      this.interactionIds[element].forEach(element2 => {
        this.addInteraction(this.interaction[1][index], element2,
          this.item['Id_Curso'] || Number.parseInt(this.item[Object.keys(this.items)[0]] + 1 || 1, 10));
      });
    });
    super.post();
  }

  openModal() {
    super.openModal();
  }

}
