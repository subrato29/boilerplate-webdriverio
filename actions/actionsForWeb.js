'use strict';

import basePage from '../test/pageobjects/basePage';

class ActionsForWeb extends basePage{
    /**
     * @function click
     * @param {string} locator 
     */
    click(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.click();
        } else {
            super.throw_common_err(locator);
        }
    };

    /**
     * @function doubleClick
     * @param {string} locator 
     */
    doubleClick(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.doubleClick();
        } else {
            super.throw_common_err(locator);
        }
    };

    /**
     * @function setValue
     * @param {string} locator 
     * @param {string} value
     */
    setValue(locator, value) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.setValue(value);
        } else {
            super.throw_common_err(locator);
        }
    };

    /**
     * @function clear
     * @param {string} locator
     */
    clear(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.setValue('');
        } else {
            super.throw_common_err(locator);
        }
    };

    /**
     * @function selectByVisibleText
     * @param {string} locator 
     * @param {string} value
     */
    selectByVisibleText(locator, value) {
        const element = $(locator);
        if (element.isDisplayed()) {
            element.selectByVisibleText(value); 
        } else {
            super.throw_common_err(locator);
        }
    };

    /**
     * @function moveTo
     * @param {string} locator
     */
    moveTo(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.moveTo();
        } else {
            super.throw_common_err(locator);
        }
    };

    /**
     * @function getText
     * @param {string} locator
     */
    getText(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            return element.getText();
        } else {
            super.throw_common_err(locator);
        }
    };
}

export default new ActionsForWeb();