import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { BotinesComponent } from './botines/botines.component';
import { CursosComponent } from './cursos/cursos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videojuegos', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'botines', component: BotinesComponent }
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};