import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';



// como criar um modulo, ng g m <nome do mudulo>
//  tbm conhecido como modulo de funcionalidade
// serve para gerenciar as dependencias e não colocar todo componente dento do AppModule
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent // reconhece o componenent, para ser usando dentro do modulo
  ],
  exports: [
    CursosComponent // deixa o modulo publico
  ],
  providers: [CursosService]
})
export class CursosModule { }
