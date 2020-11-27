import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  gets(component: string) {
    switch (component) {
      case 'ProfessoresComponent': return this.getProfessores();
      case 'TurmasComponent': return this.getTurmas();
      case 'SalasComponent': return this.getSalas();
      case 'PeriodosComponent': return this.getPeriodos();
      case 'DisciplinasComponent': return this.getDisciplinas();
      case 'CursosComponent': return this.getCursos();
    }
  }

  posts(component: string, object: any) {
    switch (component) {
      case 'ProfessoresComponent': return this.postProfessor(object);
      case 'TurmasComponent': return this.postTurma(object);
      case 'SalasComponent': return this.postSala(object);
      case 'PeriodosComponent': return this.postPeriodo(object);
      case 'DisciplinasComponent': return this.postDisciplina(object);
      case 'CursosComponent': return this.postCurso(object);
    }
  }

  puts(component: string, id: number, object: any) {
    switch (component) {
      case 'ProfessoresComponent': return this.putProfessor(object);
      case 'TurmasComponent': return this.putTurma(object);
      case 'SalasComponent': return this.putSala(object);
      case 'PeriodosComponent': return this.putPeriodo(object);
      case 'DisciplinasComponent': return this.putDisciplina(object);
      case 'CursosComponent': return this.putCurso(object);
    }
  }

  deletes(component: string, id: number) {
    switch (component) {
      case 'ProfessoresComponent': return this.deleteProfessor(id);
      case 'TurmasComponent': return this.deleteTurma(id);
      case 'SalasComponent': return this.deleteSala(id);
      case 'PeriodosComponent': return this.deletePeriodo(id);
      case 'DisciplinasComponent': return this.deleteDisciplina(id);
      case 'CursosComponent': return this.deleteCurso(id);
    }
  }

  getProfessores(): Observable<any> {
    return this.http.get('professores');
  }
  putProfessor(object: any): Observable<any> {
    return this.http.post('professores/edit', object);
  }
  postProfessor(object): Observable<any> {
    return this.http.post('professores/create', object);
  }
  deleteProfessor(id: number) {
    return this.http.post('professores/delete', id);
  }
  getCursos(): Observable<any> {
    return this.http.get('cursos');
  }
  putCurso(object: any): Observable<any> {
    return this.http.post('cursos/edit', object);
  }
  postCurso(object): Observable<any> {
    return this.http.post('cursos/create', object);
  }
  deleteCurso(id: number) {
    return this.http.post('cursos/delete', id);
  }
  getDisciplinas(): Observable<any> {
    return this.http.get('disciplinas');
  }
  putDisciplina(object: any): Observable<any> {
    return this.http.post('disciplinas/edit', object);
  }
  postDisciplina(object): Observable<any> {
    return this.http.post('disciplinas/create', object);
  }
  deleteDisciplina(id: number) {
    return this.http.post('disciplinas/delete', id);
  }
  getPeriodos(): Observable<any> {
    return this.http.get('periodos');
  }
  putPeriodo(object: any): Observable<any> {
    return this.http.post('periodos/edit', object);
  }
  postPeriodo(object): Observable<any> {
    return this.http.post('periodos/create', object);
  }
  deletePeriodo(id: number) {
    return this.http.post('periodos/delete', id);
  }
  getSalas(): Observable<any> {
    return this.http.get('salas');
  }
  putSala(object: any): Observable<any> {
    return this.http.post('salas/edit', object);
  }
  postSala(object): Observable<any> {
    return this.http.post('salas/create', object);
  }
  deleteSala(id: number) {
    return this.http.post('salas/delete', id);
  }
  getTurmas(): Observable<any> {
    return this.http.get('turmas');
  }
  putTurma(object: any): Observable<any> {
    return this.http.post('turmas/edit', object);
  }
  postTurma(object): Observable<any> {
    return this.http.post('turmas/create', object);
  }
  deleteTurma(id: number) {
    return this.http.post('turmas/delete', id);
  }
}
