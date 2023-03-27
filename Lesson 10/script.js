const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 4500,
        count: 1,
    },
    {
        id: 2,
        title: 'ролики',
        price: 500,
        count: 3,
    },
    {
        id: 3,
        title: 'самокат',
        price: 700,
        count: 4,
    },
    {
        id: 4,
        title: 'лыжи',
        price: 2200,
        count: 2,
    },
    {
        id: 5,
        title: 'скейт',
        price: 750,
        count: 4,
    }
];

/*products.forEach(el => console.log(el.title));
console.log(products.filter(el=>el.price < 1000))

const changePrice = (id, newPrice) => {
    const product = products.find(el => el.id === id)
    product.price = newPrice
}

changePrice(1, 10233)
*/

const get = (value) => {
    return products.filter(el =>  el.count <= value)
}

console.log(get(2))
