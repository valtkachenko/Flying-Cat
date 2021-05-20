import { Component } from '@angular/core';
import { CatAnimation } from './cat.animation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  animations: [CatAnimation.animation]
})
export class CatComponent {

  public catImage = {
    src: '/assets/cat-blurred.png',
    alt: 'Pusheen cat'
  }
  public meowBubbleImage = {
    src: '/assets/meow.png',
    alt: 'Meow!'
  }
  public isAnimationUp: boolean = false;
  public isDisplayMeowBubble: boolean = false;
  private beLink = '/cat-click';

  constructor(private http: HttpClient){ }

  public animationFinished(): void {
    this.isAnimationUp = !this.isAnimationUp;
  }

  public catClick(): void {
    this.isDisplayMeowBubble = !this.isDisplayMeowBubble;
    !this.isDisplayMeowBubble && this.sendRequest();
  }

  private async sendRequest() {
    try {
      const payload = {
        "uuid": "abcdef123456",
        "x": 600,
        "y": 300
      }

      await this.http.post(this.beLink, payload).toPromise();
    } catch (error) {
      console.log('Error: ', error);
    }
  }

}
