// <Model>

const store = {
    selectedCircle: null, // "red", "yellow", "green"
}

const setSelectedCircle = (circleName) => {
    store.selectedCircle = circleName;
    onChange();
}

// </Model>

// <View>
const container = document.getElementById("container");
const draw = () => {
    const redCircle = document.createElement("div");
    redCircle.classList.add("circle");
    redCircle.addEventListener("click", () => {
        onCircleClick("red");
    });

    const yellowCircle = document.createElement("div");
    yellowCircle.classList.add("circle");
    yellowCircle.addEventListener("click", () => {
        onCircleClick("yellow");
    })

    const greenCircle = document.createElement("div");
    greenCircle.classList.add("circle");
    greenCircle.addEventListener("click", () => {
        onCircleClick("green");
    });

    if (store.selectedCircle === "red") {
        redCircle.classList.add("red");
    }
    if (store.selectedCircle === "yellow") {
        yellowCircle.classList.add("yellow");
    }
    if (store.selectedCircle === "green") {
        greenCircle.classList.add("green");
    }

    container.innerHTML = "";
    container.append(redCircle, yellowCircle, greenCircle);
}

draw();

// </View>

// <Controller>

const onCircleClick = (circleName) => {
    setSelectedCircle(circleName);
}
const onChange = () => {
    draw();
}

// </Controller>