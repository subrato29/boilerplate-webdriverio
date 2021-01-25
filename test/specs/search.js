'use strict';

import searchPage from '../../test/pageobjects/searchPage';
import data from '../../data/data';

describe('eBay product search: ', () => {

    beforeEach(() => {
        searchPage.open();
    });

    it('Validation of search box: ', () => {       
        searchPage.set_value_to_search_box(data.search.product_to_search);
        searchPage.click_btn_search();
    });
});