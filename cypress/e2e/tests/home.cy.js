import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

describe("Home page test", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.acceptCookies();
  });

  const bookmarks = [
    "Platform",
    "Synthetic Data",
    "Resources",
    "Company",
    "Pricing",
  ];

  it.each(bookmarks)("should verify the bookmark - %s", (bookmark) => {
    HomePage.bookmarks().should("contain", bookmark);
  });

  it("should verify that no results displayed on wrong search", () => {
    const text = "sythetic";
    HomePage.clickOnSearchButton().searchForText(text);
    HomePage.validateText("Sorry, no results for:");
    HomePage.validateText(text);
  });
});
