import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from "@angular/core";

@Directive({ selector: '[scroll-listen]' })

export class ScrollListenerDirective {
    @Input('scroll-listen') scrolled: boolean;
    @Input() scrollTarget: string;
    @Output() isScrolled = new EventEmitter()

    constructor(
        private element: ElementRef 
    ){}

    @HostListener('scroll', ['$event']) onScroll(event) {
            const offsetY = event.srcElement.scrollTop
            if (offsetY > 100 && this.scrolled == false) {
                this.isScrolled.emit(true)
            }
            else if (offsetY < 100 && this.scrolled == true) {this.isScrolled.emit(false)}
    }

}