import { CharactersPage } from './app.po';

describe('characters App', function() {
  let page: CharactersPage;

  beforeEach(() => {
    page = new CharactersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
