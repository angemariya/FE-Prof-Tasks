const reverseOnlyLetters = (str) => {
    let leftPointer = 0
    let rightPointer = str.length - 1;
    const arr = new Array(str.length).fill("");
    while (leftPointer <= rightPointer) {
        const isLeftLetter = /[a-zA-Z]/.test(str[leftPointer]);
        const isRightLetter = /[a-zA-Z]/.test(str[rightPointer]);
        if (isLeftLetter && isRightLetter) {
            arr[leftPointer] = str[rightPointer];
            arr[rightPointer] = str[leftPointer];
            leftPointer++;
            rightPointer--;
        } else {
            if (!isLeftLetter) {
                arr[leftPointer] = str[leftPointer];
                leftPointer++;
            }
            if (!isRightLetter) {
                arr[rightPointer] = str[rightPointer];
                rightPointer--;
            }
        }
    }
    return arr.join("");
}
/*
// console.log(/[a-zA-Z]/.test("!"));
console.log(reverseOnlyLetters("abcd")); // "dcba"
console.log(reverseOnlyLetters("Hello, world!")); // "dlrow, olleH!"
console.log(reverseOnlyLetters("a-bc-de--f")); // "f-ed-cb--a"
console.log(reverseOnlyLetters("a-bcz-def")); // "f-edz-cba"
*/
// leftPointer = "a"
// rightPointer = "f"

// arr = "f**********a"

// leftPointer = "-"
// rightPointer = "e"

// arr = "f-********a"

// leftPointer = "b"
// rightPointer = "e"

// arr = "f-e*******ba"

// leftPointer = "c"
// rightPointer = "d"

// arr = "f-ed**********cba"

// leftPointer = "z"
// rightPointer = "-"

// arr = "f-ed********-cba"


const moveZeroes = (arr) => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer <= rightPointer) {
        if (arr[leftPointer] !== 0) {
            leftPointer++;
        } else if (arr[leftPointer] === 0) {
            let changeNum = arr[leftPointer];
            arr[leftPointer] = arr[rightPointer];
            arr[rightPointer] = changeNum;
            rightPointer--;
        }
    }
    return arr;
}
console.log(moveZeroes([1, 1, 0, 0, 1, 0]));

/* Вариант от Никиты
const moveZeroes = (arr) => {
    const result = new Array(arr.length);
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number === 0) {
            result[rightPointer] = number;
            rightPointer--;
        } else {
            result[leftPointer] = number;
            leftPointer++;
        }
    }
    return result;
}

console.log(moveZeroes([0, 0, 0])); // [0, 0, 0]
console.log(moveZeroes([1, 0, 5, -3])); // [1, 5, -3, 0]
console.log(moveZeroes([1, 2, 3])); // [1, 2, 3]
*/

/*
const reverseOnlyLetters = (str) => {
    let leftPointer = 0
    let rightPointer = str.length - 1;
    const arr = new Array(str.length).fill("");
    while (leftPointer <= rightPointer) {
        const isLeftLetter = /[a-zA-Z]/.test(str[leftPointer]);
        const isRightLetter = /[a-zA-Z]/.test(str[rightPointer]);
        if (isLeftLetter && isRightLetter) {
            arr[leftPointer] = str[rightPointer];
            arr[rightPointer] = str[leftPointer];
            leftPointer++;
            rightPointer--;
        } else {
            if (!isLeftLetter) {
                arr[leftPointer] = str[leftPointer];
                leftPointer++;
            }
            if (!isRightLetter) {
                arr[rightPointer] = str[rightPointer];
                rightPointer--;
            }
        }
    }
    return arr.join("");
}
*/


// Написать функцию maxVowelLetters которая принимает 2 аргумента
// str - строка
// k - максимальная длина подстроки
// вернуть подстроку длины k, в которой содержится максимальное число гласных
// если таких подстрок несколько, вернуть любую

const maxVowelLetters = (arr, k) => {

}

console.log(maxVowelLetters("I wrote a foonction!", 3)); // -> "ote" или "foo" потому что 2 гласных, а 3 гласных нет

// Написать функцию maxVowelLetters которая принимает 2 аргумента
// str - строка
// k - максимальная длина подстроки
// вернуть подстроку длины k, в которой содержится максимальное число гласных
// если таких подстрок несколько, вернуть любую

/[aeoui]/i.test("a")