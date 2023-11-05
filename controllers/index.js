// khởi tạo giao diện, lấy data từ api 
async function onloadData() {
    try {
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET',
        });
        console.log(response);
        console.log(response.data.content);
        showItem(response.data.content);
    } catch (error) {
        console.log(error);
    };
};
// sau khi lấy được data (response) từ api, hiển thị lên giao diện. addEventListener thêm sự kiện click 
function showItem(product) {
    for (let item of product) {
        let img = item.image;
        let name = item.name;
        let price = item.price;
        let id = item.id;
        console.log(item.id);
        let createItem = document.createElement('div');
        createItem.className = 'item card';
        // tạo img cho item hiển thị trên web
        let createImgItem = document.createElement('img');
        createImgItem.className = 'card-img-top';
        createImgItem.src = img;
        // hiển thị tên item 
        let createNameItem = document.createElement('H5');
        createNameItem.className = 'card-title text-center';
        createNameItem.innerHTML = name;
        // tạo thẻ div chứa btn và price
        let createDiv = document.createElement('div');
        createDiv.className = 'card_footer d-flex'
        // hiển thị btn mua sản phẩm
        let createBtnBuy = document.createElement('a');
        createBtnBuy.href = './detail.html?productid='+ id;
        createBtnBuy.className = 'button-buy btn w-50';
        createBtnBuy.innerText = 'Buy now';
        // hiển thị giá item
        let createPriceItem = document.createElement('span');
        createPriceItem.className = 'price w-50';
        createPriceItem.innerHTML = '$' + price;
        // hiển thị sản phẩm ở trong div content của mục sản phẩm
        document.querySelector('.content').appendChild(createItem);
        createItem.appendChild(createImgItem);
        createItem.appendChild(createNameItem);
        createItem.appendChild(createDiv);
        createDiv.appendChild(createBtnBuy);
        createDiv.appendChild(createPriceItem);
    };
};