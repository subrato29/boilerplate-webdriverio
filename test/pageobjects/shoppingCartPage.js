'use strict';

import actions from '../../actions/actionsForWeb';
import basePage from './basePage';

class ShoppingCartPage extends basePage {
    get_order_tot_locator() {
        return '//span[text() = \'Order total\']/../..//span[@class = \'text-display\']/span';
    };

    get_order_total() {
        const locator = this.get_order_tot_locator();
        return actions.getText(locator);
    };
}

export default new ShoppingCartPage();