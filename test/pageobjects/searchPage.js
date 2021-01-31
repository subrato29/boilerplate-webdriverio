'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class SearchPage extends basePage{
    open() {
        super.open(urls.baseURL);
    };

    tearDown() {
        super.tearDown(urls.baseURL);
    }

    set_value_to_search_box(value) {
        const locator = super.search();
        const element = $(locator);
        if (element.isDisplayed()) {
            element.setValue(value);
        } else {
            super.throw_common_err(locator);
        }
    };

    click_btn_search() {
        const locator = super.btn_search();
        const element = $(locator);
        if (element.isDisplayed()) {
            element.click();
        } else {
            super.throw_common_err(locator);
        }
    };

    get_locator_for_category_list() {
        return '//h3[text() = \'Category\']/../..//li//li[@data-scope = \'PRIMARY\']';
    };

    hover_motors() {
        const locator = '//span[text() = \'Home\']/../..//li/a[text() = \'Motors\']'
        const element = $(locator);
        if(element.isDisplayed()) {
            element.moveTo();
        } else {
            super.throw_common_err(locator);
        }
    };

    get_locator_classics() {
        return '//a[text() = \'Classics\']';
    };

    click_classic_hovering_motors() {
        const locator = this.get_locator_classics();;
        const element = $(locator);
        if (element.isDisplayed()) {
            element.click();
        } else {
            super.throw_common_err(locator);
        }
    };

    get_locator_classic_car_page_header () {
        return '//h1/span[text() = \'Classic Cars\']';
    };

    get_text_classic_car() {
        const locator = this.get_locator_classic_car_page_header();
        const element = $(locator);
        if (element.isDisplayed()) {
            return element.getText();
        } else {
            super.throw_common_err(locator);
        }
    };

    get_list_of_elements_all_categories() {
        return '//select[@aria-label = \'Select a category for search\']/option';
    };

    select_category(value) {
        const locator = '//select[@aria-label = \'Select a category for search\']';
        const element = $(locator);
        if (element.isDisplayed()) {
            element.selectByVisibleText(value); 
        } else {
            super.throw_common_err(locator);
        }
    };
}

export default new SearchPage();