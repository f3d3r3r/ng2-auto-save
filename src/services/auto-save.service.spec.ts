import {async} from "@angular/core/testing";
import {AutoSaveService} from "./auto-save.service";
import * as sinon from "sinon";
import {CoolLocalStorage} from "angular2-cool-storage";

describe('Autosave service test', () => {
  let service: AutoSaveService;
  let serviceMock: any;

  beforeEach(async(() => {
    serviceMock = <any> sinon.createStubInstance(CoolLocalStorage);
    spyOn(serviceMock, 'tryGetObject').and.returnValue({unique999: "savedText"});
    spyOn(serviceMock, 'setObject');
    service = new AutoSaveService(serviceMock);
  }));

  it('should create the service', async(() => {
    expect(service).toBeDefined();
  }));

  it('should return value from storage', async(() => {
    const result = service.getFromStorage('unique999');
    expect(serviceMock.tryGetObject).toHaveBeenCalled();
    expect(result).toBe("savedText");
  }));

  it('should return nothing if storage is empty', async(() => {
    const result = service.getFromStorage('something');
    expect(serviceMock.tryGetObject).toHaveBeenCalled();
    expect(result).toBe(undefined);
  }));

  it('should save to Storage with master key', async(() => {
    service.saveToStorage('unique11', 'important data');
    expect(serviceMock.setObject).toHaveBeenCalledWith('ng2-auto-save', {
      unique11: 'important data',
      unique999: "savedText"
    });
  }));


});
