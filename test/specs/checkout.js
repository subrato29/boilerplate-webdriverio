'use strict';

import checkoutPage from '../../test/pageobjects/checkoutPage';
import searchPage from '../../test/pageobjects/searchPage';
import data, { search } from '../../data/data';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('Add to cart and Checkout flow: ', () => {
    beforeEach(() => {
        searchPage.open();
    });

    it('Validating a single search item by one item no: ', () => {
        checkoutPage.set_item_no(data.checkout.item_no);
        searchPage.click_btn_search();
        webdriverUtils.waitUntilTextChange(checkoutPage.get_search_result(), '1', 4000);
    })

    afterEach(() => {
        searchPage.tearDown();
    });
});