import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isIdentificated: boolean;


  constructor() {
    this.isIdentificated = false;
  }

  login() {
      this.isIdentificated = !this.isIdentificated;
  }

  ngOnInit() {
  }
}
