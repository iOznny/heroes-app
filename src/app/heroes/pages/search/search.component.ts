import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

// Interface
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})

export class SearchComponent implements OnInit {

  public term: string = '';
  public heroes: Heroe[] = [];
  public heroeSelect: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  // Buscar héroe.
  public searching() {
    this.heroesService.getSearch(this.term.trim())
      .subscribe( heroes => this.heroes = heroes);
  }

  // Option seleciconada de héroe.
  optionSelected(e: MatAutocompleteSelectedEvent) {

    if(!e.option.value) {
      this.heroeSelect = undefined;
      return;
    }

    const heroe: Heroe = e.option.value;
    this.term = heroe.superhero;

    this.heroesService.getHeroesById(heroe.id)
      .subscribe( heroe => this.heroeSelect = heroe);
  }

}
