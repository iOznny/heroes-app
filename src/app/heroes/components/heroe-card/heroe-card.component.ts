import { Component, Input } from '@angular/core';

// Interface
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [`
    mat-card {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `]
})

export class HeroeCardComponent {

  @Input() heroe!: Heroe;
  
}
