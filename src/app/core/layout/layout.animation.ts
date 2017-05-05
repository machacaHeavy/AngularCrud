import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';


export const fadeInAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.7s ease-in')
    ]),
    transition(':leave', [
      animate('0s ease-out', style({
        opacity: 0
      }))
    ])
  ]);

export const slideInAnimation: AnimationEntryMetadata = 
    trigger('routeAnimation', [
        state('*', style({
          transform: 'translateX(0)'
        })),
        transition(':enter', [
          style({
              transform: 'translateX(-100%)'
          }),
          animate('0.3s ease-in')
    ])
]);
