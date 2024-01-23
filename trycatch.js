try {
  a;  
} catch (e) {
   // console.log(a);
    console.log(e.name);
    console.log(e.message);
}



try {
 const pi=3.14;
 pi=12;
console.log(pi);
} catch (error) {
    console.log("error");
    
}


try {
    let age=15;
    if (age>18) {
        throw new Error('valid')
    }
    else{
        console.log('invalid');
    }
} catch (e) {
    console.log(e.name);
    console.log(e.message); 
 
}