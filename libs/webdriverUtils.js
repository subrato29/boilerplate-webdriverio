'use strict';

import maxTimeOut from '../config/config';

module.exports = {
    /**
     * @function findElements
     * @param {string} locator
     * @returns array 
     */
    findElements: (locator) => {
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
    pause: (timeout) => {
        browser.pause(timeout);
    },

    /**
     * @function waitForDisplayed
     * @param {string} locator 
     * @param {Integer} timeout 
     */
    waitForDisplayed: (locator, timeout = maxTimeOut.explicitTimeout) => {
        $(locator).waitForDisplayed({timeout});
    },

    /**
     * @function waitUntilTextChange
     * @param {string} locator 
     * @param {string} text 
     * @param {Integer} timeout 
     */
    waitUntilTextChange: (locator, text, timeout = maxTimeOut.explicitTimeout) => {
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
    waitAndClick: (locator, timeout = maxTimeOut.explicitTimeout) => {
        const element = $(locator);
        element.waitForDisplayed({timeout});
        element.click();
    },

    /**
     * @function waitAndClickable
     * @param {string} locator 
     * @param {Integer} timeout 
     */
    waitAndClickable: (locator, timeout = maxTimeOut.explicitTimeout) => {
        const element = $(locator);
        element.waitForClickable({timeout});
    },

    /**
     * @function debug
     */
    debug: () => {
        browser.debug();
    }
}