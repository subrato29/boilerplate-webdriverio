'use strict'

import actions from '../../actions/actionsForWeb'
import basePage from './basePage'

class ProductDetailPage extends basePage {
  get quantity() {
    return "//input[@class = 'qtyInput']"
  }

  get addToCart() {
    return "//a[contains(text(), 'Add to cart')]"
  }

  get noThanks() {
    return "//button[text() = 'No thanks']"
  }

  get price() {
    return "//div[@class = 'item-price']/span/span/span"
  }

  get btnCheckout() {
    return "//button[text() = 'Go to checkout']"
  }

  get continueAsGuest() {
    return "//button[text() = 'Continue as guest']"
  }

  setQuantity(value) {
    const locator = this.quantity
    actions.clear(locator)
    actions.setValue(locator, value)
  }

  clickAddToCart() {
    const locator = this.addToCart
    actions.click(locator)
  }

  clickNoThanks() {
    const locator = this.noThanks
    actions.click(locator)
  }

  getItemPrice() {
    const locator = this.price
    return actions.getText(locator)
  }

  clickBtnCheckout() {
    const locator = this.btnCheckout
    actions.click(locator)
  }
}

export default new ProductDetailPage()
