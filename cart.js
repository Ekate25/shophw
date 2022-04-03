async function loadData(){
    const dataBook = await fetch('https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/shop-data/data.json');
    const books = await dataBook.json();



let cart = localStorage.getItem('cart');
if(!cart) {
    cart = "{}";
};
const cartObj = JSON.parse(cart);

const array = Object.keys(cartObj);
const body = document.querySelector('body');
const buyBook = document.createElement('div');
buyBook.classList.add('buy-book');


array.forEach(function(item){
    const book = document.createElement('div');
    book.classList.add('cart-book');
   
    const name = document.createElement('div');
    name.classList.add('book-name')
    const amount = document.createElement('amount');
    amount.classList.add('book-amount');

    const image = document.createElement('img');
    image.classList.add('image');
        
    const currentBook = books.find(x => x.id === Number(item));
    name.innerText = currentBook.title;
    image.src = currentBook.image;
        
    amount.innerText = cartObj[item];
    
    book.appendChild(name);
    book.appendChild(amount);
    book.appendChild(image);

    buyBook.appendChild(book);
    })
    body.appendChild(buyBook);
    }
    loadData();