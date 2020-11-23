// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
class Polygon {
    constructor(height, width) {
        this.area = height * width;
    }
}
console.log(new Polygon(4, 3).area);

//-----------------------------------------
class Polygon1 {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
}
class Square extends Polygon1 {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}
var s = new Square(4);
console.log(s.name, s.height);
//-----------------------------------------

class Person {
    #name = "";

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#sayHello();
    }

    #sayHello() {
        return "Hello " + this.#name;
    }

    static demo() {
        console.log('Class static method');
    }
}

var person1 = new Person("Nguyen Nhu Tuan");
console.log(person1.getName());
console.log(person1.#name);
//console.log(person1.#sayHello());
Person.demo();
