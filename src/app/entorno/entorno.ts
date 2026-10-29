import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  readonly nombre = 'PROD';
  readonly mensaje = 'Entorno de producción';
}
