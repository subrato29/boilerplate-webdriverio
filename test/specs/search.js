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
        let list_of_cat = webdriverUtils.findElements('//h3[text() = \'Category\']/../..//li//li[@data-scope = \'PRIMARY\']');
        expect(list_of_cat).to.deep.equal(data.product_cat);
    });

    afterEach(() => {
        searchPage.tearDown();
    });
});