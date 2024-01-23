
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
//const arr2 = [];arr2.push(...arr1); // change this line
arr1.push('JUN');
console.log(arr1);
const arr2 = [];arr2.push(...arr1); // change this line
console.log(arr2); // arr2 should not be affected

//es5


var arr3 = [6, 89, 3, 45];
var maxi = Math.max.apply(null, arr3); // returns 89
console.log(maxi);


//es6

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
console.log(maximus);

