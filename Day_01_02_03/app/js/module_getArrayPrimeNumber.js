"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(_number) {
    for (var i = 2; i < _number / 2; i++) {
        if (_number % i == 0)
            return false;
    }
    return _number >= 2;
}
exports.isPrime = isPrime;
function getArrayPrimeNumber(_listOfNumber) {
    return _listOfNumber.filter(function (_number) { return isPrime(_number); });
}
exports.getArrayPrimeNumber = getArrayPrimeNumber;
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    return TestClass;
}());
