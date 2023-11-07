import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass']
})
export class OutputPropertyComponent {

  // serve pra emitir eventos

  @Output()
  mudouValor = new EventEmitter();

  @Input()
  valor: number = 0;

  decrementa(): void {
    this.valor = this.valor - 1;
    // pode ser tão complexo quando o necessario
    this.mudouValor.emit({ novoValor: this.valor })
  }

  incrementa(): void {
    this.valor = this.valor + 1;
    this.mudouValor.emit({ novoValor: this.valor })
  }

}
