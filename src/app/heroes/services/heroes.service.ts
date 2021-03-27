import { Injectable } from '@angular/core';

// Http Client
import { HttpClient } from '@angular/common/http';

// Interface
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

// Variables de Entorno
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private url: string = environment.permalinkURL;

  constructor(private _http: HttpClient) { }

  // Obtener heroes.
  getHeroes(): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(`${ this.url }/heroes`);
  }

  // Obtener heroe por id.
  getHeroesById(id: string): Observable<Heroe> {
    return this._http.get<Heroe>(`${ this.url }/heroes/${ id }`);
  }

  // Obtener busquedas.
  getSearch(term: string): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(`${ this.url }/heroes?q=${ term }&_limit=5`);
  }

}
