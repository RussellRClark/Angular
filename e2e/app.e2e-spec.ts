import { AppPage } from './app.po';

describe('pdtemplate-anos5 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to PDTemplateANOS5 - Hosted on: Firebase and GitHub Pages');
  });
});
