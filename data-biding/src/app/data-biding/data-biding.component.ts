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

  getValor(): number {
    return 10;
  }

  getCurtirCurso(): boolean {
    return this.cursoAngular;
  }


}
