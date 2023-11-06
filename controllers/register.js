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

// valid phone number
document.querySelector('#phoneNumber').onchange = function () {
    let inputVal = document.getElementById('phoneNumber').value;
    let condition = (emptyInput(inputVal) === true && lengthValid(inputVal, 9, 15) === true && lettersNumber(inputVal));
    let text = 'Số điện thoại từ 9-15 kí tự số, không để trống';
    return validation(condition, 'tbPhone', text);
};




function inputUser(e) {
    // e.preventDefault();
    let ipEmail = document.querySelector('#email').value;
    let ipPassword = document.querySelector('#password').value;
    let ipName = document.querySelector('#name').value;
    let ipGender = document.querySelector('#gender').value;
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
        
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
    };
};