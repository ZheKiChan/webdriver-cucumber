const logger = require('../config/logger');

class BasePage {
    constructor() {
        this.searchInput = 'input[name="kp_query"]';
    }

    async getCurrentUrl() {
        const currentUrl = await browser.getUrl();
        logger.info(`Current url is ${currentUrl}`);
        return currentUrl;
    }

    async openPage(url) {
        return await browser.url(url);
    }

    async getTitle(page) {
        const title = await browser.getTitle();
        logger.debug(`The title is ${title}`);
        return title;
    }

    async getElement(selector) {
        let selectedElement = await $(selector);
        logger.debug(`The selected element is "${selectedElement}"`)
        return selectedElement;
    }

    async inputValue(elem, text) {
        await elem.setValue(text);
        logger.info(`The value "${text}" has been entered`);
    }

    async waitForElemToBeDisplayed(elementToBeDisplayed, milisec) {
        await elementToBeDisplayed.waitForDisplayed(milisec);
    }

    async getText(textOfElement) {
        return await textOfElement.getText();
    }

    async clickOn(elementToClickOn) {
        await elementToClickOn.click();
        logger.info(`${elementToClickOn} has been clicked`);
    }

    async waitUntilLoaded() {
        await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), {
            timeout: 60000,
            timeoutMsg: 'Message on failure'
        });
    }

    async getElementValue(element) {
        return element.getValue();
    }

    async browserWait(miliseconds) {
        await browser.pause(miliseconds);
    }
}

module.exports = BasePage;