//destructing object


// let myobj={
//     name:'sanket',
//     age:21,
//     gender:'male',
// }


//this way we are not access 
// s

//this is correct way 

//let {name,age,gender}=myobj
// console.log(name)
// console.log(age)
// console.log(gender)

// let {name:d,age:e,gender:f}=myobj
// console.log(d)
// console.log(e)
// console.log(f)




let myobj={
    name:'sanket',
    age:21,
    gender:'male',

    add:{
        city:'mumbai',
    }
}


// let {name:d,age:e,gender:f,add:h}=myobj
let {name:d,age:e,gender:f,add:{city:h}}=myobj
console.log(d)
console.log(e)
console.log(f)
console.log(h);