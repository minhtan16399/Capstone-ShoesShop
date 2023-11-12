let cart = [];

function detailItem() {
    this.name = '',
        this.quantity = '',
        this.price = '',
        this.size = '',
        this.totalPrice = '';
};

function countQuantity() {
    let totalCart = cart;
    let quantity = 0;
    let totalQuantity = 0;
    for (let index of totalCart) {
        quantity = index.quantity;
        totalQuantity = totalQuantity + quantity;
        // console.log(index);
    };
    console.log(totalQuantity);
    document.querySelector('.quatity-count').innerHTML = totalQuantity;
};

function saveStorage() {
    let strItem = JSON.stringify(cart);
    localStorage.setItem('arrItemCart', strItem);
};

function getStorage() {
    if (localStorage.getItem('arrItemCart')) {
        let str = localStorage.getItem('arrItemCart');
        cart = JSON.parse(str);
        console.log(cart);
        countQuantity();
    };
};