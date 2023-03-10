//Model
const store = {
    currentTurn: 0,                                        //0-нолики, 1-крестики
    field: [2, 2, 2, 2, 2, 2, 2, 2, 2]                    //0 -поле ноликов, 1 - поле крестиков, 2 - пустое поле 
}; 

const changeCurrentTurn = (value) => {
    store.currentTurn = value;
    onChange();
  };
  const markFieldItem = (ind, value) => {
    store.field[ind] = value;
    onChange();
  };

//View

function draw() {
    const html = [];

    const title = document.createElement("div");
    title.innerText = store.currentTurn === 0 ? "ходят нолики" : "ходят крестики"
    html.push(title);

    const grid = document.createElement("div");
    grid.className = "grid";

    for (let i=0; i<9; i++) {
       const item = document.createElement("div");
       item.className = "item";
       item.innerHTML = store.field[i]===0 ? "0" : store.field[i]===1 ? "X" : "" ;
       item.addEventListener("click", function() {
        store.field[i] === 2 && onItemClick(i)
       })
       grid.append(item);
    }

    html.push(grid);

    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.append(grid);
    html.forEach(el=>container.append(el))

}

//Controller

const onChange = function () {
    draw();
}

const onItemClick = function(ind) {
    markFieldItem(ind, store.currentTurn);
    changeCurrentTurn(store.currentTurn === 0 ? 1 : 0)
}

draw();
