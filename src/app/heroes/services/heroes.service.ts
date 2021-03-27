import { Injectable } from '@angular/core';

// Http Client
import { HttpClient } from '@angular/common/http';

// Interface
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private url: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  getHeroes() {
    return this._http.get<Heroe[]>(`${ this.url }heroes`);
  }

}
