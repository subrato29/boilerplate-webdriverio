'use strict';

module.exports = {
    /**
     * @function findElements
     * @param {string} locator
     * @returns array 
     */
    findElements: function(locator) {
        let array = [];
        $$(locator).map((element) => {
            array.push(element.getText());
        });
        return array;
    }
}