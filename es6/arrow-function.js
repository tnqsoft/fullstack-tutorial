// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

// console.log(materials.map(material => material.length));
// console.log(materials.map(function (material) {
//     return material.length;
// }));
//--------------------------------------
function Person() {
    this.name = "Person Name";

    this.method1 = function () {
        // setTimeout(function () {
        //     // this.name = "Of Timeout";
        //     console.log(this.name);
        // }, 100);

        // _this = this;
        // setTimeout(function () {
        //     // this.name = "Of Timeout";
        //     console.log(_this.name);
        // }, 100);

        setTimeout(() => {
            console.log(this.name);
        }, 100);
    }
}
var p1 = new Person();
p1.method1();
