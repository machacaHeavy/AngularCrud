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