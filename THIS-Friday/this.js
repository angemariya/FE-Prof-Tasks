/* ---------------Было так
class School {
    displayAllStudents() {
        this.studentsArr.forEach(student => {
            console.log(student);
        });
    }
    constructor(studentsArr) {
        this.studentsArr = studentsArr;
    }
}

const school = new School([ "Маша", "Коля", "Витя" ]);
school.displayAllStudents();
*/

// -------------- Стало так Вариант с bind
/*
const displayList = function() {
    this.forEach(el => {
        console.log(el);
    });
}
class School {
    constructor(studentsArr) {
        this.displayAllStudents = displayList.bind(studentsArr);
    }
}
class Kitchen {
    constructor(productsArr) {
        this.displayAllProducts = displayList.bind(productsArr);
    }
}

const school = new School([ "Маша", "Коля", "Витя" ]);
school.displayAllStudents();

const kitchen = new Kitchen([ "Apple", "Tomato", "Onion" ]);
kitchen.displayAllProducts();
*/


// ------------------- Вариант с миксинамами

const displayList = function(arr) {
    arr.forEach(element => console.log(element));
}

class School {
    displayAllStudents() {
        displayList(this.studentsArr);
    }
    constructor(studentsArr) {
        this.studentsArr = studentsArr;
    }
}

class Kitchen {
    displayAllProducts() {
        displayList(this.productsArr);
    }
    constructor(productsArr) {
        this.productsArr = productsArr;
    }
}

// ---------------------- еще один вариант c Миксинами и наследованием

class Animal {
    constructor(name) {
        this.name = name;
    }
    canEat() {
        return false;
    }
    eat(product) {
        if (this.canEat(product)) {
            console.log(`${this.name} is enjoing while eating ${product}!`);
        } else {
            console.log(`${this.name} is not gonna eat ${product}`);
        }
    }
}

const teachSwim = (BaseClass) => {
    return class A extends BaseClass {
        canSwim = true;
        swim() {
            console.log(`${this.name} is swimming! Swim with me!`);
        }
    }
}

const teachWalk = (BaseClass) => {
    return class A extends BaseClass {
        canWalk = true;
        walk() {
            console.log(`${this.name} is walking!`);
        }
    }
}

const eatCarrots = (BaseClass) => {
    return class A extends BaseClass {
        canEat(product) {
            return super.canEat(product) || product === "carrots";
        }
    }
}
const eatGrains = (BaseClass) => {
    return class A extends BaseClass {
        canEat(product) {
            return super.canEat(product) || product === "grains";
        }
    }
}
const eatFish = (BaseClass) => {
    return class A extends BaseClass {
        canEat(product) {
            return super.canEat(product) || product === "fish";
        }
    }
}

const Chicken = eatCarrots(eatGrains(teachWalk(Animal)));
const Shark = eatFish(eatGrains(teachSwim(Animal)));
const Seal = eatFish(teachWalk(teachSwim(Animal)));
const GoldFish = eatGrains(teachSwim(Animal));

const chicken = new Chicken("Дульсинея");
const shark = new Shark("Робби");
const seal = new Seal("Тодд");
const goldFish = new GoldFish("Поньо");

chicken.walk();
shark.swim();
goldFish.swim();
seal.walk();
seal.swim();

chicken.eat("carrots");
seal.eat("fish");

//----------------- Делегирование

class Stomach {
    canEat(product) {
        return this.productsArr.includes(product);
    }
    constructor(productsArr) {
        this.productsArr = productsArr;
    }
}
class Navigation {
    constructor(canWalk, canSwim) {
        this.canWalk = canWalk;
        this.canSwim = canSwim;
    }
    walk(name) {
        if (this.canWalk) {
            console.log(`${name} is walking!`);
        }
    }
    swim(name) {
        if (this.canSwim) {
            console.log(`${name} is swimming!`);
        }
    }
}
class Animal {
    navigation = new Navigation(false, false);
    stomach = new Stomach([]);
    constructor(name) {
        this.name = name;
    }
    eat(product) {
        if (this.stomach.canEat(product)) {
            console.log(`${this.name} is enjoing while eating ${product}!`);
        } else {
            console.log(`${this.name} is not gonna eat ${product}`);
        }
    }
    swim() {
        return this.navigation.swim(this.name);
    }
    walk() {
        return this.navigation.walk(this.name);
    }
}

class Chicken extends Animal {
    navigation = new Navigation(true, false);
    stomach = new Stomach([ "carrots", "grains" ]);
}

class Seal extends Animal {
    navigation = new Navigation(true, true);
    stomach = new Stomach(["fish", "seaweed"]);
}

const chicken = new Chicken("Элеонора");
const seal = new Seal("Марти");

seal.eat("seaweed");
chicken.walk();
seal.swim();
chicken.swim();
chicken.eat("seaweed");

