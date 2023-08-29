import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

describe('Contact page test', () => {
	beforeEach(() => {
		HomePage.visit();
		HomePage.acceptCookies();
	});

	it('should be able to fill the contact details form', () => {
		HomePage.hoverOnMenu('Company');
		HomePage.validateText('Company overview');
		HomePage.clickOnContactMenu('Company');
		ContactPage.validateUrl('/contact');
		ContactPage.validateText('Ask us anything!');
		ContactPage.fillForm();
		ContactPage.hoverOnSendMessage();
		ContactPage.validateSendMessageButtonColorChanges();
	});
});
