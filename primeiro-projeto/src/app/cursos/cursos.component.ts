import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent {

  nomeGithub: string = "https://github.com/deykypinheiro"

  // errado, isso é uma instancia pura, pra usar, a instancia padrao tenho que receber no construtor
  // private cursosService = new CursosService();

  listaDeCursos: string[] = [];

  constructor(
    // isso é uma injecao de dependencia
    private cursosService: CursosService
  ) {
    this.listaDeCursos = this.cursosService.getListaCursos();
  }

}
