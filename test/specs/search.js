'use strict';

const searchPage = require('../../test/pageobjects/searchPage.js');

describe('eBay product search: ', () => {

    beforeEach(() => {
        browser.url('https://www.ebay.com/');
    });

    it('Should open the main url and verify the title: ', () => {
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay'
        );
    });

    it('Validation of search box: ', () => {
        searchPage.set_value_to_search_box('sdsdsdsdsdsdsdsdsdsdsd');
    });
});