'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class SearchPage extends basePage{

    open() {
        super.open(urls.baseURL);
    };

    tearDown() {
        super.tearDown('https://www.ebay.com/');
    }

    set_value_to_search_box(value) {
        const locator = '//input[@placeholder = \'Search for anything\']';
        const element = $(locator);
        if (element.isDisplayed()) {
            element.setValue(value);
        } else {
            throw new Error(locator + ' element is not present in DOM search page');
        }
    };

    click_btn_search() {
        const locator = '//input[@value = \'Search\']';
        const element = $(locator);
        if (element.isDisplayed()) {
            element.click();
        } else {
            throw new Error(locator + ' element is not present in DOM search page');
        }
    };
}

export default new SearchPage();