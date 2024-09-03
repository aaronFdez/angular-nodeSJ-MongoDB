import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'videojuego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css'
})
export class VideojuegoComponent {
  selectedGame: any = null;
  games = [
    {
      title: 'Black Myth: Wukong',
      releaseDate: '2024',
      description: 'Un juego de acción RPG inspirado en la mitología china, donde juegas como Wukong, el Rey Mono, enfrentando a diversos enemigos en un mundo de fantasía oscura.',
      image: 'https://gaming-cdn.com/images/products/17097/orig/black-myth-wukong-digital-deluxe-edition-digital-deluxe-edition-pc-juego-steam-europe-us-canada-cover.jpg?v=1724143252'
    },
    {
      title: 'GTA 6',
      releaseDate: '2025',
      description: 'La próxima entrega de la famosa serie Grand Theft Auto, con un mundo abierto más grande y detallado que nunca, lleno de acción, historia y crimen.',
      image: 'https://phantom-marca.unidadeditorial.es/a0ad98598fed3908d1447378cd80306a/resize/660/f/webp/assets/multimedia/imagenes/2023/12/05/17017338390079.jpg'
    },
    {
      title: 'Tekken 8',
      releaseDate: '2024',
      description: 'La última entrega del legendario juego de lucha, con nuevos personajes, escenarios y mejoras en la jugabilidad para una experiencia de combate definitiva.',
      image: 'https://www.mundodeportivo.com/alfabeta/hero/2023/07/tekken8-cnt-thumbnail.webp?width=1200&aspect_ratio=16:9'
    },
    {
      title: 'Super Mario Bros',
      releaseDate: '2024',
      description: 'Una nueva aventura del icónico Mario, con niveles creativos, enemigos clásicos y nuevas mecánicas de juego que encantará a los fanáticos de todas las edades.',
      image: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_NewSuperMarioBrosDS_image1600w.jpg'
    }
  ];

  openModal(game: any) {
    this.selectedGame = game;
  }

  closeModal() {
    this.selectedGame = null;
  }
}
