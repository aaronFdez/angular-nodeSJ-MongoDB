import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VideojuegoComponent} from "./videojuego/videojuego.component";
import {BotinesComponent} from "./botines/botines.component";
import {CursosComponent} from "./cursos/cursos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideojuegoComponent, BotinesComponent, CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
}
