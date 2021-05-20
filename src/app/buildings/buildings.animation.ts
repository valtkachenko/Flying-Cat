import { animate, state, style, transition, trigger } from '@angular/animations';

export const BuildingsAnimation = {
  animation: trigger('isAnimationStarted', [
    state('true', style({
      opacity: 1, transform: 'translateX(-150%)',
    })),
    transition('true => false', animate(
      '1s ease-in',
      style({ opacity: 1, transform: 'translateX(0)'}))),
    transition('false => true', animate(
      '1s ease-out',
      style({ opacity: 1, transform: 'translateX(450%)' })))
  ])
}
