'use strict';

import basePage from '../test/pageobjects/basePage';

class ActionsForWeb extends basePage{
    click(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.click();
        } else {
            super.throw_common_err(locator);
        }
    };

    doubleClick(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.doubleClick();
        } else {
            super.throw_common_err(locator);
        }
    };

    setValue(locator, value) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.setValue(value);
        } else {
            super.throw_common_err(locator);
        }
    };

    clear(locator) {
        const element = $(locator);
        if(element.isDisplayed()) {
            element.setValue('');
        } else {
            super.throw_common_err(locator);
        }
    };
}

export default new ActionsForWeb();