import {NgModule, ModuleWithProviders} from '@angular/core';

import {AutoSaveDirective} from "./src/services/auto-save.directive";
export {AutoSaveDirective} from "./src/services/auto-save.directive";

@NgModule({
  providers: [AutoSaveDirective]
})
export class AutoSaveModule {
  /** @deprecated */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AutoSaveModule,
      providers: []
    };
  }
}
