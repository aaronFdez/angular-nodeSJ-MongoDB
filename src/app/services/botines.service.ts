import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Botin} from '../models/botin';

@Injectable()

export class BotinesService {
  public botines: Array<Botin>;

  constructor(private _http: HttpClient) {
    this.botines = [
      new Botin('Nike AirMax', 'Nike', 'Rojo', 54.95, 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600,h_600/https://zapasvader.com/wp-content/uploads/2022/10/Diseno-sin-titulo-32.png', true),
      new Botin('Reebook Classic', 'Reebook', 'Blanco', 80, 'https://photos6.spartoo.es/photos/214/21426412/21426412_1200_A.jpg', true),
      new Botin('Nike Runner MD', 'Nike', 'Negro', 60, 'https://cdn.idealo.com/folder/Product/4816/0/4816099/s11_produktbild_max/nike-md-runner-2-suede-black-white-749794-010.jpg', false),
      new Botin('Adidas Yezzy', 'Adidas', 'Gris', 180, 'https://i.ebayimg.com/images/g/8OsAAOSwUYNaMFU4/s-l1600.jpg', true),
    ];
  }


  getBotines(): Botin[] {
    return this.botines;
  }
}
