// containsString("catastrophy", "cat") -> true
// containsString("catastrophies", "ass") -> true
// containsString("catastrophies", "sap") -> false
// const containsString = (mainString, subString) => {
//     let subStringPointer = 0;
//     for (let i = 0; i < mainString.length; i++) {
//         if (mainString[i] === subString[subStringPointer]) {
//             subStringPointer++;
//         }
//         if (subStringPointer === subString.length) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(containsString("catastrophy", "cat"));
// console.log(containsString("catastrophies", "ass"));
// console.log(containsString("catastrophies", "sap"));

// squareSorted([ -4, -3, -3, 0, 1, 2, 10 ]) -> [ 0, 1, 4, 9, 9, 16, 100 ] o(n)

// const squareSorted = (arr) => {
//     const res = [];

//     const negativeReversedSorted = []; // [ 16, 9, 9 ]
//     const positiveSorted = []; // [ 0, 1, 4, 100 ]

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (item < 0) {
//             negativeReversedSorted.push(item ** 2);
//         } else {
//             positiveSorted.push(item ** 2);
//         }
//     }

//     const negativeSorted = negativeReversedSorted.reverse(); // [ 9, 9, 16 ]

//     let aPointer = 0;
//     let bPointer = 0;

//     while (aPointer < negativeSorted.length && bPointer < positiveSorted.length) {
//         const a = negativeSorted[aPointer];
//         const b = positiveSorted[bPointer];

//         if (a < b) {
//             res.push(a);
//             aPointer++;
//         } else {
//             res.push(b);
//             bPointer++;
//         }
//     }

//     while (aPointer < negativeSorted.length) {
//         res.push(negativeSorted[aPointer]);
//         aPointer++;
//     }

//     while (bPointer < positiveSorted.length) {
//         res.push(positiveSorted[bPointer]);
//         bPointer++;
//     }

//     return res;
// }

// console.log(squareSorted([ -4, -3, -3, 0, 1, 2, 10 ]));

// [ 3, 1, 1, 1, 7, 0, -5, 16, 4, 1, 0 ]
// maxSubArray(arr, k)
/*
const maxSubArray = (arr, k) => {
    const sum = (start, end) => {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
    let leftPointer = 0;
    let rightPointer = 0;

    let currentCandidate = [];
    while (rightPointer < arr.length) {
        const currentSum = sum(leftPointer, rightPointer);
        if (currentSum <= k) {
            rightPointer++;
        } else {
            const newCandidate = [];
            for (let i = leftPointer; i < rightPointer; i++) {
                newCandidate.push(arr[i]);
            }
            if (newCandidate.length >= currentCandidate.length) {
                currentCandidate = newCandidate;
            }
            leftPointer++;
        }
        if (leftPointer > rightPointer) {
            rightPointer++;
        }
    }

    const newCandidate = [];
    for (let i = leftPointer; i < rightPointer; i++) {
        newCandidate.push(arr[i]);
    }
    if (newCandidate.length >= currentCandidate.length) {
        currentCandidate = newCandidate;
    }

    return currentCandidate;
}

console.log(maxSubArray([ 3, 1, 1, 1, 7, 0, -5, 16, 4, 1, 0 ], 9));

// const arr = [ 1, 0, 1, 1, 0, 0, 1, 1, 1, 1 ]
// longestRun(arr) -> 5

const longestRun = (arr) => {
    const howManyZeroes = (start, end) => {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            if (arr[i] === 0) {
                sum++;
            }
        }
        return sum;
    }
    let leftPointer = 0;
    let rightPointer = 0;

    let currentCandidate = 0;
    while (rightPointer < arr.length) {
        const currentAmountOfZeroes = howManyZeroes(leftPointer, rightPointer);
        if (currentAmountOfZeroes <= 1) {
            rightPointer++;
        } else {
            if (currentCandidate < rightPointer - leftPointer) {
                currentCandidate = rightPointer - leftPointer;
            }
            leftPointer++;
        }
        if (leftPointer > rightPointer) {
            rightPointer++;
        }
    }

    if (currentCandidate < rightPointer - leftPointer) {
        currentCandidate = rightPointer - leftPointer;
    }

    return currentCandidate;
}

console.log(longestRun([ 1, 0, 1, 1, 0, 0, 1, 1, 1, 1 ]));

const produceLessThenK = (arr, k) => {
    const mult = (left,right) => {
        let res = 1;
        for (let i = left; i <= right; i++) {
            res = res * arr[i];
        }
        return res;
    }

    let res = 0;
    let leftPointer  = 0;
    let rightPointer = 0;

    while (rightPointer < arr.length) {
        const currentMult = mult(leftPointer,rightPointer);
        if (currentMult < k && rightPointer !== arr.length) {
            rightPointer++;
        } else {
            res = res + rightPointer - leftPointer + 1;
            leftPointer++;
            res = res + rightPointer - leftPointer;
        }
    }
    return res;
}

console.log(produceLessThenK([10, 5, 2, 6], 100));


// const maxSubArraySum = (arr, k) => {
//     let currentSum = 0;
//     for (let i = 0; i < k; i++) {
//         currentSum = currentSum + arr[i];
//     }
//     let maxSum = currentSum;
//     for (let leftPointer = 1; leftPointer <= arr.length - k; leftPointer++) {
//         let diff = arr[leftPointer + k - 1] - arr[leftPointer - 1];
//         currentSum = currentSum + diff;
//         if (diff > 0) {
//             maxSum = Math.max(currentSum, maxSum);
//         }
//     }

//     return maxSum;
// }

const maxSubArraySum = (arr, k) => {
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum = currentSum + arr[i];
    }
    let res = currentSum;
    for (let rightPointer = k; rightPointer < arr.length; rightPointer++) {
        const diff = arr[rightPointer] - arr[rightPointer - k];
        currentSum = currentSum + diff;
        if (diff > 0) {
            res = Math.max(res, currentSum);
        }
    }

    return res;
}

console.log(maxSubArraySum([3, -1, 4, 12, -8, 5, 6], 4));


const maxAverage = (arr, k) => {
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    let res = currentSum;
    for (let rightPointer = k; rightPointer < arr.length; rightPointer++) {
        const diff = arr[rightPointer] - arr[rightPointer - k];
        currentSum = (currentSum + diff);
        if (diff > 0) {
            res = Math.max(res, currentSum);
        }
    }
    return res / k;
}

console.log(maxAverage([1,12,-5,-6,50,3], 4));

*/



