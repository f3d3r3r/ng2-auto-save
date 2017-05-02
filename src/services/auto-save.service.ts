import {Injectable} from "@angular/core";
import {CoolLocalStorage} from "angular2-cool-storage";

@Injectable()
export class AutoSaveService {

  storage: CoolLocalStorage;
  asMasterKey: string = 'ng2-auto-save';

  constructor(localStorage: CoolLocalStorage) {
    this.storage = localStorage;
  }

  saveToStorage(key: string, data: string) {
    let currentState = this.storage.tryGetObject(this.asMasterKey) || {};
    if (data) {
      (<any>currentState)[key] = data;
      this.storage.setObject(this.asMasterKey, currentState);
    }
  }

  getFromStorage(key: string) {
    const currentData = this.storage.tryGetObject(this.asMasterKey) || {};
    return currentData[key];
  }

}
