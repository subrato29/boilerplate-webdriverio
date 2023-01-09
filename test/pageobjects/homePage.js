'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class HomePage extends basePage{
    open() {
        super.open(urls.baseURL);
    };

    tearDown() {
        super.tearDown(urls.baseURL);
    }

    get categoryList() {
        return '//h3[text() = \'Category\']/../..//li//li[@data-scope = \'PRIMARY\']';
    };

    get classics() {
        return '//a[text() = \'Classics\']';
    };

    getListOfElementsAllCategories() {
        return '//select[@aria-label = \'Select a category for search\']/option';
    };

    get_locator_classic_car_page_header () {
        return '//h1/span[text() = \'Classic Cars\']';
    };

    setValueToSearchBox(value) {
        const locator = super.search();
        const element = $(locator);
        if (element.isDisplayed()) {
            element.setValue(value);
        } else {
            super.throwCommonErr(locator);
        }
    };

    clickBtnSearch() {
        const locator = super.btnSearch();
        const element = $(locator);
        if (element.isDisplayed()) {
            element.click();
        } else {
            super.throwCommonErr(locator);
        }
    };

    hoverMotors() {
        const locator = '//span[text() = \'Home\']/../..//li/a[text() = \'Motors\']'
        const element = $(locator);
        if(element.isDisplayed()) {
            element.moveTo();
        } else {
            super.throwCommonErr(locator);
        }
    };

    clickClassicHoveringMotors() {
        const locator = this.classics;;
        const element = $(locator);
        if (element.isDisplayed()) {
            element.click();
        } else {
            super.throwCommonErr(locator);
        }
    };

    getTextClassicCar() {
        const locator = this.get_locator_classic_car_page_header();
        const element = $(locator);
        if (element.isDisplayed()) {
            return element.getText();
        } else {
            super.throwCommonErr(locator);
        }
    };

    selectCategory(value) {
        const locator = '//select[@aria-label = \'Select a category for search\']';
        const element = $(locator);
        if (element.isDisplayed()) {
            element.selectByVisibleText(value); 
        } else {
            super.throwCommonErr(locator);
        }
    };
}

export default new HomePage();