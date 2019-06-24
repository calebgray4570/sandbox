import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';

type slideAnimationType = 'left' | 'right';
type SideNavAnimationType = 'open' | 'openSmall' | 'close'; 

export const flyInOutAnimation = 
    trigger('flyInOut', [
        state('in', style({
        // width: 100,
        transform: 'translateX(0)', 
        opacity: 1
        })),
        transition('void => *', [
        style({ 
            // width: 100, 
            transform: 'translateX(50px)', 
            opacity: 0 }),
        group([
            animate('0.8s 0.1s ease', style({
            transform: 'translateX(0)',
            // width: 120
            })),
            animate('0.3s ease', style({
            opacity: 1
            }))
        ])
        ]),
        transition('* => void', [
        group([
            animate('0.3s ease', style({
            transform: 'translateX(50px)',
            // width: 100
            })),
            animate('0.3s 0.2s ease', style({
            opacity: 0
            }))
        ])
        ])
    ])





export const routeAnimation =
    trigger('routeSlideAnimation', [
    transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%'})
        ]),
        query(':leave',[
            style({ opacity: 1 }), 
            animate('0.1s', style({ opacity: 0 }))],
            { optional: true }
        ),
        group([
            query(':enter', [
            animate('400ms ease-out', style({ left: '0%'}))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
]);

export const slideAnimation = [
    trigger('slide', [
        state('left', style({ transform: 'translateX(0%)' })),
        state('right', style({ transform: 'translateX(-100%)' })),
        transition('* => *', animate(200))
    ]),
]

export const sideNavAnimation = [
    trigger('toggle', [
        state('open', style({width: '20%'})),
        state('openSmall', style({width: '30%'})),
        state('close', style({ width: '0px'})),
        transition('* => *', animate(300))
    ])
]
export class SavvyAnimations {
    public activeSlide: slideAnimationType = 'right'
    public activeToggle: SideNavAnimationType = 'close';

    constructor() {}

    handleSideNavAnimation(event, mobileView: boolean){
        let screenWidth = 1279;
        let currentScreen = 0;
        if(event.target.innerWidth){
            currentScreen = event.target.innerWidth
        } else {
            currentScreen = event.view.innerWidth
        }

        if(currentScreen <= screenWidth){
            this.activeToggle === 'close' ? this.activeToggle = 'openSmall' : this.activeToggle = 'close';
        } else {
            this.activeToggle === 'close' ? this.activeToggle = 'open' : this.activeToggle = 'close';
        }
        if(mobileView) {
            this.activeSlide === 'right' ? this.activeSlide = 'left' : this.activeSlide = 'right';
        }
    }

    handleSlideAnimation(event){
        this.activeSlide = event;
    }
}