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
      case 'Professores': return this.getProfessores();
      case 'Turmas': return this.getTurmas();
      case 'Salas': return this.getSalas();
      case 'Periodos': return this.getPeriodos();
      case 'Disciplinas': return this.getDisciplinas();
      case 'Cursos': return this.getCursos();
      case 'possui': return this.getPossui();
      case 'pertence': return this.getPertence();
      case 'lecionar': return this.getLecionar();
      case 'ofertar_Turma_Disciplina_Sala': return this.getOfertar();
    }
  }

  posts(component: string, object: any) {
    switch (component) {
      case 'Professores': return this.postProfessor(object);
      case 'Turmas': return this.postTurma(object);
      case 'Salas': return this.postSala(object);
      case 'Periodos': return this.postPeriodo(object);
      case 'Disciplinas': return this.postDisciplina(object);
      case 'Cursos': return this.postCurso(object);
    }
  }

  puts(component: string, id: number, object: any) {
    switch (component) {
      case 'Professores': return this.putProfessor(object);
      case 'Turmas': return this.putTurma(object);
      case 'Salas': return this.putSala(object);
      case 'Periodos': return this.putPeriodo(object);
      case 'Disciplinas': return this.putDisciplina(object);
      case 'Cursos': return this.putCurso(object);
    }
  }

  deletes(component: string, id: number) {
    switch (component) {
      case 'Professores': return this.deleteProfessor(id);
      case 'Turmas': return this.deleteTurma(id);
      case 'Salas': return this.deleteSala(id);
      case 'Periodos': return this.deletePeriodo(id);
      case 'Disciplinas': return this.deleteDisciplina(id);
      case 'Cursos': return this.deleteCurso(id);
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
  getPossui() {
    return this.http.get('possui');
  }
  getOfertar() {
    return this.http.get('ofertar');
  }
  getLecionar() {
    return this.http.get('lecionar');
  }
  getPertence() {
    return this.http.get('pertence');
  }
}
