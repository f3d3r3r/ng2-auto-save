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
    this.loadContent();
    //TODO: this line makes the 'ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.' disappear, but creates a changeDetectionLoop
    //this.ref.detectChanges();
  }

  loadContent() {
    const actualItem = this.autosaveService.getFromStorage(this.askey);
    console.log("returned item: ", actualItem);
    if (typeof actualItem !== 'undefined') {
      this.reloadData.emit(actualItem);
      this.asdata = actualItem;
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
