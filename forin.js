//In Javascript , the  for in loop allows yo to loop through the program
//The statement of code found within the loop body will be executed once


//syntax
var a={
    primary:'blue',
    secoundary:'red',
    tertiary:'white'
    
}

console.log(a);

for (const key in a) {
   console.log(a[key]);
}
for (const key in a) {
    console.log(key+' ->'+a[key]);
 }


 var arr=['yellow','red','green','white']

 for (const b in arr) {
   console.log(arr[b]);
 }

 for (const b in arr) {
    console.log(b+'->'+arr[b]);
  }