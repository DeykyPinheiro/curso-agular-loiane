import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass']
})
export class OutputPropertyComponent {



  // serve pra emitir eventos
  @Output()
  mudouValor = new EventEmitter();

  @ViewChild("campoInput") campoValorInput!: ElementRef;

  @Input()
  valor: number = 0;

  decrementa(): void {
    // this.valor = this.valor - 1;
    this.campoValorInput.nativeElement.value--;


    // console.log("valor decrementando" + this.campoValorInput.nativeElement.value);
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value })

    // pode ser tão complexo quando o necessario
    // this.mudouValor.emit({ novoValor: this.valor })
  }

  incrementa(): void {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value })

    // this.valor = this.valor + 1;
    // this.mudouValor.emit({ novoValor: this.valor })
  }

}
