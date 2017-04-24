import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AutoSaveDirective} from "../services/auto-save.directive";
import {CoolStorageModule} from "angular2-cool-storage";
import {AutoSaveService} from "../services/auto-save.service";

@NgModule({
  declarations: [
    AppComponent, AutoSaveDirective
  ],
  exports: [AutoSaveDirective],
  imports: [
    CoolStorageModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AutoSaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
