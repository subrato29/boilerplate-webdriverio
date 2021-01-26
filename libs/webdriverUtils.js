'use strict';

module.exports = {
    /**
     * @function findElements
     * @param {string} locator
     * @returns array 
     */
    findElements: function(locator) {
        let array = [];
        $$(locator).map((element) => {
            array.push(element.getText());
        });
        return array;
    },

    /**
     * @function pause
     * @param {Integer} timeout 
     */
    pause: function(timeout) {
        browser.pause(timeout);
    },

    /**
     * @function waitForDisplayed
     * @param {string} locator 
     * @param {Integer} timeout 
     */
    waitForDisplayed: function(locator, timeout) {
        $(locator).waitForDisplayed({timeout});
    },

    /**
     * @function waitUntilTextChange
     * @param {string} locator 
     * @param {string} text 
     * @param {Integer} timeout 
     */
    waitUntilTextChange: function(locator, text, timeout) {
        browser.waitUntil(() => {
            return $(locator).getText() === text;
        }, {
            timeout,
            timeoutMsg: 'Timeout for the locator: ' + locator
        });
    },

    /**
     * @function waitAndClick
     * @param {string} locator 
     * @param {Integer} timeout 
     */
    waitAndClick: function(locator, timeout) {
        const element = $(locator);
        element.waitForDisplayed({timeout});
        element.click();
    }
}