/*fetch('https://reqres.in/api/users')
    .then(resp=>resp.json())
    .then(data=>console.log(data));
*/

    
const getData = async (fn) => {
    const url = 'https://reqres.in/api/users'
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    data.data.forEach(el => users.append(fn(el.first_name, el.last_name)));
}

//в асинхронную фунцию передаются несинхронные функции 

const users = document.querySelector(".users");

const createContainer = (name, lastname) => {

    const container = document.createElement("div");
    container.classList.add("item");
    const pName = document.createElement("p");
    const pLastname = document.createElement("p");
    pName.innerHTML = name;
    pLastname.innerHTML = lastname;
    container.append(pName, pLastname);
    
    return container;
}

getData(createContainer);