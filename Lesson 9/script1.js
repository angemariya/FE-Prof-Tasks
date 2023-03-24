const products = document.querySelector("#products");
const form = document.querySelector('form');

const readFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const writeLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const productsArr = readFromLocalStorage("products");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = event.target.title; //name = "title"
  const price = event.target.price; //name = "price"

  const newProduct = {
    title: title.value,
    price: price.value
  };

  productsArr.push(newProduct);
  writeLocalStorage("products", productsArr);
  rerender();
  event.target.reset();
 
})

const createCard = (title, price) => {
  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("p");
  const priceProduct = document.createElement("p");
  const deleteBtn = document.createElement("button");

  cardProduct.classList.add("card");
  deleteBtn.innerText = "удалить";

  cardProduct.append(nameProduct, priceProduct, deleteBtn);
  products.append(cardProduct);

  nameProduct.innerText = title;
  priceProduct.innerText = price;

  deleteBtn.addEventListener("click", function() {
    const result = productsArr.filter(el=>el.title !== title);
    writeLocalStorage("products", result);
    console.log(result)
    rerender()
  })

}
        // 1) перезаписать localStorage 
        // 2) вызвать rerender

const rerender = () => {
  products.replaceChildren();
  productsArr.forEach((el) => createCard(el.title, el.price));
}

rerender();