import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.sass']
})
export class CicloComponent implements OnInit
  // não preciso implementar, pq o angular verficica os nomes, mas é bom colocar, por boas praticas
  , OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  // todas as acoes executadas na ordem de inicializacao de um component



  @Input() valorInicial: number = 10;

  // primeiro até que o onInit
  constructor() {
    this.log("constructor")
  }

  // executado sempre que o componente inicia
  ngOnInit(): void {
    this.log("ngOnInit");

  }

  // executado sempre que o valor property-bingind é atualizado
  ngOnChanges() {
    this.log("ngOnChanges");
  }

  // executado a cada ciclo de verificacao
  ngDoCheck() {
    this.log("ngDoCheck");
  }

  // executado depois de inserir o conteudo externo na view
  ngAfterContentInit(): void {
    this.log("ngAfterContentInit");
  }


  // executado a cada verificacao de conteudo inserido
  ngAfterContentChecked(): void {
    this.log("ngAfterContentChecked")
  }

  // executado a cada verificacao de conteudo / conteudo filho
  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked")
  }

  // antes do componente ser destruido
  ngOnDestroy(): void {
    this.log("ngOnDestroy")
  }


  log(hook: string): void {
    console.log(hook);
  }

}


