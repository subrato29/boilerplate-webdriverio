'use strict';

class SearchPage  {
    set_value_to_search_box(value) {
        const locator = '//input[@placeholder = \'Search for anything\']';
        const element = $(locator);
        return new Promise((resolve, reject) => {
            if (element.isDisplayed()) {
                resolve(element.setValue(value));
            } else {
                reject(locator + ' element is not present in DOM search page');
            }
        });
    };
}

module.exports = new SearchPage();