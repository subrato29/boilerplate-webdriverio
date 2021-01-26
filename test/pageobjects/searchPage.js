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

    get_locator_for_category_list() {
        return '//h3[text() = \'Category\']/../..//li//li[@data-scope = \'PRIMARY\']';
    };

    hover_motors() {
        const locator = '//span[text() = \'Home\']/../..//li/a[text() = \'Motors\']'
        const element = $(locator);
        if(element.isDisplayed()) {
            element.moveTo();
        } else {
            throw new Error(locator + ' element is not present in DOM search page');
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
            throw new Error(locator + ' element is not present in DOM search page');
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
            throw new Error(locator + ' element is not present in DOM search page');
        }
    }
}

export default new SearchPage();