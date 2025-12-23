import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Correio } from './correio/correio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Correio],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
      constructor(private http: HttpClient){}
  protected title = 'consulta-do-cep';
}
