import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../services/peticiones.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-external',
  standalone: true,
  providers: [PeticionesService],
  imports: [CommonModule, FormsModule],
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {

  public user: any;
  public userId: number;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.user = null;
    this.userId = 1;
  }

  getExternalUserById(userId: number) {
    if (userId > 0) {
      this._peticionesService.getUser(userId).subscribe(
        result => {
          this.user = result.data;
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

  onKeyPress(event: any, userId: number) {
    if (event.key === 'Enter') {
      this.getExternalUserById(userId);
    }
  }

  ngOnInit(): void {
    this.getExternalUserById(2);
  }
}

