'use strict';

import cellPhonePage from '../pageobjects/cellPhonePage'
import genericUtils from '../../libs/genericUtils';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('Price verification: ', () => {
    beforeEach(() => {
        cellPhonePage.open();
    });

    it.skip('Verification of price in lowest to highest: ', () => {
        let priceList = webdriverUtils.findElements(cellPhonePage.price);
        expect(genericUtils.determineOrderOfArray(priceList)).to.be.equal('ascending');
    });

    it.skip('Verification of price in highest to lowest: ', () => {
        cellPhonePage.openHighestFirst();
        let priceList = webdriverUtils.findElements(cellPhonePage.price);
        expect(genericUtils.determineOrderOfArray(priceList)).to.be.equal('descending');
    });

    afterEach(() => {
        cellPhonePage.tearDown();
    });
})