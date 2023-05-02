class Timer {
    bombIsExploded = false;
    constructor() {
        const seconds = Math.random() * 10 + 5;
        this.timerId = setTimeout(() => {
            this.bombIsExploded = true;
            console.log(`You time is over! ${seconds} in total.`);
        }, seconds * 1000);
    }
    stop() {
        console.log("Timer is stopped!");
        clearTimeout(this.timerId);
    }
}

let sum = 0;

function round(i) {
    if (i === 3) {
        console.log(`Игра окончена, вы набрали ${sum} очков`);
        return;
    }
    console.log(`Раунд ${i + 1}! Сумма ваших очков: ${sum}`)
    const seconds = prompt("Через сколько секунд остановить таймер? ");
    const timer = new Timer();
    setTimeout(function () {
        timer.stop();
        if (timer.bombIsExploded) {
            console.log("Бомба взорвалась, вы проиграли");
        } else {
            console.log(`Бомба обезврежена, вы заработали ${seconds} очков!`);
            sum += +seconds;
        }
        round(i + 1);
    }, seconds * 1000);
}
round(0);
