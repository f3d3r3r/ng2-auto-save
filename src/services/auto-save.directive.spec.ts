import {AutoSaveDirective} from "../services/auto-save.directive";
import {async} from "@angular/core/testing";

describe('Autosave directive test', () => {
  let directive: AutoSaveDirective;
  let serviceMock: any;

  beforeEach(async(() => {
    serviceMock = {
      saveToStorage: () => {
      }
    };
    spyOn(serviceMock, 'saveToStorage');
    directive = new AutoSaveDirective(serviceMock);
  }));

  it('should create the service', async(() => {
    expect(directive).toBeDefined();
  }));

  it('if save handler is called, should use save service', async(() => {
    directive.saveHandler();
    expect(serviceMock.saveToStorage).toHaveBeenCalled();
  }));

  it('if save handler is called, should use save service', async(() => {
    directive.saveHandler();
    expect(serviceMock.saveToStorage).toHaveBeenCalled();
  }));

});
