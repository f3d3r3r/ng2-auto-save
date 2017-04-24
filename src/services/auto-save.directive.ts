import {ChangeDetectorRef, Directive, EventEmitter, Input, Output} from "@angular/core";
import {AutoSaveService} from "./auto-save.service";
import _ from "lodash";

@Directive({
  selector: `[auto-save]`
})
export class AutoSaveDirective {

  @Input() asdata: string;
  @Input() askey: string;
  @Output() reloadData: EventEmitter<string> = new EventEmitter<string>();

  constructor(private ref: ChangeDetectorRef, private autosaveService: AutoSaveService) {
    this.autosaveService = autosaveService;
  }

  ngAfterViewInit() {
    //TODO: this line makes the 'ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.', more info https://github.com/angular/angular/issues/6005
    window.setTimeout(() => {this.loadContent()}, 1);
  }

  loadContent() {
    const actualItem = this.autosaveService.getFromStorage(this.askey);
    console.log("returned item: ", actualItem);
    if (typeof actualItem !== 'undefined') {
      this.reloadData.emit(actualItem);
    }
  }

  saveHandler() {
    console.log(`'Data input has changed with key: ${this.askey}, ${this.asdata}`);
    this.autosaveService.saveToStorage(this.askey, this.asdata);
  }

  ngOnChanges(): void {
    this.saveHandler();
  }
}
