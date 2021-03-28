import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

// Interfaces 
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

// Services
import { HeroesService } from '../../services/heroes.service';

// Components
import { ConfirmDeleteComponent } from '../../components/confirm-delete/confirm-delete.component';

// Angular Material
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 35%;
      border-radius: 10px;
    }
  `]
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

  constructor(
    private heroeService: HeroesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { 
  }

  ngOnInit(): void {

    if(!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeService.getHeroesById(id))
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  // Guardar héroe.
  public save() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Actualizar
      this.heroeService.putHeroe(this.heroe).subscribe( heroe => this.openSnackBar('Registro Actualizado'));
    } else {
      // Nuevo registro
      this.heroeService.postHeroe(this.heroe).subscribe( heroe => { 
        this.router.navigate(['/heroes/edit', heroe.id])
        this.openSnackBar('Registro Creado');
      });
    }
  }

  // Borrar héroe.
  public delete() {
    const dialog = this.dialog.open(ConfirmDeleteComponent, {
      width: '300px',
      data: this.heroe
    });

    dialog.afterClosed()
    .subscribe( (result) => {
      if (result) {
        this.heroeService.deleteHeroe(this.heroe.id)
        .subscribe( resp => {
          this.router.navigate(['/heroes']);
        });
      }      
    });
  }

  // Mostrar el snakbar
  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Cerrar', {
      duration: 2500,
    });
  }

}
