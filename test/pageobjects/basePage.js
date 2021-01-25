'use strict';

export default class BasePage {
    open(path) {
        browser.url(path);
    };

    tearDown(path) {
        browser.url(path);
    };
}