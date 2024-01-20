//90 to 100 - A
//70 to 89 - B
//50 to 69 - C
//lower than 50- F

var student=95;

if (student>=90) {
    console.log('A');
}
else if (student>=70 && student<=89) {
    console.log('B');
}
else if (student>=50 && student<=69) {
    console.log('C');
}
else{
    console.log('fail');
}