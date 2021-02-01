'use strict';

import actions from '../../actions/actionsForWeb';
import basePage from './basePage';

class ProductDetailPage extends basePage {
    set_quantity(value) {
        const locator = this.get_quantity();
        actions.clear(locator);
        actions.setValue(locator, value);
    };

    get_quantity() {
        return '//input[@class = \'qtyInput\']';
    }
}

export default new ProductDetailPage();