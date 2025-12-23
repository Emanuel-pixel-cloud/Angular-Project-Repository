import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-correio',
  imports: [CommonModule, FormsModule],
  templateUrl: './correio.html',
  styleUrl: './correio.less'
})
export class Correio implements OnInit {

  dados: any;
  cep: any;
  constructor(private http: HttpClient){}

  ngOnInit(): void {}

buscarCEP() {
  this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe((correio) =>{
  this.dados = correio
  console.log( this.dados)

});
  

};

}


