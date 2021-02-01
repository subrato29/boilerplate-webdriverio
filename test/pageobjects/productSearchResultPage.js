'use strict';

import basePage from './basePage';
import urls from '../../config/urls';
import actions from '../../actions/actionsForWeb';

class ProductSearchResultPage extends basePage {
    open() {
        super.open(urls.baseURL);
    };

    tearDown() {
        super.tearDown(urls.baseURL);
    };

    get_search_result() {
        return '//h1[contains(text(), \'result for\')]/span[1]';
    };

    get_product_title() {
        return '//div[@class = \'srp-river-results clearfix\']//h3[@class = \'s-item__title\']/..';
    };

    get_no_exact_match_found() {
        return '//h3[text() = \'No exact matches found\']';
    };

    set_item_no(value) {
        const locator = super.search();
        const element = $(locator);
        if (element.isDisplayed()) {
            element.setValue(value);
        } else {
            super.throw_common_err(locator);
        }
    };

    click_product_title() {
        const locator = this.get_product_title();
        actions.doubleClick(locator);
    };

}

export default new ProductSearchResultPage();