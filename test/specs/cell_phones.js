'use strict';

import cellPhonePage from '../pageobjects/cellPhonePage'
import genericUtils from '../../libs/genericUtils';
import webdriverUtils from '../../libs/webdriverUtils';
import { expect } from 'chai';

describe('Price verification: ', () => {
    beforeEach(() => {
        cellPhonePage.open();
    });

    it('Verification of price in lowest to highest: ', () => {
        let price_list = webdriverUtils.findElements(cellPhonePage.price);
        expect(genericUtils.determineOrderOfArray(price_list)).to.be.equal('ascending');
    });

    it('Verification of price in highest to lowest: ', () => {
        cellPhonePage.open_highest_first();
        let price_list = webdriverUtils.findElements(cellPhonePage.price);
        expect(genericUtils.determineOrderOfArray(price_list)).to.be.equal('descending');
    });

    afterEach(() => {
        cellPhonePage.tearDown();
    });
})