import { RxjsAngularPage } from './app.po';

describe('rxjs-angular App', () => {
  let page: RxjsAngularPage;

  beforeEach(() => {
    page = new RxjsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
