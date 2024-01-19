//map , filter , reduce

//map- create new array based on condition

const arr=[1,2,3,4,5,6];
const a=arr.map((arr)=>{
 return arr*2;
})

console.log(a);

//filter- create new array based on condition

const b=arr.filter((arr)=>{
    return arr%2==0;
})
console.log(b);

//reduce- create new array based on condition
var total=0;
const c=arr.reduce((arr)=>{
 return total=total+arr;
})
console.log(c);