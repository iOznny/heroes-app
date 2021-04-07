import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 20px;
    }
  `]
})

export class HomeComponent {

  constructor(private router: Router) { }

  // Salir
  logout() {
    this.router.navigate(['./auth']);
  }

}
