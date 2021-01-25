'use strict'

let genericUtils = {
	getArray: function(string, separator) {
        return string.split(separator);
    },

    generateRandomNumber: function (length) {
    	return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
	},

	getPriceList: function (array) {
		let result = [];
		for (let i = 0; i < array.length; i++) {
			result.push(array[i].split('$')[1]);
		}
		return result;
	},

	determineOrderOfArray: function(arr) {
	   if(arr.length < 2){
	      return 'not enough items';
	   };
	   let ascending = null;
	   let nextArr = arr.slice(1);
	   for(var i = 0; i < nextArr.length; i++) {
	      if(nextArr[i] === arr[i]){
	         continue;
	      }else if(ascending === null) {
	         ascending = nextArr[i] > arr[i];
	      }else if (ascending !== nextArr[i] > arr[i]){
	         return 'unsorted';
	      };
	   }
	   if(ascending === null){
	      return 'all items are equal';
	   };
	   return ascending ? 'ascending' : 'descending';
	},

	/**
     * @function
     * @name compareArray
     * @param {array} array1 and array2
     * @returns {boolean}
     */
	compareArray: function(a, b) {
		if (a.length !== b.length) return false;
		  const uniqueValues = new Set([...a, ...b]);
		  for (const v of uniqueValues) {
		    const aCount = a.filter(e => e === v).length;
		    const bCount = b.filter(e => e === v).length;
		    if (aCount !== bCount) return false;
		  }
		return true;
	},

	err: function(message) {
        console.error('[ERR] ' + JSON.stringify(message));
    },

    info: function(message) {
        console.info('[INFO] ' + JSON.stringify(message));
    },

    log: function(message) {
        console.log('[LOG] ' + JSON.stringify(message));
    },

    get_array_of_uri: function(array) {
        let array_of_uri = [];
        for (let value of array) {
            array_of_uri.push('spotify:track:' + value);
        }
        return array_of_uri;
    },

    get_array_of_object_uri: function(array) {
        let array_of_object_uri = [];
        for (let value of array) {
            array_of_object_uri.push({
                'uri': 'spotify:track:' + value
            })
        }
        return array_of_object_uri;
    }
};

module.exports = genericUtils;

