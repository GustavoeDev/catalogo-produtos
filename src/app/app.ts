import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeToggle} from './components/theme-toggle/theme-toggle';
import {Home} from './pages/home/home';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggle, Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogo-produtos');
}
