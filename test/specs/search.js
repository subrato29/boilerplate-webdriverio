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
    })

    afterEach(() => {
        searchPage.tearDown();
    });
});