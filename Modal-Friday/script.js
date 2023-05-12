const worker = new SharedWorker("worker.js");
const ts = +new Date();
worker.port.postMessage(10000000000);
worker.port.postMessage(10000000000);
worker.port.onmessage = (evt) => {
    const result = evt.data;
    console.log("Sum: ", result, new Date() - ts);
}