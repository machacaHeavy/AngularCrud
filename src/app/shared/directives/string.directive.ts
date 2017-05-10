import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[gs-string]'
})
export class StringDirective{

    STRING_REGEXP: RegExp = new RegExp('^[a-zA-Z]+$');

    constructor(){}

    @HostListener('keypress', ['$event']) onkeypress(event: KeyboardEvent){
        return this.STRING_REGEXP.test(event.key);
    }

}
