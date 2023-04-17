const users = [
    {id: 1, name: 'Анатолий', age: 34, gender: 'm'},
    {id: 2, name: 'Светлана', age: 25, gender: 'f'},
    {id: 3, name: 'Степан', age: 53, gender: 'm'},
    {id: 4, name: 'Ольга', age: 63, gender: 'f'},
    {id: 5, name: 'Антон', age: 39, gender: 'm'}
]

//users.forEach(el => console.log(el.name));
//users.forEach(({name})=> console.log(name));

//const arrMale = users.filter(el => el.gender === 'm');
//const arrdesctr = users.filter({gender} => gender === "m")
//console.log(arrMale);
//console.log(users.filter(el => el.gender === "m").map(el=> el.name))

//console.log(users.reduce((acc, el) => acc + el.age, 0))

const root = document.querySelector('#root');
const createCard = (name, age, gender) => {
    const container = document.createElement("div");
    const nameP = document.createElement("p");
    const ageP = document.createElement("p");
    nameP.innerHTML = name;
    ageP.innerHTML = age;
    gender === "m" ? container.classList.add("blue") : container.classList.add("rosa");

    container.append(nameP, ageP);
    root.append(container);
}

const render = (arr) => {
    arr.forEach(el => createCard(el.name, el.age, el.gender))
}

render(users)