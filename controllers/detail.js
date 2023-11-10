window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);
    onloadData();
    onloadDataDetail(myParam);
};
async function onloadDataDetail(myParam) {
    try {
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product/getbyid' + '?id=' + myParam,
            method: 'GET',
        });
        console.log(response);
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
    productDetail(img, name, desc, sizes, price);
};

function productDetail(img, name, desc, size, price) {
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
      <ul class="size_content"></ul>
      </div>
      <div class="my-4">
        <span class="total-price alert alert-light text-black">$${price}</span>
      </div>
      <div class="quantity d-inline d-flex my-4">
        <button id="btnMinus" class="btn text-black btn-outline-secondary" onclick="minusNumber()"><i class="fa-solid fa-minus"></i></button>
        <span class="number-quantity alert alert-light text-black py-0">1</span>
        <button id="btnPlus" class="btn text-black btn-outline-secondary" onclick="plusNumber()"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="btn btn-success px-4 py-2">Add to cart</button>
    </div>
  </div>`;
    document.querySelector('.product_detail').appendChild(domCard);
    showItemSize(size);
};

function showItemSize(size) {
    for (item of size) {
        let createBtnSize = document.querySelector('.size_content');
        let createBtn = document.createElement('a');
        createBtn.className = 'button-size btn btn-outline-secondary me-2 my-2 selected';
        createBtn.innerText = item;
        createBtnSize.appendChild(createBtn);
        let button = document.getElementsByClassName('button-size');

        let addSelectClass = () => {
            removeSelectClass();
            button.classList.add('selected');
        };

        let removeSelectClass = () => {
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('selected')
            }
        };

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener("click", addSelectClass);
        };
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

