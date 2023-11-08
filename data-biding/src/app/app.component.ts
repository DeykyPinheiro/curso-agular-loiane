import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  destruirCiclo: boolean = false;

  valor: number = 5;

  mudarValor(): void {
    this.valor++;
  }

  deletarCiclo(): void {
    this.destruirCiclo = true;
  }
}
