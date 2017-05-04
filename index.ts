import {NgModule, ModuleWithProviders} from '@angular/core';

import {AutoSaveDirective} from "./src/services/auto-save.directive";
export {AutoSaveDirective} from "./src/services/auto-save.directive";
import {AutoSaveService} from "./src/services/auto-save.service";
import {FormsModule} from "@angular/forms";
import { CoolLocalStorage } from "angular2-cool-storage";

@NgModule({
  declarations: [AutoSaveDirective],
  imports: [FormsModule],
  exports: [AutoSaveDirective],
  providers: [AutoSaveDirective, AutoSaveService, CoolLocalStorage]
})
export class AutoSaveModule {

}
