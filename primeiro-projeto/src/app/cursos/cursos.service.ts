import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getListaCursos(): string[] {
    return ["java", "js", "angular", "python", "ines", "alam bica", "testezao"];
  }
}
