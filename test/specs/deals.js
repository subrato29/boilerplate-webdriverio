'use strict';

import dealsPage from '../pageobjects/dealsPage';
import webdriverUtils from '../../libs/webdriverUtils';
import data from '../../data/data';
import { expect } from 'chai';

describe('Validation of deals test scenario: ', () => {
    beforeEach(() => {
        dealsPage.open();
    });

    it('Validation of deals page header:', () => {
        webdriverUtils.waitForDisplayed(dealsPage.headerDealsPage);
    });

    it('Validating subtabs of deals page: ', () => {
        let subtabs = webdriverUtils.findElements(dealsPage.subtabs);
        expect(subtabs).to.deep.equal(data.subtabsAtDealsPage);
    });

    it('Validating watches page: ', () => {
        dealsPage.hoverFashion();
        webdriverUtils.waitAndClick(dealsPage.watches);
        webdriverUtils.waitForDisplayed(dealsPage.pageHeaderWatches);
    });

    afterEach(() => {
        dealsPage.tearDown();
    });
})