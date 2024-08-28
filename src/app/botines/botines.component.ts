import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Botin } from '../models/botin';

@Component({
    selector: 'botines',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './botines.component.html',
    styleUrl: './botines.component.css'
})

export class BotinesComponent {
    public titulo: string = 'Componente de botines';
    public botines: Array<Botin>;
    public marcas: string[];
    public nuevaMarca: string = '';

    constructor() {
        this.botines = [
            new Botin('Nike AirMax', 'Nike', 'Rojo', 54.95, 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600,h_600/https://zapasvader.com/wp-content/uploads/2022/10/Diseno-sin-titulo-32.png', true),
            new Botin('Reebook Classic', 'Reebook', 'Blanco', 80, 'https://photos6.spartoo.es/photos/214/21426412/21426412_1200_A.jpg', true),
            new Botin('Nike Runner MD', 'Nike', 'Negro', 60, 'https://cdn.idealo.com/folder/Product/4816/0/4816099/s11_produktbild_max/nike-md-runner-2-suede-black-white-749794-010.jpg', false),
            new Botin('Adidas Yezzy', 'Adidas', 'Gris', 180, 'https://i.ebayimg.com/images/g/8OsAAOSwUYNaMFU4/s-l1600.jpg', true),
        ];
        this.marcas = this.getMarcas();
        console.log(this.marcas);
    }

    getMarcas() {
        var marcasArray:string[] = [];

        this.botines.forEach((botin, index) =>{
            if(marcasArray.indexOf(botin.marca) === -1) {
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
    
}
