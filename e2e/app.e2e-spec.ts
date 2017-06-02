import { SharingMyBikePage } from './app.po';

describe('sharing-my-bike App', () => {
  let page: SharingMyBikePage;

  beforeEach(() => {
    page = new SharingMyBikePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
