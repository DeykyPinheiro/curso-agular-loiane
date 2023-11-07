import { Component, Input } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-curso-input',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.sass']
  // inputs: ["nomeCurso:nome"] tbm funciona, mas a convencao esta para usar anotation
})
export class InputPropertyComponent {

  // assim eu consigo expor a variavel nome para o seletor
  // posso usar o mesmo nome e não colocar nada, ou posso usar com um nome para entrada
  // e um nome para usar internamente
  @Input("nome")
  nomeCurso: string = "";



}
