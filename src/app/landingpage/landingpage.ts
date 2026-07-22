import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {

  profile: Profile | undefined;

  constructor(private router: Router){}

  navegar(){
    this.router.navigate(['/paginas/galeria'])
  }

  logarComGoogle() {

  }

  isLoggedIn() {
    return !!this.profile;
  }

}
