import { OnSightWebAppPage } from './app.po';

describe('on-sight-web-app App', () => {
  let page: OnSightWebAppPage;

  beforeEach(() => {
    page = new OnSightWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
