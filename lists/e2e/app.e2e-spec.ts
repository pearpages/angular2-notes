import { ListsPage } from './app.po';

describe('lists App', () => {
  let page: ListsPage;

  beforeEach(() => {
    page = new ListsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
