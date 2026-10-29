import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  readonly nombre = 'QA';
  readonly mensaje = 'Entorno de pruebas QA';
}
