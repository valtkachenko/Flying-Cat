import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public siteLink = 'https://vidalytics.com';
  public logoImage = {
    src: '/assets/logo-white.svg',
    alt: 'Vidalytics logo'
  };

}
