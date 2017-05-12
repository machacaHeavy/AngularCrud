import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[gs-alphanumeric]'
})
export class AlphanumericDirective{

    alphanumericRexExp: RegExp = new RegExp('^[0-9a-zA-Z]+$');

    constructor(){

    }

    @HostListener('keypress', ['$event']) onkeypress(event:KeyboardEvent){
        return this.alphanumericRexExp.test(event.key);
    }  

}