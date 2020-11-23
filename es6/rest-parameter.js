// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}
console.log(sum(1, 2, 3));
//----------------------------------
function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six")

function buildObject(name, id, ...extra);
buildObject('X', 1, "helo");
buildObject('Y', 2, "helo", "xxx");
