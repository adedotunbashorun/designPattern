const calc = () => {
    return 3 * 4;
}

let aNumber = calc(); // first class citizen function i.e a function that is called by a variable

console.log(aNumber);

// callback and its role i.e a callback is afunction passed as an argument of another function

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);