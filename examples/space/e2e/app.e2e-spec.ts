import { SpacePage } from './app.po';

describe('space App', () => {
  let page: SpacePage;

  beforeEach(() => {
    page = new SpacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
