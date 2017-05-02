import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {AutoSaveService} from "./auto-save.service";

@Directive({
  selector: `[auto-save]`
})
export class AutoSaveDirective {

  @Input() asdata: string;
  @Input() askey: string;
  @Output() reloadData: EventEmitter<string> = new EventEmitter<string>();
  private timeout;

  constructor(private autosaveService: AutoSaveService) {
    this.autosaveService = autosaveService;
  }

  ngAfterViewInit() {
    //TODO: this line makes the 'ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.', more info https://github.com/angular/angular/issues/6005
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.loadContent()
    }, 500);
  }

  loadContent() {
    const actualItem = this.autosaveService.getFromStorage(this.askey);
    if (typeof actualItem !== 'undefined') {
      this.reloadData.emit(actualItem);
    }
  }

  saveHandler() {
    this.autosaveService.saveToStorage(this.askey, this.asdata);
  }

  ngOnChanges(): void {
    this.saveHandler();
  }
}
