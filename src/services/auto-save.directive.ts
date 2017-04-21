import {Directive, HostListener, Input} from "@angular/core";


@Directive({
    selector: `[auto-save]`
})
export class AutoSaveDirective {
    @Input() key = 'Are you sure you want to do this?';

    constructor(){

    }

    @HostListener('document:keyup', ['$event'])
    keyUpListener(ev:KeyboardEvent) {
        // do something meaningful with it
        console.log(`The user just pressed ${ev.key}!`);
    }
}