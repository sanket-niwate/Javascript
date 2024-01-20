// Q1.create an object called person with properties name, age and gender. Access and log the name property to the console

const person={
    name:'sanket',
    age:12,
    gender:'male'
}

console.log(person);


//Q2.create an arrow function named square that take a number as parameter and returns the square of that number.

const square=(square)=>{
    return square*square;
}
console.log(square(5));

//Q3.Implement an anonymous function assigned to the variable multiplyByTwo that takes an array of
// numbers as a parameter and multiplies each element by 2.
var array=[1,2,3,4,5]
const b=array.map((array)=>{
    return array*2
})
console.log(b);

//Q4.Write a named function filterEven Numbers that takes an array of numbers as a parameter and
// returns a new array containing only the even numbers.
const c=array.filter((array)=>{
    return array%2==0;
})
console.log(c);


//Q5.Demonstrate array method (map, filter, reduce) 
//a. Map to square each number. 
const f=array.map((array)=>{
    return array*array
})
console.log(f);

//b. Filter to extract even number 
const d=array.filter((array)=>{
    return array%2==0;
})
console.log(d);

//c. Reduce to calculate the sum of all elements.
var total=0;
const e=array.reduce((array)=>{
    return total=total+array;
})
console.log(e);