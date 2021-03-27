import { Component, OnInit } from '@angular/core';

// Route
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})

export class HeroeComponent implements OnInit {

  constructor(private _routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this._routerActive.params.subscribe( ({ id }) => console.log(id));
  }

}
