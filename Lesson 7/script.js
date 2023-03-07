function check (num) {
   return num>0
}
console.log(check(8))

function compare(a, b) {
    return a > b ? a : b
}

console.log(compare(8, 9))

function range (start, end) {
    const newArr = [];
    
    for(let i = start; i < end; i++) {
        newArr.push(i)
    }
    return newArr
}

console.log(range(5, 9))


const arr = ['велосипед', 'ролики', 'самокат', 'лыжи', 'коньки'].map((el)=>el.length)

console.log(arr);