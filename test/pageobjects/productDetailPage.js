'use strict';

import actions from '../../actions/actionsForWeb';
import basePage from './basePage';

class ProductDetailPage extends basePage {
    get_quantity() {
        return '//input[@class = \'qtyInput\']';
    };

    get_add_to_cart() {
        return '//a[contains(text(), \'Add to cart\')]'
    };

    get_no_thanks() {
        return '//button[text() = \'No thanks\']';
    };

    get_price_locator() {
        return '//div[@class = \'item-price\']/span/span/span';
    };

    get_btn_checkout_locator() {
        return '//button[text() = \'Go to checkout\']';
    };

    get_btn_continue_as_guest() {
        return '//button[text() = \'Continue as guest\']';
    };

    set_quantity(value) {
        const locator = this.get_quantity();
        actions.clear(locator);
        actions.setValue(locator, value);
    };

    click_add_to_cart() {
        const locator = this.get_add_to_cart();
        actions.click(locator);
    };

    click_no_thanks() {
        const locator = this.get_no_thanks();
        actions.click(locator);
    };

    get_item_price() {
        const locator = this.get_price_locator();
        return actions.getText(locator);
    };

    click_btn_checkout() {
        const locator = this.get_btn_checkout_locator();
        actions.click(locator);
    };
}

export default new ProductDetailPage();