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
        webdriverUtils.waitForDisplayed(dealsPage.header_deals_page);
    });

    it('Validating subtabs of deals page: ', () => {
        let subtabs = webdriverUtils.findElements(dealsPage.subtabs);
        expect(subtabs).to.deep.equal(data.subtabs_at_deals_page);
    });

    afterEach(() => {
        dealsPage.tearDown();
    });
})