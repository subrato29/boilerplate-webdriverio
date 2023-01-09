'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class CellPhones extends basePage {
    open() {
        super.open(urls.cellPhonesLowestFirst);
    };

    openHighestFirst() {
        super.open(urls.cellPhonesHighestFirst)
    }

    tearDown() {
        super.tearDown(urls.baseURL);
    };

    get price() {
        return '//span[@itemprop = \'price\']';
    };

    get showFeatureItems() {
        return '//button[@aria-label = \'Show featured items\']';
    };
}

export default new CellPhones();