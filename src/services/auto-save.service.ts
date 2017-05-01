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
    console.log(`Actual saving: ${key}, ${data}`);
  }

  getFromStorage(key: string) {
    const currentData = this.storage.tryGetObject(this.asMasterKey) || {};
    console.log('using key: ', key);
    console.log('returned object from storage: ', currentData);
    console.log('returned value from storage: ', currentData[key]);
    return currentData[key];
  }

}
