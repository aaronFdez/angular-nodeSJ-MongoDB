import { Routes } from '@angular/router';
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { BotinesComponent } from "./botines/botines.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'videojuegos', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'botines', component: BotinesComponent }
];
