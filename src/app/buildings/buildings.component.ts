import { Component } from '@angular/core';
import { BuildingsAnimation } from './buildings.animation';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
  animations: [BuildingsAnimation.animation]
})
export class BuildingsComponent {

  public isAnimationStarted: boolean = false;
  public buildingsImage = {
    src: '/assets/houses.png',
    alt: 'Buildings image'
  }

  public animationFinished() {
    this.isAnimationStarted = !this.isAnimationStarted;
  }

}
