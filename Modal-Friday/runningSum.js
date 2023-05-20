const arr = [1, 3, 5, -4, 10];
const prefix = [ 1, 4, 9, 5, 15 ]; // o(n)

// Running sum algorithm
// sum([3, 5, -4]) = sum([1, 3, 5, -4]) - sum([1]) = prefix[3] - prefix[0] = 4
// sum([-4, 10]) = sum([1, 3, 5, -4, 10]) - sum([1, 3, 5]) = prefix[4] - prefix[2] = 15 - 9 = 6
// sum([i..j]) = prefix[j] - prefix[j - subarray.length] = prefix[j] - prefix[i-1]


const numberOfSplit = (arr) => {
    const prefix = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[i-1] + arr[i]);
    }

    let result = 0;
    for (let delimeter = 1; delimeter < arr.length; delimeter++) {
        const leftSum = prefix[delimeter - 1];
        const rightSum = prefix[arr.length - 1] - prefix[delimeter-1]; //sum([delimeter..arr.length - 1])
        if (leftSum >= rightSum) {
            result++;
        }
    }
    return result;
}
console.log(numberOfSplit([ 10, 4, -8, 7 ]));

// переписать numberOfSplit с использованием памяти О(1).


const minimumPositive = (arr) => {
    let minPrefixSum = 0;
    let previousPrefixSum = 0;
    for (let i = 0; i < arr.length; i++) {
        previousPrefixSum = previousPrefixSum + arr[i];
        if (previousPrefixSum < minPrefixSum) {
            minPrefixSum = previousPrefixSum;
        }
    }

    return -minPrefixSum + 1;
}

console.log(minimumPositive([-3, 2, -3, 4, 2]));

