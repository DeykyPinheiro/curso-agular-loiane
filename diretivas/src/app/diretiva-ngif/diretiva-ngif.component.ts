import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent {

  cursos: string[] = [];


  mostrarCursos: boolean = false;

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
