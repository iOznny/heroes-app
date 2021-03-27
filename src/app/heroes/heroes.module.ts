import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';


// Modules
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImageHeroePipe } from './pipes/image-heroe.pipe';

@NgModule({
  declarations: [
    AddComponent, 
    SearchComponent, 
    HeroeComponent, 
    HomeComponent, 
    ListComponent, HeroeCardComponent, ImageHeroePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule
  ]
})

export class HeroesModule { }
