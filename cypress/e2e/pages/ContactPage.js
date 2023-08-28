import BasePage from './BasePage';

class ContactPage extends BasePage {
	constructor() {
		super();
		this.FIRST_NAME = 'input[name="firstname"]';
		this.LAST_NAME = 'input[name="lastname"]';
		this.BUSINESS_EMAIL = 'input[name="email"]';
		this.MOBILE_PHONE_NUMBER = 'input[name="mobilephone"]';
		this.COMPANY = 'input[name="company"]';
		this.COUNTRY = 'select[name="country"]';
		this.HOW_DID_YOU_HEAR_ABOUT_MOSTLY_AI =
			'input[name="how_did_you_hear_about_mostly_ai___free_text"]';
		this.MESSAGE = 'textarea[name="message"]';
		this.CHECKBOX = 'input[type="checkbox"]';
		this.SEND_MESSAGE = 'input[type="submit"][value="SEND MESSAGE"]';
	}

	fillForm() {
		cy.contains('Ask us anything!').click();
		this.enterText(this.FIRST_NAME, 'Roopesh');
		this.enterText(this.LAST_NAME, 'Hiriyanna');
		this.enterText(this.BUSINESS_EMAIL, 'roopesh@roopesh.com');
		this.enterText(this.MOBILE_PHONE_NUMBER, '1234567890');
		this.enterText(this.COMPANY, 'Roopesh');
		cy.get(this.COUNTRY).should('be.visible').select('Netherlands');
		this.enterText(this.HOW_DID_YOU_HEAR_ABOUT_MOSTLY_AI, 'Google search');
		this.enterText(this.MESSAGE, 'This is a sample message to mostly ai');
		cy.get(this.CHECKBOX).should('be.visible').check({ force: true });
	}

	hoverOnSendMessage() {
		cy.get(this.SEND_MESSAGE)
			.should('be.visible')
			.realHover({ position: 'center', scrollBehavior: false });
		cy.get(this.SEND_MESSAGE).should(
			'have.css',
			'background-color',
			'rgb(0, 0, 0)',
		);
		cy.get(this.SEND_MESSAGE).should('have.css', 'color', 'rgb(255, 255, 255)');
	}
}

export default new ContactPage();
