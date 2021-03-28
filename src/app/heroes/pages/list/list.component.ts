import { Component, OnInit } from '@angular/core';

// Service
import { HeroesService } from '../../services/heroes.service';

// Interface
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._heroesService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }

}