// Functions.

// Functions Declaration syntax

// 1.
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(4, 6));


// 2.
function sum2(num3, num4) {
    console.log(num3) // It has value in one paramereter
    console.log(num4) // It is undefined because the value is not defined.
    return num3 + num4; // It is Not a Number NaN.
}
console.log(sum2(29));


// 3. 
function sum3(num5, num6) {
    if(num6 === undefined){
        return num5 + num5;
    }
    return num5 + num6;
}

console.log(sum3(20));

