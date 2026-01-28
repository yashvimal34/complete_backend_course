// 1. let understand var method
var x = 2;
// console.log(x)
var x = 5;
// In var we can define same variable multiple times it dosen't throw an error.
// console.log(x)
// But remeber one thing it runs the code where you have defined last same (x) variable.


// let's understand using function.
var y = 4  // This is a global scope.
function var1() {
    var y = 2;  // This is an local variable scope.
    // return var1;
};

// console.log(y);

// 2. Now understand let method.
let a = 2;
let b = 5;
// Remember one thing that let never accept same variable you have to give different varaible.
a = 100; // But you can change the value of let variable scope.

// console.log(a);
// console.log(b);

// 3. let's understand const scope.
// const is fixed. Once you have given any variable to const it does not change anything it is fixed
const d = 8800;
// d = 9000 // This throws an error that d variable is constant in const scope.
console.log(d);
