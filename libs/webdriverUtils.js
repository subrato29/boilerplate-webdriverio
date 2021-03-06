'use strict';

import maxTimeOut from '../config/config';

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
    waitForDisplayed: function(locator, timeout = maxTimeOut.explicitTimeout) {
        $(locator).waitForDisplayed({timeout});
    },

    /**
     * @function waitUntilTextChange
     * @param {string} locator 
     * @param {string} text 
     * @param {Integer} timeout 
     */
    waitUntilTextChange: function(locator, text, timeout = maxTimeOut.explicitTimeout) {
        browser.waitUntil(() => {
            return $(locator).getText() === text;
        }, {
            timeout,
            timeoutMsg: 'Timeout for the locator: ' + locator + ' where the text is: ' + text
        });
    },

    /**
     * @function waitAndClick
     * @param {string} locator 
     * @param {Integer} timeout 
     */
    waitAndClick: function(locator, timeout = maxTimeOut.explicitTimeout) {
        const element = $(locator);
        element.waitForDisplayed({timeout});
        element.click();
    },

    /**
     * @function waitAndClickable
     * @param {string} locator 
     * @param {Integer} timeout 
     */
    waitAndClickable: function(locator, timeout = maxTimeOut.explicitTimeout) {
        const element = $(locator);
        element.waitForClickable({timeout});
    },

    /**
     * @function debug
     */
    debug: function() {
        browser.debug();
    }
}