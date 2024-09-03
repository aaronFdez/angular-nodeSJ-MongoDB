import { Routes } from '@angular/router';
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { BotinesComponent } from "./botines/botines.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { ExternalComponent} from "./external/external.component";
import {ContactoComponent} from "./contacto/contacto.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'videojuegos', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:nombre', component: CursosComponent },
    { path: 'botines', component: BotinesComponent },
    { path: 'external', component: ExternalComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: HomeComponent }
];
