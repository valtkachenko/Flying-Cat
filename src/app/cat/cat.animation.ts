import { animate, state, style, transition, trigger } from '@angular/animations';

export const CatAnimation = {
  animation: trigger('isAnimationUp', [
    state('true', style({      // final CSS following animation
      opacity: 1, transform: 'translateY(1vh)'
    })),
    transition('true => false', animate(
      '300ms ease-in',
      style({ opacity: 1, transform: 'translateY(-4vh)' }))),  // animation timing
    transition('false => true', animate(
      '300ms ease-in',
      style({ opacity: 1, transform: 'translateY(1vh)' })))
  ])
}
