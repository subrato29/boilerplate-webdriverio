'use strict'

import pdtSearchResultPage from '../pageobjects/productSearchResultPage'
import homePage from '../pageobjects/homePage'
import pdtDetailPage from '../../test/pageobjects/productDetailPage'
import shoppingCartPage from '../../test/pageobjects/shoppingCartPage'
import data from '../../data/data'
import webdriverUtils from '../../libs/webdriverUtils'
import genericUtils from '../../libs/genericUtils'
import { expect } from 'chai'

describe('Add to cart and Checkout flow: ', () => {
  beforeEach(() => {
    pdtSearchResultPage.open()
  })

  it.skip('Validating a single search item by one item no: ', () => {
    pdtSearchResultPage.setItemNo(data.checkout.item_no)
    homePage.clickBtnSearch()
    webdriverUtils.waitUntilTextChange(pdtSearchResultPage.searchResult, '1')
  })

  it.skip('Validating a checkout flow: ', () => {
    let expectedTotItemPrice =
      data.checkout.item_price * data.checkout.item_quantity
    pdtSearchResultPage.setItemNo(data.checkout.item_no)
    homePage.clickBtnSearch()
    webdriverUtils.waitForDisplayed(pdtSearchResultPage.productTitle)
    pdtSearchResultPage.clickProductTitle()
    webdriverUtils.waitForDisplayed(pdtDetailPage.quantity)
    pdtDetailPage.setQuantity(data.checkout.item_quantity)
    pdtDetailPage.clickAddToCart()
    pdtDetailPage.clickNoThanks()
    webdriverUtils.waitForDisplayed(pdtDetailPage.price)
    let actualTotItemPrice = genericUtils.getPrice(
      pdtDetailPage.getItemPrice(),
      '$',
    )
    expect(expectedTotItemPrice).to.be.equal(actualTotItemPrice)
    pdtDetailPage.clickBtnCheckout()
    webdriverUtils.waitAndClick(pdtDetailPage.continueAsGuest)
    actualTotItemPrice = genericUtils.getPrice(
      shoppingCartPage.getOrderTotal(),
      '$',
    )
    expect(expectedTotItemPrice).to.be.equal(actualTotItemPrice)
  })

  it.skip('Remove item from shopping cart page: ', () => {
    shoppingCartPage.open()
    shoppingCartPage.clickBtnRemove()
    webdriverUtils.waitForDisplayed(shoppingCartPage.noItemInCart)
  })

  afterEach(() => {
    pdtSearchResultPage.tearDown()
  })
})
