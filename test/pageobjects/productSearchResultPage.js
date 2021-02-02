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

    get_save_this_search() {
        return '//span[text() = \'Save this search\']/..';
    };

    get_saved_locator() {
        return '//span[text() = \'Saved\']/..';
    };

    get_btn_best_match() {
        return '//button[contains(@aria-label, \'Best Match selected\')]';
    };

    get_best_match_list() {
        return '//a/span[text() = \'Best Match\']/../..//span';
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

    click_btn_best_match() {
        const locator = this.get_btn_best_match();
        actions.click(locator);
    }

}

export default new ProductSearchResultPage();