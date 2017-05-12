import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[gs-integer]'
})
export class IntegerDirective{

    integerRegExp: RegExp = new RegExp('^[0-9]+$');

    constructor(){

    }

    @HostListener('keypress', ['$event']) onkeypress(event:KeyboardEvent){
        return this.integerRegExp.test(event.key);
    }  

}