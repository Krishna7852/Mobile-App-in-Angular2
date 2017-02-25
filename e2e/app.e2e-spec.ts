import { SignInSignUpPage } from './app.po';

describe('sign-in-sign-up App', function() {
  let page: SignInSignUpPage;

  beforeEach(() => {
    page = new SignInSignUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
