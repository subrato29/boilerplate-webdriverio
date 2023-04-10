'use strict'

import basePage from './basePage'
import urls from '../../config/urls'
import actions from '../../actions/actionsForWeb'

class ProductSearchResultPage extends basePage {
  open() {
    super.open(urls.baseURL)
  }

  tearDown() {
    super.tearDown(urls.baseURL)
  }

  get searchResult() {
    return "//h1[contains(text(), 'result for')]/span[1]"
  }

  get productTitle() {
    return "//div[@class = 'srp-river-results clearfix']//h3[@class = 's-item__title']/.."
  }

  get noExactMatchFound() {
    return "//h3[text() = 'No exact matches found']"
  }

  get saveThisSearch() {
    return "//span[text() = 'Save this search']/.."
  }

  get saved() {
    return "//span[text() = 'Saved']/.."
  }

  get btnBestMatch() {
    return "//button[contains(@aria-label, 'Best Match selected')]"
  }

  get bestMatchList() {
    return "//a/span[text() = 'Best Match']/../..//span"
  }

  setItemNo(value) {
    const locator = super.search()
    const element = $(locator)
    if (element.isDisplayed()) {
      element.setValue(value)
    } else {
      super.throwCommonErr(locator)
    }
  }

  clickProductTitle() {
    const locator = this.productTitle
    actions.doubleClick(locator)
  }

  clickBtnBestMatch() {
    const locator = this.btnBestMatch
    actions.click(locator)
  }
}

export default new ProductSearchResultPage()
