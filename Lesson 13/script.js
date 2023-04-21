const get_req = async (id) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const {userId, title, body} = await resp.json();
    const respUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {name, username} = await respUser.json();
    console.log(userId, id, name, username, title, body);
}


const printArr = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await resp.json();
    const titles = data.map(({title}) => title);
    console.log(titles)
}

printArr();