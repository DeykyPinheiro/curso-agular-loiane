import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent {

  nomeGithub: string = "https://github.com/deykypinheiro"

  listaDeCursos: string[] = ["java", "js", "angulas"]
}
