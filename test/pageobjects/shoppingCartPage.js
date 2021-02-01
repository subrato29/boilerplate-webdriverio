'use strict';

import actions from '../../actions/actionsForWeb';
import basePage from './basePage';
import urls from '../../config/urls';

class ShoppingCartPage extends basePage {
    open() {
        super.open(urls.cart);
    };

    get_order_tot_locator() {
        return '//span[text() = \'Order total\']/../..//span[@class = \'text-display\']/span';
    };

    get_order_total() {
        const locator = this.get_order_tot_locator();
        return actions.getText(locator);
    };

    get_btn_remove() {
        return '//button[@data-test-id = \'cart-remove-item\']';
    }

    get_no_item_in_cart() {
        return '//span[text() = "You don\'t have any items in your cart."]';
    }

    click_btn_remove() {
        const locator = this.get_btn_remove();
        actions.click(locator);
    }
}

export default new ShoppingCartPage();