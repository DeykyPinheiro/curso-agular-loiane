import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.sass']
})
export class DataBidingComponent {

  urlNome: string = "meunome.e.deyky.com"

  urlImage: string = "http://lorempixel.com.br/400/200/?1"

  cursoAngular: boolean = true;

  textDigitado: string = "";

  textoSalvo: string = "";

  isMouseOver: boolean = false;

  // usado no property biding
  getValor(): number {
    return 10;
  }



  // usado no property biding
  getCurtirCurso(): boolean {
    return this.cursoAngular;
  }

  // escutar evento do botao
  botaoClicado(): void {
    alert("clcaram em mim");
  }

  onkeyUp(event: KeyboardEvent): void {
    this.textDigitado = (<HTMLInputElement>event.target).value;
    // alert("texto digitado: " +  this.textDigitado)
  }

  pressEnter(event: any): void {
    this.textoSalvo = event;
    this.textoSalvo = (<HTMLInputElement>event.target).value;
  }

  mouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


}
