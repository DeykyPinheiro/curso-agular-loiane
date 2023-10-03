import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';


// como criar um modulo? ng g c <nome do component>
@NgModule({
  declarations: [ // reconhece um componente
    AppComponent,
    MeuPrimeiroComponent, // foi importado para o projeto conhecer meu modulo
    MeuPrimeiro2Component,

  ],
  imports: [ // serve pra importar modulos
    BrowserModule,
    AppRoutingModule,
    CursosModule, // como o curso componente, pertence a CursosModule, não preciso importar novamente
  ],
  providers: [],
  bootstrap: [AppComponent]  // o que deve ser carregado ao iniciar o projeto
})
export class AppModule { }
