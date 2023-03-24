// создать функцию readFromLocalStorage
// данная функция получает в качестве аргумента key и возвращает массив из объектов
const readFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) ;
 }
 // создать функцию writeToLocalStorage которая получает два параметра (key, value)
 const writeToLocalStorage = (key,value) => {
     localStorage.setItem(key, JSON.stringify(value));
 }
 
 const products = readFromLocalStorage('product');
 
 
 const formaAdd = document.querySelector('.forma');
 const productsContainer = document.querySelector('#product');
 
 formaAdd.addEventListener('submit', event => {
     event.preventDefault();
     const title = event.target.title;
     const price = event.target.price;
     // console.log(title.value);
     // console.log(price.value);
     // event.target.reset()
     
     const newProduct = {
         title: title.value,
         price: price.value
     }
     
     products.push(newProduct);
     rerender();
     writeToLocalStorage('product',products);
     event.target.reset();
     console.log(products);
 })
 
 
 const createCard = (title,price) => {
     const container = document.createElement('div');
     const nameProduct = document.createElement('p');
     const priceProduct = document.createElement('p');

     container.className = "card";
     
     nameProduct.innerText = title;
     priceProduct.innerText = price;
     container.append(nameProduct,priceProduct);
     productsContainer.append(container);
 }
 // createCard('велосипед', 5000)
 
 // создать функцию rerender которая проходится циклом (forEach) по массиву products 
 // и для каждого продукта вызывает функцию createCard
 const rerender = () => {
     productsContainer.replaceChildren();
     products.forEach(el => createCard(el.title,el.price));
 }
 
 rerender();