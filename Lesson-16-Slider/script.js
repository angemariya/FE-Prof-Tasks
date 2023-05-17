const container = document.querySelector('.images');
const mainFrame = document.querySelector('.mainFrame');


const getData = async (id, callback = console.log) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const resp = await data.json();
    callback(resp);
}

const renderImages = (data) => {
    const arrImages = data.images;
    const imgs = arrImages.map((el, index) => {
        const img = document.createElement('img');
        img.setAttribute("src", el);
        index === 0 && img.classList.add('active');

        img.addEventListener('click', ()=>{
            const imgs = container.querySelectorAll('img');
            imgs.forEach(img => img.classList.remove('active'));
            img.classList.add('active');
            mainFrame.style.backgroundImage = `url(${el})`;
        })
        
        if (index === 0) {
        img.click();
    }
        return img;
    })
    container.append(...imgs);

}

getData(1, renderImages);

