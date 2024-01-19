//object are 2 ways 
//1.litral ={} 
//2.class

const sanket={
    name:'sanket',
    id:12
}

console.log(sanket);

console.log(sanket.name);//particular value

//object are key values pair
const key=Object.keys(sanket);
console.log(key);

const value=Object.values(sanket);
console.log(value);

const entry=Object.entries(sanket);
console.log(entry);