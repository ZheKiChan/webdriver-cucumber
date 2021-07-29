const { Then } = require('cucumber');
const { expect } = require('chai');
const BasePage = require('../../page_objects/basePage');

const basePage = new BasePage();

Then(/^Page title should be "([^"]*)"$/, async function(title) {
    let pageTitle = await basePage.getTitle();
    expect(pageTitle).to.be.equal(title);
});

Then(/^In search dropdown movie "([^"]*)" should be shown$/, async function(movieTitle) {
    const dropdown = await basePage.getElement('//div[@data-index=0]//h4');
    const firstMovie = await basePage.getText(dropdown);
    expect(firstMovie).to.be.oneOf(['Дом, который построил Джек', 'Лига справедливости Зака Снайдера']);
})