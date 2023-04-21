class Greeter {
    personName = "";
    static counter = 0;
    constructor(personName) {
        this.personName = personName;
        Greeter.counter++;
    }
    #sayHi() {
        return `Hello ${this.personName}`;
    }
    get greeting() {
        return this.#sayHi() + "!!!";
    }
}

class A extends Greeter {
    personLastName = "";
    constructor(personName, personLastName) {
        super(...arguments); // .length
        this.personLastName = personLastName;
    }
    #sayHi() {
        return `Hello ${this.personName} ${this.personLastName}`;
    }
    get greeting() {
        // return super.greeting();
        return this.#sayHi() + "!!!";
    }
}

const vanya = new A("Vanya", "Ivanov");
console.log(vanya.greeting);

console.log(vanya.greeting, vanya.hasOwnProperty("personName"));
console.log(petya.greeting);
