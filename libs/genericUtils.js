'use strict'

let genericUtils = {
  getArray: (string, separator) => {
    return string.split(separator)
  },

  getPrice: (string, separator) => {
    return parseFloat(string.split(separator)[1])
  },

  generateRandomNumber: (length) => {
    return Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1),
    )
  },

  getPriceList: (array) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].split('$')[1])
    }
    return result
  },

  determineOrderOfArray: (arr) => {
    if (arr.length < 2) {
      return 'not enough items'
    }
    let ascending = null
    let nextArr = arr.slice(1)
    for (var i = 0; i < nextArr.length; i++) {
      if (nextArr[i] === arr[i]) {
        continue
      } else if (ascending === null) {
        ascending = nextArr[i] > arr[i]
      }
    }
    if (ascending === null) {
      return 'all items are equal'
    }
    return ascending ? 'ascending' : 'descending'
  },

  /**
   * @function
   * @name compareArray
   * @param {array} array1 and array2
   * @returns {boolean}
   */
  compareArray: (a, b) => {
    if (a.length !== b.length) return false
    const uniqueValues = new Set([...a, ...b])
    for (const v of uniqueValues) {
      const aCount = a.filter((e) => e === v).length
      const bCount = b.filter((e) => e === v).length
      if (aCount !== bCount) return false
    }
    return true
  },

  err: (message) => {
    console.error('[ERR] ' + JSON.stringify(message))
  },

  info: (message) => {
    console.info('[INFO] ' + JSON.stringify(message))
  },

  log: (message) => {
    console.log('[LOG] ' + JSON.stringify(message))
  },
}

module.exports = genericUtils
