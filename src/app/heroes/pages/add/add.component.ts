import { Component, OnInit } from '@angular/core';

// Interfaces 
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

// Services
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})

export class AddComponent implements OnInit {

  public publishers = [
    {
      id: 'DC',
      description: 'DC Comics'
    },
    {
      id: 'Marvel',
      description: 'Marvel Comics'
    }
  ];

  public heroe: Heroe = {
    alter_ego: '',
    superhero: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: ''
  }

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  // Guardar héroe.
  public save() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.heroeService.postHeroe(this.heroe).subscribe( heroe => console.log(heroe));
  }

}
