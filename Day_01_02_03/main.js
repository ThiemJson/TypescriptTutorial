"use strict";
exports.__esModule = true;
var module_getArrayPrimeNumber_1 = require("./module_getArrayPrimeNumber");
var ArrayOfNumber = Array(100);
for (var index = 0; index < 100; index++) {
    ArrayOfNumber[index] = index;
}
ArrayOfNumber = module_getArrayPrimeNumber_1.getArrayPrimeNumber(ArrayOfNumber);
ArrayOfNumber.forEach(function (element) {
    console.log(element);
});
