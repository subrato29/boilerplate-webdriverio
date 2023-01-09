'use strict';

import config from '../../config/config.js';

export default class BasePage{
    open(path) {
        browser.setTimeout({
            'implicit': config.implicitWait
        });
        browser.setTimeout({
            'pageLoad': config.pageloadTimeout
        });
        browser.url(path);
    };

    tearDown(path) {
        browser.url(path);
    };

    search() {
        return '//input[@placeholder = \'Search for anything\']';
    };

    btnSearch() {
        return '//input[@value = \'Search\']';
    };

    throwCommonErr(locator) {
        throw new Error(locator + ' element is not present in DOM search page');
    }
}