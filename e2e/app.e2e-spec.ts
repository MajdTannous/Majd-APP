import { MajdAppPage } from './app.po';

describe('majd-app App', () => {
  let page: MajdAppPage;

  beforeEach(() => {
    page = new MajdAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
