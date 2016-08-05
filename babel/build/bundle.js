"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var operations = exports.operations = {
    add: function add(a, b) {
        return a + b;
    },
    substract: function substract(a, b) {
        return a - b;
    }
};
'use strict';

var _arithmetic = require('./arithmetic.js');

var result = _arithmetic.operations.add(1, 2);
console.log('Results : ' + result);

result = _arithmetic.operations.substract(5, 2);
console.log('Result: ' + result);
