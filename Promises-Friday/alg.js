// [1, 2, 4, 6, 8, 9, 14, 15] 13 o(n^2) o(n) o(n*log(n))
const checkIfSum = (arr, sum) => {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        const s = arr[left] + arr[right];
        if (s === sum) {
            return true;
        }
        if (s > sum) {
            right--;
        }
        if (s < sum) {
            left++;
        }
    }

    return false;
}

console.log(checkIfSum([1, 2, 4, 6, 7, 8, 9, 14, 15], 0))

