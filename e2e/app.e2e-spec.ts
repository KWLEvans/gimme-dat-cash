import { GimmeDatCashPage } from './app.po';

describe('gimme-dat-cash App', function() {
  let page: GimmeDatCashPage;

  beforeEach(() => {
    page = new GimmeDatCashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
