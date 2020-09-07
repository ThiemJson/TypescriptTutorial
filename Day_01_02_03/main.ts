import {isPrime} from "./module_getArrayPrimeNumber"
import {getArrayPrimeNumber} from "./module_getArrayPrimeNumber"

let ArrayOfNumber = Array<number>(100);
for(let index = 0 ; index < 100 ; index ++  ){
    ArrayOfNumber[index] = index;
}
ArrayOfNumber = getArrayPrimeNumber(ArrayOfNumber);
ArrayOfNumber.forEach(element => {
    console.log(element);
});

   