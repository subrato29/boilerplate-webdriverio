'use strict';

import basePage from './basePage';
import urls from '../../config/urls';
import actions from '../../actions/actionsForWeb';

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
    };

    get fashion() {
        return '//span[text() = \'Fashion\']/..';
    };

    get watches() {
        return '//a[text() = \'Watches\'][contains(@class, \'navigation-desktop\')]';
    };

    get page_header_watches() {
        return '//span[text() = \'Watches\']';
    }
    
    hover_fashion() {
        const locator = this.fashion;
        actions.moveTo(locator);
    }
}

export default new DealsPage();
