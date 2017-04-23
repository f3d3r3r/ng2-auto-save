import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AutoSaveDirective} from "../services/auto-save.directive";

@NgModule({
  declarations: [
    AppComponent, AutoSaveDirective
  ],
  exports: [AutoSaveDirective],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
