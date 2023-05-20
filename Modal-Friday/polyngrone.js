const reverseOnlyLetters = (str) => {
    let leftPointer = 0
    let rightPointer = str.length - 1;
    const arr = new Array(str.length).fill("");
    while (leftPointer <= rightPointer) {
        const isLeftLetter = /[a-zA-Z]/.test(str[leftPointer]);
        const isRightLetter = /[a-zA-Z]/.test(str[rightPointer])
        arr[leftPointer] = str[rightPointer];
        arr[rightPointer] = str[leftPointer];
        leftPointer++;
        rightPointer--;
    }
    return arr.join("");
}

// console.log(/[a-zA-Z]/.test("!"));
console.log(reverseOnlyLetters("abcd")); // "dcba"
console.log(reverseOnlyLetters("Hello, world!")); // "dlrow, olleH!"
console.log(reverseOnlyLetters("a-bc-de--f")); // "f-ed-cb--a"