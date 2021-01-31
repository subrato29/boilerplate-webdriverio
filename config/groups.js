'use strict';

const { checkout } = require("../data/data");

module.exports = {
    specs: {
        all: './test/specs/**/*.js',
        search: './test/specs/search.js',
        checkout: './test/specs/checkout.js'
    }
}