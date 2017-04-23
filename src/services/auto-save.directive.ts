import {Directive, HostListener, Input} from "@angular/core";


@Directive({
    selector: `[auto-save]`
})
export class AutoSaveDirective {

    @Input() asdata : string;
    @Input() askey : string;
    constructor(){

    }

    ngOnChanges(): void {
        console.log(`'Data input has changed with key: ${this.askey}, ${this.asdata}`);
        //this data needs to be saved
    }
}
