import { isPrime } from "./module_getArrayPrimeNumber";
import { getArrayPrimeNumber } from "./module_getArrayPrimeNumber";
import { getCasestaFromMonth } from "./module_getCases";
import { MONTH } from "./models/Times";
import { DATE } from "./models/Times";
// Demo Get PrimeNumber
/*
let ArrayOfNumber = Array<number>(100);
for(let index = 0 ; index < 100 ; index ++  ){
    ArrayOfNumber[index] = index;
}
ArrayOfNumber = getArrayPrimeNumber(ArrayOfNumber);
ArrayOfNumber.forEach(element => {
    console.log(element);
});
*/
//Demo get Cases from Month
(async () => {
  let casesOfFirstMonth = await getCasestaFromMonth(MONTH.January, DATE.January);
  let casesOfSecondMonth = await getCasestaFromMonth(MONTH.August, DATE.August);
  console.log(`Cases of firstMonth: ${casesOfFirstMonth}`);
  console.log(`Cases of secondMonth: ${casesOfSecondMonth}`);
})();
