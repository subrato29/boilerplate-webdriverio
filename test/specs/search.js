'use strict';

import homePage from '../../test/pageobjects/homePage';
import data from '../../data/data';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('eBay product search: ', () => {
    beforeEach(() => {
        homePage.open();
    });

    it('Validation of search box: ', () => {    
        homePage.set_value_to_search_box(data.search.product_to_search);
        homePage.click_btn_search();
        let list_of_cat = webdriverUtils.findElements(homePage.get_locator_for_category_list());
        expect(list_of_cat).to.deep.equal(data.product_cat);
    });

    it('Clicking classics after hovering on motor: ', () => {
        homePage.hover_motors();
        webdriverUtils.waitForDisplayed(homePage.get_locator_classics(), 2000);
        homePage.click_classic_hovering_motors();
        webdriverUtils.waitUntilTextChange(homePage.get_locator_classic_car_page_header(),
        'Classic Cars', 2000);
    });

    it('Verifying select All categories: ', () => {
        let list = webdriverUtils.findElements(homePage.get_list_of_elements_all_categories());
        expect(list).to.deep.equal(data.all_cat);
    });

    it('Verify category selected correctly reflected in page: ', () => {
        homePage.select_category(data.category_selected);
        homePage.click_btn_search();
        webdriverUtils.waitUntilTextChange('//h1[contains(@class, \'b-pageheader\')]', 
        data.category_selected, 3000);
    });

    afterEach(() => {
        homePage.tearDown();
    });
});