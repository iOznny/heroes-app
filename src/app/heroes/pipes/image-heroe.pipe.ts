import { Pipe, PipeTransform } from '@angular/core';

// Interface
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imageHeroe'
})

export class ImageHeroePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `assets/heroes/${ heroe.id }.jpg`;
  }

}
