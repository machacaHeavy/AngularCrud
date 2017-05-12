import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[gs-string]'
})
export class StringDirective{

    stringRegExp: RegExp = new RegExp('^[a-zA-Z]+$');

    constructor(){}

    @HostListener('keypress', ['$event']) onkeypress(event: KeyboardEvent){
        return this.stringRegExp.test(event.key);
    }

}
