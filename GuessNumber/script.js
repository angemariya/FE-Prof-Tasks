//----------------------- Model

const store = {
    correctAnswer: Math.floor(1 + Math.random() * 100),
    selectedNumber: null,
    possibleAnswers: []
}

const generateThreeRandomAnswers = () => {
    for (let i = 0; i<3; i++) {
       store.possibleAnswers.push(Math.floor(1 + Math.random() * 100)) 
    }
}

generateThreeRandomAnswers();

const checkAnswer = () => store.selectedNumber === store.correctAnswer;


const selectNumber = (num) => {
    store.selectedNumber = num;
    onChange();
}

//------------------------- View

const container = document.querySelector('#container');

const draw = () => {
    const title = document.createElement('div');
    title.classList.add("title");
    title.innerHTML = "Я загадал случайное число от 1 до 100.";

    if (store.selectedNumber) {
        if (checkAnswer()) {
            title.innerHTML += "Ты угадал"
        }
        else {
            title.innerHTML += `Ты не угадал. Правильное число ${store.correctAnswer}`
        }
    }

    const options = document.createElement('div');
    options.classList.add("options");
    
    for (let i = 0; i < 3;i++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.innerHTML = store.possibleAnswers[i];
        option.addEventListener("click", ()=>{onOptionClick(store.possibleAnswers[i])});
        options.append(option);
    }

    const correctOption = document.createElement('div');
    correctOption.classList.add('option');
    correctOption.innerHTML = store.correctAnswer;
    correctOption.addEventListener("click", ()=>{onOptionClick(store.correctAnswer)});
    options.append(correctOption);
    
    container.replaceChildren();
    container.append(title, options);
}

draw();


//-------------------------- Controller

const onOptionClick = (num) => {
    selectNumber(num);
}

const onChange = () => {
    draw()
}
