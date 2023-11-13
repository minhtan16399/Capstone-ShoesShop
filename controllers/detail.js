window.onload = function (e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);
    onloadData();
    onloadDataDetail(myParam);
    refeshItemCart();
};

async function onloadDataDetail(myParam) {
    try {
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product/getbyid' + '?id=' + myParam,
            method: 'GET',
        });
        // console.log(response);
        console.log(response.data.content);
        logItem(response.data.content);
    } catch (error) {
        console.log(error);
    };
};

function logItem(item) {
    let img = item.image;
    let name = item.name;
    let price = item.price;
    let id = item.id;
    let desc = item.description;
    let sizes = item.size;
    console.log(item.id);
    console.log(sizes);
    productDetail(id, img, name, desc, sizes, price);
};

function productDetail(id, img, name, desc, size, price) {
    let domCard = document.createElement('div');
    domCard.className = 'container';
    domCard.innerHTML =
        `<div class="d-flex flex-wrap">
    <div class="detail_left mx-4 mb-3">
      <div class="card">
        <img class="card-img-top w-100" src="${img}" alt="">
      </div>
    </div>
    <div class="detail_right mx-4 w-50">
      <h3 class="detail_right_title">${name}</h3>
      <p class="descript">${desc}</p>
      <h5 class="size">Choose Size</h5>
      <div class="mt-2">
      <ul class="size_content p-0"></ul>
      <span class="sp-thongbao" id="tbSize"></span>
      </div>
      <div class="my-4">
        <span class="total-price alert alert-light text-black">$${price}</span>
      </div>
      <div class="quantity d-inline d-flex my-4">
        <button id="btnMinus" class="btn text-black btn-outline-secondary" onclick="minusNumber()"><i class="fa-solid fa-minus"></i></button>
        <span class="number-quantity alert alert-light text-black py-0">1</span>
        <button id="btnPlus" class="btn text-black btn-outline-secondary" onclick="plusNumber()"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button id="addCart" class="btn btn-success px-4 py-2">Add to cart</button>
    </div>
  </div>`;
    document.querySelector('.product_detail').appendChild(domCard);
    showItemSize(size);
    document.querySelector('#addCart').addEventListener('click', (e) => {
        addItemToCart(id, name, price, size, img);
    })
    // addItemToCart(price, size);
};

function showItemSize(size) {
    for (let item of size) {
        let createBtnSize = document.querySelector('.size_content');
        let createBtn = document.createElement('input');
        let createLabel = document.createElement('label');
        createBtn.type = 'radio';
        createBtn.className = 'btn-check';
        createBtn.name = 'options';
        createBtn.id = 'option' + item;
        createLabel.className = 'btn btn-outline-dark me-2 my-2';
        createLabel.setAttribute('for', createBtn.id);
        createLabel.innerText = item;
        createBtnSize.appendChild(createBtn);
        createBtnSize.appendChild(createLabel);
    };
};

let quantity = [1];
let base = '';
function plusNumber() {
    let plus = 1;
    quantity.push(plus);
    base = quantity.length;
    document.querySelector('.number-quantity').innerHTML = base;
    console.log(quantity);
};

function minusNumber() {
    if (quantity.length == 1) {
        quantity.length
    } else {
        quantity.pop();
        base = quantity.length;
    }
    document.querySelector('.number-quantity').innerHTML = base;
};

function addItemToCart(id, name, price, size, img) {
    let number = quantity.length;
    let checkSize = chooseSize(size);
    let cartItem = {
        id: id,
        name: name,
        price: price,
        size: checkSize,
        image: img,
        quantity: number,
    };
    if (checkSize === '') {
        document.querySelector('#tbSize').innerHTML = 'Vui long chon Size';
    } else {

        let listCart = getStorage()?getStorage():[];
        
        console.log(listCart);
        let currentItem = listCart?.find(item => item.id === id);
        console.log('id sp', currentItem);
        if (!currentItem) {
            listCart.push(cartItem);
            console.log(listCart);
        } else {
            currentItem.quantity += number;
        };
        saveStorage(listCart);
        refeshItemCart();
    };
};

function chooseSize(size) {
    // console.log(size);
    let sizeSelect = '';
    for (let i of size) {
        let checkSize = document.querySelector('#option' + i).checked;
        if (checkSize === true) {
            sizeSelect = i;
            // console.log(size);            
        } else {
            sizeSelect;
        };
    };
    return sizeSelect;
};

