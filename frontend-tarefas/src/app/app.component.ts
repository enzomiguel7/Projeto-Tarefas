import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {
  protected readonly title = signal('frontend-tarefas');
}