'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class CellPhones extends basePage {
    open() {
        super.open(urls.cell_phones_lowest_first);
    };

    open_highest_first() {
        super.open(urls.cell_phones_highest_first)
    }

    tearDown() {
        super.tearDown(urls.baseURL);
    };

    get price() {
        return '//span[@itemprop = \'price\']';
    };

    get show_feature_items() {
        return '//button[@aria-label = \'Show featured items\']';
    };
}

export default new CellPhones();