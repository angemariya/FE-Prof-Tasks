const store = {
    selectedCircle: null,
}

const setSelectedCircle = (circleName) => {
    store.selectedCircle = circleName;
}

const container = document.querySelector('#container');
const draw = () => {

    const redCircle = document.createElement('div');

    redCircle.classList.add("circle");
    redCircle.addEventListener("click", ()=>{
        onCircleClick("red");
    })

    const yellowCircle = document.createElement('div');

    redCircle.classList.add("circle");
    redCircle.addEventListener("click", ()=>{
        onCircleClick("yellow");
    })

    const greenCircle = document.createElement('div');

    redCircle.classList.add("circle");
    redCircle.addEventListener("click", ()=>{
        onCircleClick("green");
    })

    container.innerHTML = "";
    container.append(redCircle, yellowCircle, greenCircle);
}

draw();

const onCircleClick = (circleName) => {
    setSelectedCircle(circleName)
}