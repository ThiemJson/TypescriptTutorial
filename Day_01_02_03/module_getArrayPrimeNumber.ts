function isPrime(_number: number) :boolean {
    for(let i = 2 ; i < _number/2 ; i ++){
        if( _number % i == 0 ) return false;
    }
    return _number >= 2; 
}
 
function getArrayPrimeNumber(_listOfNumber : Array<number>): Array<number>{
    return _listOfNumber.filter((_number)=>isPrime(_number));
} 
class TestClass {
}
export {isPrime}
export {getArrayPrimeNumber}