//object are 2 ways 
//1.litral ={} 
//2.class

const sanket={
    name:'sanket',
    id:12
}

console.log(sanket);


//dot notation
console.log(sanket.name);//particular value

//bracket notation
console.log(sanket['name']);

//object are key values pair
const key=Object.keys(sanket);
console.log(key);

const value=Object.values(sanket);
console.log(value);

const entry=Object.entries(sanket);
console.log(entry);




var cap={
    name:'sanket',
    friend:['sanket','niwate'],

    a:{
        id:12,
        city:{
          name:'neha',
        }
    }

}


console.log(cap.friend[1]);//niwate

console.log(cap.a.city.name);//neha
 cap.movies='age of ultron'
 console.log(cap);


 delete cap.movies
 console.log(cap);
