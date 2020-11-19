// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
var v1="1.1";
function test1() {
    var v1="1.2";
    console.log(v1);
}
test1();
//------------------------------------------
let v2="2.1";
function test2() {
    //let v2="2.2";
    console.log(v2);
}
test2();
//------------------------------------------
{
    let v3="3.1";
    console.log(v3);
}
// console.log(v3);
//------------------------------------------
var list=['A', 'B', 'C', 'D'];
for(var i=0; i < list.length; i++) {
    // Logic here
}
console.log(i);
for(let j=0; j < list.length; j++) {
    // Logic here
}
// console.log(j);
