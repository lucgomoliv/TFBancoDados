import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getProfessores(): Observable<any> {
    return this.http.get('professores');
  }
  putProfessore(id: number): Observable<any> {
    return this.http.put('professores', id);
  }
  postProfessore(object): Observable<any> {
    return this.http.post('professores', object);
  }
  getCursos(): Observable<any> {
    return this.http.get('cursos');
  }
  putCurso(id: number): Observable<any> {
    return this.http.put('cursos', id);
  }
  postCurso(object): Observable<any> {
    return this.http.post('cursos', object);
  }
  getDisciplinas(): Observable<any> {
    return this.http.get('disciplinas');
  }
  putDisciplina(id: number): Observable<any> {
    return this.http.put('disciplinas', id);
  }
  postDisciplina(object): Observable<any> {
    return this.http.post('disciplinas', object);
  }
  getPeriodos(): Observable<any> {
    return this.http.get('periodos');
  }
  putPeriodo(id: number): Observable<any> {
    return this.http.put('periodos', id);
  }
  postPeriodo(object): Observable<any> {
    return this.http.post('periodos', object);
  }
  getSalas(): Observable<any> {
    return this.http.get('salas');
  }
  putSala(id: number): Observable<any> {
    return this.http.put('salas', id);
  }
  postSala(object): Observable<any> {
    return this.http.post('salas', object);
  }
  getTurmas(): Observable<any> {
    return this.http.get('turmas');
  }
  putTurma(id: number): Observable<any> {
    return this.http.put('turmas', id);
  }
  postTurma(object): Observable<any> {
    return this.http.post('turmas', object);
  }
}
