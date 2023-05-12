const products = [
    {id: 1, title: "велосипед", price: 3400, discount: 7, marks: [4, 5, 4, 4, 5]},
    {id: 2, title: "ролики", price: 700, discount: 5, marks: [3, 4, 3, 2, 3]},
    {id: 3, title: "самокат", price: 600, discount: 2, marks: [5, 4, 5, 5]},
    {id: 4, title: "лыжи", price: 1200, discount: 90, marks: [4, 4, 3, 4]},
    {id: 5, title: "сноуборд", price: 800, discount: 5, marks: [4, 5]},
    {id: 6, title: "коньки", price: 700, discount: 10, marks: [2, 3, 2, 2, 2, 3]}
];

const maxPoints = products.map(({title, marks}) => ({title, maxMark: marks.reduce((a, b) => a > b ? a : b)}))

console.log(maxPoints);


const objArr = products.map(({marks, ...item})=> ({...item, avg: (marks.reduce((acc,el)=>acc+el)/marks.length)}))

// console.log(objArr);

const names = products.map(({title}) => title);
const products_arr = products
    .filter(({price }) => price > 700)
    .map(({title})=> title);

const objects = products.map(({title, price, discount}) => ({title, price: price - (price/100*discount)}));

const sum = products.reduce((acc, {price})=> acc + price, 0)

const sumWithDiscount = products.map(({price, discount}) => (price - (price/100*discount))).reduce((acc,el)=>acc + el, 0)

const removeByPrice = (value, arr) => {
    return arr.filter(({price, discount}) => (price - price/100*discount)<=value)
}

//console.log(removeByPrice(880, products));