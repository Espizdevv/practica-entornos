import { Component, signal } from '@angular/core';
import { Entorno } from './entorno/entorno';

@Component({
  selector: 'app-root',
  imports: [Entorno],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Práctica de despliegues');
}
