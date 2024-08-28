import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Botin} from '../models/botin';
import {BotinesService} from '../services/botines.service';

@Component({
  selector: 'botines',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [BotinesService],
  templateUrl: './botines.component.html',
  styleUrl: './botines.component.css'
})

export class BotinesComponent implements OnInit {
  public titulo: string = 'Componente de botines';
  public botines: Array<Botin>;
  public marcas: string[];
  public nuevaMarca: string = '';

  constructor(
    private _botinesService: BotinesService
  ) {
    this.botines = this._botinesService.getBotines();
    this.marcas = this.getMarcas();
    console.log(this.marcas);
  }

  getMarcas() {
    var marcasArray: string[] = [];

    this.botines.forEach((botin, index) => {
      if (marcasArray.indexOf(botin.marca) === -1) {
        marcasArray.push(botin.marca);
      }
    });

    return marcasArray;
  }

  formatMarcas(): string {
    return this.marcas.join(', ').replace(/, ([^,]*)$/, ' y $1.');
  }

  agregarMarca(event: any) {
    if (event.key === 'Enter' && this.nuevaMarca.trim()) {
      this.marcas.push(this.nuevaMarca.trim());
      this.nuevaMarca = ''; // Limpia el campo después de agregar
    }
  }

  ngOnInit() {

  }

}
