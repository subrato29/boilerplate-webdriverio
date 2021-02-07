'use strict';

import basePage from './basePage';
import urls from '../../config/urls';

class DealsPage extends basePage {
    open() {
        super.open(urls.deals);
    };

    tearDown() {
        super.tearDown(urls.baseURL);
    }

    get header_deals_page() {
        return '//a[text() = \'Deals\']';
    };

    get subtabs() {
        return '//a[text() = \'Deals\']/../..//li/a/span';
    }
}

export default new DealsPage();
