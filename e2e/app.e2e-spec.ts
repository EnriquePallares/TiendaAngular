import { TiendaPage } from './app.po';

describe('tienda App', function() {
  let page: TiendaPage;

  beforeEach(() => {
    page = new TiendaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
