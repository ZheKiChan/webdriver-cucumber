const { When } = require('cucumber');
const BasePage = require('../../page_objects/basePage');

const basePage = new BasePage();

When(/^I open "([^"]*)" url$/, async function(url) {
    await basePage.openPage(url);
});

When(/^I enter movie title "([^"]*)" in search$/, async function(value) {
    const searchInput = await basePage.getElement('input[name="kp_query"]');
    await basePage.inputValue(searchInput, value);
})

When(/^I wait for "([^"]*)" seconds$/, async function(time) {
    await browser.pause(time * 1000);
})