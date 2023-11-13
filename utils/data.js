let cart = [];

function detailItem() {
    this.id = '',
        this.image = '',
        this.name = '',
        this.quantity = '',
        this.price = '',
        this.size = '',
        this.totalPrice = '';
};

function saveStorage(cart) {
    let strItem = JSON.stringify(cart);
    localStorage.setItem('arrItemCart', strItem);
};

function refeshItemCart() {
    if (localStorage.getItem('arrItemCart')) {
        let str = localStorage.getItem('arrItemCart');
        cart = JSON.parse(str);
        console.log(cart);
        countQuantity();
        showCart(cart);
    };
};

function countQuantity() {
    document.querySelector('.quatity-count').innerHTML = getStorage() ? getStorage().length : 0;
};

showCart = (cart) => {
    let showListCart = cart.map((item, index) => {
        // console.log(index, item);
        let domCard = document.createElement('li');
        domCard.className = 'd-flex justify-content-between';
        domCard.innerHTML = `
        <img class="w-25 me-3" src="${item.image}" alt="">
        <h6 class="me-3 w-50">${item.name}</h6>
        <div class="d-flex w-25">
        <p class="me-4">${item.quantity}</p>
        <span class="">$${item.quantity * item.price}</span>
        </div>
      `;
        return domCard;
    });
    let modal = document.querySelector('.modal-contents');
    modal.textContent = '';
    modal.append(...showListCart);
    // console.log(showListCart);
    // console.log('stringCartItem',cart);
};


function getStorage() {
    const str = localStorage.getItem('arrItemCart');
    if (!str) return null
    return JSON.parse(str);
};

const clearItemCart = async () => {
    await localStorage.removeItem('arrItemCart');
    location.reload();
};