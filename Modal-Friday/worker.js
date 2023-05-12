const cache = {};

onconnect = (e) => {
    const port = e.ports[0];

    port.onmessage = (e) => {
        const amount = e.data;
        if (cache[amount] === undefined) {
            let sum = 0;
            for (let i = 1; i <= amount; i++) {
                sum = sum + i;
            }
            cache[amount] = sum;
        }
        port.postMessage(cache[amount]);
    }
}