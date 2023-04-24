class Dog {

    constructor(dogName, age, weight) {
        this.dogName = dogName;
        this.age = age;
        this.weight = weight;
    }
    bark() {
        console.log("bark");
    }
}

const myDog = new Dog("Sharik", 10, 5);
//console.log(myDog.dogName);

class User {
    constructor(name, lastname, age, type) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.changeType(type);
    };

    sayHello(){
        console.log("Hello " + this.name);
    };
    bDay() {
        this.age++;
    };

    changeType(nameOfType) {
        this.type = ["admin", "manager","regular"].includes(nameOfType) ? nameOfType : null
    }
}

const newUser = new User("Maria", "Bla", 32, "admin");

newUser.sayHello();
console.log(newUser.changeType("admin"));