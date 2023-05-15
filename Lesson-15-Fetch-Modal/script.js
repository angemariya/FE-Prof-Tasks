const root = document.querySelector('#root');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
let count = 1; 

const getUserData = async (id) => {
    try {
        const resp = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await resp.json();  
        createUser(data.data);
        
    }
    catch {
        getErrorMessage("Такого пользователя нет");
    }
};

const createUser = ({first_name, last_name}) => {
    const div = document.createElement('div');
    const firstName = document.createElement('p');
    const lastName = document.createElement('p');

    firstName.innerHTML = first_name;
    lastName.innerHTML = last_name;

    div.append(firstName, lastName);
    root.append(div);
};

const getErrorMessage = (text) => {
    const error = document.createElement("p");
    error.innerHTML = text;
    root.replaceChildren();
    root.append(error);
}

getUserData(count);

btnLeft.addEventListener('click', () => {
    root.replaceChildren();
    getUserData(--count);
});
btnRight.addEventListener('click', () => {
    root.replaceChildren();
    getUserData(++count);
}); 



