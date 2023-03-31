/*
const currentTime = +new Date();
let i = 0;

const intervalId = setInterval(function () {
    console.log(i);
    i++;

    if (i === 10) {
        clearInterval(intervalId);
    }
}, 1000);

const timeoutId = setTimeout(function () {
    console.log("I'm here!");
}, 5000);

setTimeout(function () {
    clearTimeout(timeoutId);
}, 3000)

const promise = new Promise((resolve, reject) => {
    setTimeout(reject, 2000);
    setTimeout(resolve, 3000);
});

promise.then(() => console.log("hello"));

promise.catch(() => {
    console.log("I'm resolved!");
});

setTimeout(() => {
    promise.catch(() => console.log("I'm sorry, I'm late :("));
    console.log("I'm late too");
}, 5000);

// 1. создали промис
// 2. повесили then -> "I'm resolved!"
// 3. ждём
// 4. спустя ~2000 мс мы ресолвим промис
// 5. вывели в консоль "I'm resolved!"
// 6. ждём
// 7. спустя ~3000 мс мы вешаем ещё один then -> "I'm sorry, I'm late :("
// 8. т.к. промис уже был заресолвлен, вывели в консоль "I'm sorry, I'm late :("

const currentTime = +new Date();

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            time: +new Date() - currentTime, 
            rnd: Math.random()
        });
    }, 2000);
});

promise.then((obj) => {
    console.log("I'm resolved!", obj.rnd);
});

setTimeout(() => {
    promise.then((obj) => console.log("I'm sorry, I'm late :(", obj.rnd));
    console.log("I'm late too");
}, 5000);

const currentTime = +new Date();

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            time: +new Date() - currentTime, 
            rnd: Math.random()
        });
    }, 2000);
});

promise.then((obj) => {
    console.log("I'm resolved!", obj.rnd);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                time: +new Date() - currentTime, 
                rnd: Math.random()
            });
        }, 2000);
    });
}).then((obj) => {
    console.log("I'm resolved after the first one!", obj);
});

promise.then((obj) => {
    console.log("I'm resolved too", obj.time);
    return { c: 3 };
}).then((obj) => {
    console.log(obj);
})



const currentTime = +new Date();

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            time: +new Date() - currentTime, 
            a: 1,
            rnd: Math.random()
        });
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            time: +new Date() - currentTime, 
            a: 2,
            rnd: Math.random()
        });
    }, 3000);
});

// Promise.all([
//     promise2,
//     promise1
// ]).then((arr) => {
//     console.log(arr);
// });

// Promise.race([ 
//     promise2,
//     promise1 
// ]).then((arr) => console.log(arr));

// s0.google.com - Europe, s1.google.com - Asia, s2.google.com - North America, s3.google.com - South America

const sendData = async (data) => {
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: "ok" });
        }, 1000);
    });

    console.log(response);
}

const sendDataWithoutAsync = (data) => {
    return new Promise((resolve, reject) => { // <- async
        new Promise((resolve, reject) => { // <- взяли из оригинального кода
            setTimeout(() => { // <- взяли из оригинального кода
                resolve({ status: "ok" }); // <- взяли из оригинального кода
            }, 1000); // <- взяли из оригинального кода
        }).then((response) => { // <- await
            console.log(response); // 44 строка
            resolve(); // <-async
        })
    }) // <- async
}

sendData({ user: "admin" });
sendDataWithoutAsync({ user: "admin" });

console.log("test");

*/