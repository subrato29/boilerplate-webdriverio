'use strict';

import homePage from '../../test/pageobjects/homePage';
import pdtSearchResultPage from '../pageobjects/productSearchResultPage';
import data from '../../data/data';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('eBay product search: ', () => {
    beforeEach(() => {
        homePage.open();
    });

    it.skip('Validation of search box: ', () => {    
        homePage.setValueToSearchBox(data.search.productToSearch);
        homePage.clickBtnSearch();
        let list_of_cat = webdriverUtils.findElements(homePage.categoryList);
        expect(list_of_cat).to.deep.equal(data.product_cat);
    });

    it.skip('Clicking classics after hovering on motor: ', () => {
        homePage.hoverMotors();
        webdriverUtils.waitForDisplayed(homePage.classics);
        homePage.clickClassicHoveringMotors();
        webdriverUtils.waitUntilTextChange(homePage.classicCarPageHeader,
        'Classic Cars', 2000);
    });

    it('Verifying select All categories: ', () => {
        let list = webdriverUtils.findElements(homePage.getListOfElementsAllCategories());
        expect(list).to.deep.equal(data.all_cat);
    });

    it('Verify category selected correctly reflected in page: ', () => {
        homePage.selectCategory(data.categorySelected);
        homePage.clickBtnSearch();
        webdriverUtils.waitUntilTextChange('//h1[contains(@class, \'b-pageheader\')]', 
        data.categorySelected, 3000);
    });

    it('Verify non searchable item: ', () => {
        homePage.setValueToSearchBox('ahgdhagdh');
        homePage.clickBtnSearch();
        webdriverUtils.waitForDisplayed(pdtSearchResultPage.noExactMatchFound);
    });

    it('Verifying best match: ', () => {
        homePage.setValueToSearchBox(data.search.productToSearch);
        homePage.clickBtnSearch();
        pdtSearchResultPage.clickBtnBestMatch();
        let list = webdriverUtils.findElements(pdtSearchResultPage.bestMatchList);
        expect(list).to.deep.equal(data.bestMatchTypes);
    });

    afterEach(() => {
        homePage.tearDown();
    });
});