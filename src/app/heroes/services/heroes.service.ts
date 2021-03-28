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

  // Crear.
  postHeroe(heroe: Heroe): Observable<Heroe> {
    return this._http.post<Heroe>(`${ this.url }/heroes`, heroe);
  }

  // Actualizar.
  putHeroe(heroe: Heroe): Observable<Heroe> {
    return this._http.put<Heroe>(`${ this.url }/heroes/${ heroe.id }`, heroe);
  }

  // Eliminar.
  deleteHeroe(id: string): Observable<any> {
    return this._http.delete<any>(`${ this.url }/heroes/${ id }`);
  }

}
