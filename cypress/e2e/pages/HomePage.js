import BasePage from './BasePage';

class HomePage extends BasePage {
	constructor() {
		super();
		this.ACCEPT_COOKIES = '#CookieBoxSaveButton';
		this.BOOKMARKS = '[role="navigation"]';
		this.SEARCH_BUTTON = '[aria-label="Open search"]';
		this.SEARCH_INPUT = 'input[type="search"]';
		this.SEARCH_FORM = 'form[role="search"]';
	}

	acceptCookies() {
		cy.get(this.ACCEPT_COOKIES).click({ force: true });
	}

	bookmarks() {
		return cy.get(this.BOOKMARKS).should('be.visible');
	}

	clickOnSearchButton() {
		cy.get(this.SEARCH_BUTTON).should('be.visible').click();
		return this;
	}

	searchForText(text) {
		cy.get(this.SEARCH_INPUT).type(text);
		cy.get(this.SEARCH_FORM).submit();
	}

	hoverOnMenu(menu) {
		cy.get(this.BOOKMARKS)
			.should('be.visible')
			.within(() => {
				cy.contains(menu).should('be.visible').trigger('mouseover');
			});
	}

	clickOnContactMenu(menu) {
		cy.contains('Contact').should('be.visible').click();
	}
}

export default new HomePage();
