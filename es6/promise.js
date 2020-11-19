// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
function displayResponse(res) {
    console.log(res);
}
// --------------------------------------------
function syncTest1(cb) {
    setTimeout(() => cb(displayResponse, "Sync"), 1000);
}
function syncTest2(cb, res) {
    setTimeout(() => cb(res + " done roi nhe"), 1000);
}
syncTest1(syncTest2);

//----------------------------------------------
function asyncTest1() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve("Async"), 1000);
    });
}
function asyncTest2(res) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(res + " done roi nhe"), 1000);
    });
}

asyncTest1()
    .then((response) => asyncTest2(response))
    .then((response) => displayResponse(response));
//----------------------------------------------
