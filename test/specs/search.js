'use strict';

import searchPage from '../../test/pageobjects/searchPage';
import data from '../../data/data';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('eBay product search: ', () => {
    beforeEach(() => {
        searchPage.open();
    });

    it('Validation of search box: ', () => {    
        searchPage.set_value_to_search_box(data.search.product_to_search);
        searchPage.click_btn_search();
        let list_of_cat = webdriverUtils.findElements(searchPage.get_locator_for_category_list());
        expect(list_of_cat).to.deep.equal(data.product_cat);
    });

    it('Clicking classics after hovering on motor: ', () => {
        searchPage.hover_motors();
        webdriverUtils.waitForDisplayed(searchPage.get_locator_classics(), 2000);
        searchPage.click_classic_hovering_motors();
        webdriverUtils.waitUntilTextChange(searchPage.get_locator_classic_car_page_header(),
        'Classic Cars', 2000);
    });

    it('Verifying select All categories: ', () => {
        let list = webdriverUtils.findElements(searchPage.get_list_of_elements_all_categories());
        expect(list).to.deep.equal(data.all_cat);
    });

    it('Verify category selected correctly reflected in page: ', () => {
        searchPage.select_category(data.category_selected);
        searchPage.click_btn_search();
        webdriverUtils.waitUntilTextChange('//h1[contains(@class, \'b-pageheader\')]', 
        data.category_selected, 3000);
    });

    afterEach(() => {
        searchPage.tearDown();
    });
});