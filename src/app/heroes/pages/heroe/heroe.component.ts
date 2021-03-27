import { Component, OnInit } from '@angular/core';

// Route
import { ActivatedRoute } from '@angular/router';

// Interface
import { Heroe } from '../../interfaces/heroes.interface';

// Service
import { HeroesService } from '../../services/heroes.service';

// Rxjs
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 20px;
    }
  `]
})

export class HeroeComponent implements OnInit {

  public heroe!: Heroe;

  constructor(private heroesService: HeroesService , private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActive.params.pipe(
      switchMap( ({ id }) => this.heroesService.getHeroesById(id)) 
    )
    .subscribe( heroe => this.heroe = heroe );
  }

}
