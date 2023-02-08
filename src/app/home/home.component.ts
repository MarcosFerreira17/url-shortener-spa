import { UrlshortenerService } from './../services/urlshortener.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Url } from '../models/url';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  url = new Url();
  urlShort?: Url;
  errorUrl?: string;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value?: string;
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
        this.value = data;
      },
      (error: any) => {
        console.error(error);
        this.errorUrl = this.errorUrl =
          error.error.message ||
          'An unknown error occurred, please check that your url is valid, for example: https://yourdomain.com/ Where example.com is the domain name and https is the protocol used to access the resource. It is also possible to include additional paths after the domain name, for example: https://www.example.com/path/to/resource Remembering that the structure of a URL can vary according to the protocol and the resource that is used. want access.';
      }
    );
  }
}
