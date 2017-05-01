import {Ng2AutoSavePage} from "./app.po";

describe('ng2-auto-save App', () => {
  let page: Ng2AutoSavePage;

  beforeEach(() => {
    page = new Ng2AutoSavePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
