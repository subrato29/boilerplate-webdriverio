'use strict';

import pdtSearchResultPage from '../pageobjects/productSearchResultPage';
import homePage from '../pageobjects/homePage';
import pdtDetailPage from '../../test/pageobjects/productDetailPage';
import data from '../../data/data';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('Add to cart and Checkout flow: ', () => {
    beforeEach(() => {
        pdtSearchResultPage.open();
    });

    it('Validating a single search item by one item no: ', () => {
        pdtSearchResultPage.set_item_no(data.checkout.item_no);
        homePage.click_btn_search();
        webdriverUtils.waitUntilTextChange(pdtSearchResultPage.get_search_result(), '1', 4000);
    });

    it('Validating a checkout flow: ', () => {
        pdtSearchResultPage.set_item_no(data.checkout.item_no);
        homePage.click_btn_search();
        webdriverUtils.waitForDisplayed(pdtSearchResultPage.get_product_title(), 6000)
        pdtSearchResultPage.click_product_title();
        webdriverUtils.waitForDisplayed(pdtDetailPage.get_quantity(), 5000);
        pdtDetailPage.set_quantity(data.checkout.item_quantity);
    })

    afterEach(() => {
        pdtSearchResultPage.tearDown();
    });
});