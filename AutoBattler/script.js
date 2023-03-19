// Model
const initialStore = {
    character: {
        health: 1000,
        experience: 0,
        attackRate: 100, 
        defenceRate: 20,
        critRate: 80
    },
    enemy: null
}

const store = JSON.parse(localStorage.getItem("store") || JSON.stringify(initialStore));

const createEnemy = () => {
    store.enemy = {
        health : Math.floor(100 + Math.random() * 200),
        experience: 0,
        attackRate : Math.floor(40 + Math.random() * 10),
        defenceRate: Math.floor(5 + Math.random() * 10),
        critRate: Math.floor(20 + Math.random() * 30)
    }
    onChange();
}

const attack = (target, damage, critRate) =>{
    const defenceRate = store[target].defenceRate;

    const rnd = Math.random() * 100;

    if(rnd <= critRate) {
        damage *= 1.5;
    }
    
    store[target].health-=damage - defenceRate;

    if(store[target].health < 0){
        store[target].health = 0;
    }
    onChange();
}

const checkIfAlive = (target) => {
    return store[target].health > 0 
}


// View

const playerContainer = document.querySelector("#player");
const enemyContainer = document.querySelector("#enemy");

const drawStats = (target, container) => {
    const healthBox = document.createElement('div');
    healthBox.className = "stat";
    healthBox.innerHTML = `Health: ${target.health}`;

    const attackBox = document.createElement('div');
    attackBox.className = "stat";
    attackBox.innerHTML = `Attack: ${target.attackRate}`;

    const defenceBox = document.createElement("div");
    defenceBox.className = "stat";
    defenceBox.innerHTML = `Defence: ${target.defenceRate}`;

    container.append(healthBox, attackBox, defenceBox);
}

const draw = () => {
    playerContainer.innerHTML = "";
    enemyContainer.innerHTML = "";

    drawStats(store.character, playerContainer);

    if (store.enemy !==null) {
      drawStats(store.enemy, enemyContainer);  
    } if (store.enemy === null || !checkIfAlive("enemy")) {
        const btn = document.createElement("div");
        btn.className = "find_btn";
        btn.innerHTML = "Найти противника";
        btn.addEventListener("click", onFindBtnClick)
        playerContainer.append(btn);
    }
}

//Controller

const onChange = () => {
    draw();

    localStorage.setItem("store", JSON.stringify(store));
}

const onFindBtnClick = () => {
    createEnemy();
    const intervalId = setInterval(function () {
        if (checkIfAlive ("character")) {
            attack("enemy", store.character.attackRate, store.character.critRate);
            if (checkIfAlive("enemy")) {
                attack("character", store.enemy.attackRate, store.character.critRate);
            } else {
                clearInterval(intervalId);
            }
        }
    }, 1000);
}

draw();