'use strict';

const searchPage = require('../../test/pageobjects/searchPage.js');
const data = require('../../data/data.js');
const urls = require('../../config/urls.js');

describe('eBay product search: ', () => {

    beforeEach(() => {
        browser.url(urls.baseURL);
    });

    it('Validation of search box: ', () => {
        searchPage.set_value_to_search_box(data.search.product_to_search);
        searchPage.click_btn_search();
    });
});