/*const arr = [12, 4, 3, 6, 43, 12, 4, 3];

arr.forEach(function(el) {
 if (el%2===0) {
        console.log(el)
    }
})
*/

const products = 
    [
        {id: 1, 
        title: 'велосипед', 
        price: 12000, 
        discount: 15},

        {id: 2,
        title: 'ролики', 
        price: 700, 
        discount: 25},

        {id: 3, 
        title: 'самокат', 
        price: 500, 
        discount: 0},

        {id: 4,
        title: 'лыжи',
        price: 1300, 
        discount: 5},

        {id: 5, 
        title: 'сноуборд', 
        price: 2000, 
        discount: 0},

        {id: 6, 
        title: 'коньки', 
        price: 1700, 
        discount: 10}
    ]
/*
products.forEach(function(el){
    if (el.discount === 0) {
        console.log(el.title)
    }
})
*/
const priceArr = products.map(function(value){
    return {title: value.title,
            price: value.price}
})
console.log(priceArr);
/*
function mult(a, b) {
    console.log(a * b);
}

function handler(){
    console.log('привет');
}

*/
//setInterval(handler, 100)

/*setInterval(function(){
    console.log('привет')
}, 100)
*/