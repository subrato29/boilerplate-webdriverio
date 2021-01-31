'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class checkoutPage extends basePage {
    open() {
        super.open(urls.baseURL);
    }

    tearDown() {
        super.tearDown(urls.baseURL);
    }

    set_item_no(value) {
        const locator = super.search();
        const element = $(locator);
        if (element.isDisplayed()) {
            element.setValue(value);
        } else {
            super.throw_common_err(locator);
        }
    };

    get_search_result() {
        return '//h1[contains(text(), \'result for\')]/span[1]';
    }

}

export default new checkoutPage();