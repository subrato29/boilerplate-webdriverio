'use strict'

import actions from '../../actions/actionsForWeb'
import basePage from './basePage'
import urls from '../../config/urls'

class ShoppingCartPage extends basePage {
  open() {
    super.open(urls.cart)
  }

  get orderTotal() {
    return "//span[text() = 'Order total']/../..//span[@class = 'text-display']/span"
  }

  getOrderTotal() {
    const locator = this.orderTotal
    return actions.getText(locator)
  }

  get btnRemove() {
    return "//button[@data-test-id = 'cart-remove-item']"
  }

  get noItemInCart() {
    return '//span[text() = "You don\'t have any items in your cart."]'
  }

  clickBtnRemove() {
    const locator = this.btnRemove()
    actions.click(locator)
  }
}

export default new ShoppingCartPage()
