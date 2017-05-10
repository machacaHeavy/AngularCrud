import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[gs-alphanumeric]'
})
export class AlphanumericDirective{

    ALPHANUMERIC_REGEXP: RegExp = new RegExp('^[0-9a-zA-Z]+$');

    constructor(){

    }

    @HostListener('keypress', ['$event']) onkeypress(event:KeyboardEvent){
        return this.ALPHANUMERIC_REGEXP.test(event.key);
    }  

}