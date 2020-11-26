import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { SalasComponent } from './salas/salas.component';
import { TurmasComponent } from './turmas/turmas.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProfessoresComponent,
    CursosComponent,
    DisciplinasComponent,
    PeriodosComponent,
    SalasComponent,
    TurmasComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'professor', component: ProfessoresComponent },
      { path: 'curso', component: CursosComponent },
      { path: 'disciplina', component: DisciplinasComponent },
      { path: 'periodo', component: PeriodosComponent },
      { path: 'sala', component: SalasComponent },
      { path: 'turma', component: TurmasComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
