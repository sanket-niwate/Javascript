//the for of statement creates a loop iterating over iterable objects,
//including : built in string , array ,array like objects like nodelist and also map and set



var scores=[60,90,70,80]


for (var score of scores) {
    console.log(score);
}


for (var score of scores) {
    score=score+5;
    console.log(score);
}
var arr=['yellow','red','green','white']

for (const [m,n] of arr.entries()) {
    console.log(m+'->'+n);
}



//string

var skt='sanket'


for (const iterator of skt) {
    console.log(iterator);
}