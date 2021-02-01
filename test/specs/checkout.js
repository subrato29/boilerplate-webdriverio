'use strict';

import pdtSearchResultPage from '../pageobjects/productSearchResultPage';
import homePage from '../pageobjects/homePage';
import pdtDetailPage from '../../test/pageobjects/productDetailPage';
import shoppingCartPage from '../../test/pageobjects/shoppingCartPage';
import data from '../../data/data';
import webdriverUtils from '../../libs/webdriverUtils';
import genericUtils from '../../libs/genericUtils';
import { expect } from 'chai';

describe('Add to cart and Checkout flow: ', () => {
    beforeEach(() => {
        pdtSearchResultPage.open();
    });

    it('Validating a single search item by one item no: ', () => {
        pdtSearchResultPage.set_item_no(data.checkout.item_no);
        homePage.click_btn_search();
        webdriverUtils.waitUntilTextChange(pdtSearchResultPage.get_search_result(), '1');
    });

    it('Validating a checkout flow: ', () => {
        let expected_tot_item_price = (data.checkout.item_price) * (data.checkout.item_quantity);
        pdtSearchResultPage.set_item_no(data.checkout.item_no);
        homePage.click_btn_search();
        webdriverUtils.waitForDisplayed(pdtSearchResultPage.get_product_title())
        pdtSearchResultPage.click_product_title();
        webdriverUtils.waitForDisplayed(pdtDetailPage.get_quantity());
        pdtDetailPage.set_quantity(data.checkout.item_quantity);
        pdtDetailPage.click_add_to_cart();
        pdtDetailPage.click_no_thanks();
        webdriverUtils.waitForDisplayed(pdtDetailPage.get_price_locator());
        let actual_tot_item_price = genericUtils.getPrice(pdtDetailPage.get_item_price(), '$');
        expect(expected_tot_item_price).to.be.equal(actual_tot_item_price);
        pdtDetailPage.click_btn_checkout();
        webdriverUtils.waitAndClick(pdtDetailPage.get_btn_continue_as_guest());
        actual_tot_item_price = genericUtils.getPrice(shoppingCartPage.get_order_total(), '$');
        expect(expected_tot_item_price).to.be.equal(actual_tot_item_price);
    });

    it('Remove item from shopping cart page: ', () => {
        shoppingCartPage.open();
        shoppingCartPage.click_btn_remove();
        webdriverUtils.waitForDisplayed(shoppingCartPage.get_no_item_in_cart());
    });

    afterEach(() => {
        pdtSearchResultPage.tearDown();
    });
});