import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

export class Turma {
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

  fksProfessor = ['fk_Professor_Id_Professor', 'fk_Turma_Id_Turma'];
  fksPeriodo = ['fk_Periodo_Id_Periodo', 'fk_Turma_Id_Turma'];
  fksOfertar = ['fk_Turma_Id_Turma', 'fk_Disciplina_Id_Materia', 'fk_Sala_Id_Sala'];

  headers = [
    {name: 'Id_Turma', display: 'ID'},
    {name: 'Horario_Inicio', display: 'Horário de Início'},
    {name: 'Horario_Fim', display: 'Horário de Fim'},
    {name: 'Dia_Semana', display: 'Dia da Semana'},
  ];

  popularInteraction() {
    this.items.forEach(element => {
      let aux = '';
      this.interactions['lecionar'].filter((v) => v['fk_Turma_Id_Turma'] === element['Id_Turma'])
        .forEach(element2 => {
          aux += element2['fk_Professor_Id_Professor'];
        });
      element['Professores'] = aux;
      aux = '';
      this.interactions['pertence'].filter((v) => v['fk_Turma_Id_Turma'] === element['Id_Turma'])
        .forEach(element2 => {
          aux += element2['fk_Periodo_Id_Periodo'];
        });
      element['Periodos'] = aux;
      aux = '';
      this.interactions['ofertar_Turma_Disciplina_Sala'].filter((v) => v['fk_Turma_Id_Turma'] === element['Id_Turma'])
        .forEach(element2 => {
          aux += element2['fk_Disciplina_Id_Materia'];
        });
      element['Disciplinas'] = aux;
      aux = '';
      this.interactions['ofertar_Turma_Disciplina_Sala'].filter((v) => v['fk_Turma_Id_Turma'] === element['Id_Turma'])
        .forEach(element2 => {
          aux += element2['fk_Sala_Id_Sala'];
        });
      element['Salas'] = aux;
    });
  }

  post() {
    this.addInteraction('pertence',
                        Number.parseInt(this.option['Periodos'], 10),
                        this.item['Id_Turma'] || 1);
    this.addInteraction('lecionar',
                        Number.parseInt(this.option['Professores'], 10),
                        this.item['Id_Turma'] || 1);
    this.addInteraction('ofertar_Turma_Disciplina_Sala',
                        this.item['Id_Turma'] || 1,
                        Number.parseInt(this.option['Disciplinas'], 10),
                        Number.parseInt(this.option['Salas'], 10));
    super.post();
  }

  addInteraction(inter: string, id1: number, id2: number, id3?: number) {
    const obj = {};
    if (inter === 'lecionar') {
      obj[this.fksProfessor[0]] = id1;
      obj[this.fksProfessor[1]] = id2;
    } else if (inter === 'pertence') {
      obj[this.fksPeriodo[0]] = id1;
      obj[this.fksPeriodo[1]] = id2;
    } else {
      obj[this.fksOfertar[0]] = id1;
      obj[this.fksOfertar[1]] = id2;
      obj[this.fksOfertar[2]] = id3;
    }
    if (!this.itemsInteraction[inter]) { this.itemsInteraction[inter] = []; }
    this.itemsInteraction[inter].push(obj);
  }

  openModal() {
    this.interaction[0].forEach(element => {
      $('#' + element).val(this.item[element]);
      this.option[element] = this.item[element];
    });
    super.openModal();
  }

  idToDisplay(id: string, key: string) {
    if (this.options[key] !== undefined && (key === 'Professores' || key === 'Disciplinas')) {
      switch (key) {
        case 'Professores':
          return this.options[key].filter(v => v['Id_Professor'] === Number.parseInt(id, 10))[0]['Nome'];
        case 'Disciplinas':
          return this.options[key].filter(v => v['Id_Materia'] === Number.parseInt(id, 10))[0]['Nome_Materia'];
      }
    } else { return id; }
  }
}
