import { UrlshortenerService } from './../services/urlshortener.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Url } from '../models/url';

@Component({
  selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  url = new Url();
  urlShort?: Url;
  errorUrl?: string;
  constructor(private UrlshortenerService: UrlshortenerService) {}

  ngOnInit(): void {}
  GenerateHash(hash: Url) {
    this.urlShort = hash;
  }

  create() {
    this.UrlshortenerService.post(this.url).subscribe(
      (data: any) => {
        console.log(data);
        this.errorUrl = '';
        this.GenerateHash(data);
      },
      (error: any) => {
        console.error(error);
        this.errorUrl = this.errorUrl =
          error.error.message ||
          'Ocorreu um erro desconhecido, verifique se seu url é válido, por exemplo: https://seudominio.com/ Onde example.com é o nome do domínio e https é o protocolo usado para acessar o recurso. Também é possível incluir caminhos adicionais após o nome do domínio, como por exemplo: https://www.example.com/path/to/resource Lembrando que a estrutura de um URL pode variar de acordo com o protocolo e o recurso que se deseja acessar.';
      }
    );
  }
}
