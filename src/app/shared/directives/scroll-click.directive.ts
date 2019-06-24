import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[scroll-click]'
})

export class ScrollClickDirective {
    @Input('scroll-click') scrollTarget: string;

    constructor(
        private element: ElementRef
    ){}

    @HostListener('click', ['$event']) onclick(){
        if(this.scrollTarget == 'top') {
            this.element.nativeElement.parentElement.scrollTop = 0;
            // window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
        } else {
            document.getElementById(this.scrollTarget).scrollIntoView({behavior:'smooth'})
        }
    }

}