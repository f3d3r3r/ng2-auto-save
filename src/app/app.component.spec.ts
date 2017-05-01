import {async, TestBed} from "@angular/core/testing";

import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {AutoSaveDirective} from "../services/auto-save.directive";
import {AutoSaveService} from "../services/auto-save.service";
import {CoolStorageModule} from "angular2-cool-storage";

describe('AppComponent', () => {
  const welcomeMessage = 'Fancy demo page for ng2-auto-save';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AutoSaveDirective
      ],
      imports: [FormsModule, CoolStorageModule],
      providers: [AutoSaveService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(welcomeMessage);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(welcomeMessage);
  }));
});
