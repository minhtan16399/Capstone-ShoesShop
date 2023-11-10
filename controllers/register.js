// valid họ tên 
document.querySelector('#name').onchange = function () {
    let inputVal = document.getElementById('name').value;
    let condition = (emptyInput(inputVal) === true && lettersValid(inputVal) === true);
    let text = 'Họ và tên phải là chữ, không để trống';
    return validation(condition, 'tbName', text);
};

// valid mail
document.querySelector('#email').onchange = function () {
    let inputVal = document.getElementById('email').value;
    let condition = (emptyInput(inputVal) === true && emailFormat(inputVal) === true);
    let text = 'Email phải đúng định dạng vd: example123@gmail.com, không để trống';
    return validation(condition, 'tbEmail', text);
};

// valid mật khẩu
document.querySelector('#password').onchange = function () {
    let inputVal = document.getElementById('password').value;
    let condition = (emptyInput(inputVal) === true && lengthValid(inputVal, 6, 10) === true && passwordValid(inputVal) === true);
    let text = 'Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống';
    return validation(condition, 'tbPassword', text);
};

// valid confirmPassword 
document.querySelector('#confirmPassword').onchange = function () {
    let inputVal = document.getElementById('confirmPassword').value;
    let inputPassword = document.getElementById('password').value;
    let condition = (inputVal === inputPassword);
    let text = 'Mật khẩu xác nhận phải giống với mật khẩu đã nhập';
    return validation(condition, 'tbConfirm', text);
};

// valid phone number
document.querySelector('#phoneNumber').onchange = function () {
    let inputVal = document.getElementById('phoneNumber').value;
    let condition = (emptyInput(inputVal) === true && lengthValid(inputVal, 9, 15) === true && lettersNumber(inputVal));
    let text = 'Số điện thoại từ 9-15 kí tự số, không để trống';
    return validation(condition, 'tbPhone', text);
};

// value gender 
function gender() {
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    if (male.checked === true) {
        document.getElementById('tbGender').innerHTML = '';
        return male.value;
    } else if (female.checked === true) {
        document.getElementById('tbGender').innerHTML = '';
        return female.value;
    } else {
        document.getElementById('tbGender').innerHTML = 'Vui lòng chọn giới tính';
        return 0;
    }
};

function Valid() {
    let result = document.querySelector('#name').onchange() & document.querySelector('#email').onchange() & document.querySelector('#password').onchange() & document.querySelector('#phoneNumber').onchange() & document.querySelector('#confirmPassword').onchange();
    return result;
};

function inputUser(e) {
    // e.preventDefault();
    let checkValid = Valid();
    let checkGender = gender();
    if (checkValid === 1 && checkGender != 0) {
        let ipEmail = document.querySelector('#email').value;
        let ipPassword = document.querySelector('#password').value;
        let ipName = document.querySelector('#name').value;
        let ipGender = gender();
        let ipPhone = document.querySelector('#phoneNumber').value;

        let users = {
            email: ipEmail,
            password: ipPassword,
            name: ipName,
            gender: ipGender,
            phone: ipPhone,
        };
        users.email = ipEmail;
        users.name = ipName;
        users.password = ipPassword;
        users.phone = ipPhone;
        users.gender = ipGender;
        console.log(users);
        submitData(users);
    };
};

async function submitData(users) {
    try {
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: {
                "email": users.email,
                "password": users.password,
                "name": users.name,
                "gender": users.gender,
                "phone": users.phone,
            },
        });
        console.log(response);
        console.log(response.data.message);
        alert(response.data.message);
        // đăng ký thành công sẽ reload page
        let btnBack = document.querySelector('#btnBack');
        btnBack.addEventListener('click', location.reload());
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        alert(error.response.data.message);
    };
};

