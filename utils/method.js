// hiện thông báo khi false 
function validation (condition, selector,text) {
    let selectorId = document.getElementById(selector);
    if (condition) {
        selectorId.innerHTML = '';
        return true;
    } else {
        selectorId.style.display = 'block'
        selectorId.innerHTML = text;
        return false;
    }
};

// xác định ký tự trống
function emptyInput(input) {
    let emptyValid = /^(\s+)$/;
    if (emptyValid.test(input) || input == '') {
        return false;
    } else {
        return true;
    }
};

// xác định kiểu dữ liệu là chữ (latin và tiếng Việt)
function lettersValid(input) {
    let letters = /^[a-zA-Z a-ỹ]+$/;
    if (letters.test(input)) {
        return true;
    } else {
        return false;
    }
};

function lettersLatinValid(input) {
    let letters = /^\w+$/;
    if (letters.test(input)) {
        return true;
    } else {
        return false;
    }
};

function lettersNumber(input) {
    let letters = /^[0-9]+$/;
    if (letters.test(input)) {
        return true;
    } else {
        return false;
    }
};

//  định dạng email
function emailFormat(input) {
    let mailFormat = /^\w+([\.-]\w+)*@\w+([\.-]\w+)*(\.\w{2,3})+$/;
    if (input.match(mailFormat)) {
        return true;
    } else {
        return false;
    }
};

// định dạng mật khẩu ít nhất(1 ký tự số, 1 ký tự đặc biệt, 1 ký tự in hoa)
function passwordValid(input) {
    let passWords = /^(\w{1,}|[^A-Z]+|[^0-9]+)$/;
    if (passWords.test(input)) {
        return false;
    } else {
        return true;
    }
};

// xác định độ dài ký tự
function lengthValid(input, min, max) {
    if (input.length < min || input.length > max) {
        return false;
    } else {
        return true;
    }
};

// định dạng ngày tháng năm dd/mm/yyyy
function dateFormat(input) {
    let dateFormValid = /^(\d{2,2}\/\d{2,2}\/\d{4,4})$/;
    if (dateFormValid.test(input)) {
        return true;
    } else {
        return false;
    }
};

// xác định min - max input
function minToMaxValid(input, min, max) {
    if (input < min || input > max) {
        return false;
    } else {
        return true;
    }
};

function stringToSlug(title) {
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}
