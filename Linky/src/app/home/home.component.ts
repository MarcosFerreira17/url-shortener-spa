import { UrlshortenerService } from './../services/urlshortener.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Url } from '../models/url';

@Component({
  selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url = new Url();
  urlShort?: Url;
  constructor(private UrlshortenerService: UrlshortenerService) {}

  ngOnInit(): void {

  }
  GenerateHash(hash : Url){
    this.urlShort = hash
  }

  create() {
    this.UrlshortenerService
      .post(this.url)
      .subscribe(data => {
        console.log(data)
        this.GenerateHash(data);
      }
      )}
  }
