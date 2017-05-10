import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[gs-integer]'
})
export class IntegerDirective{

    INTEGER_REGEXP: RegExp = new RegExp('^[0-9]+$');

    constructor(){

    }

    @HostListener('keypress', ['$event']) onkeypress(event:KeyboardEvent){
        return this.INTEGER_REGEXP.test(event.key);
    }  

}