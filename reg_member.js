var ipId;
var ipPw;
var ipPw_re;
var ipUser_name;
var ipEmail;
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
var ipSex;
var ipTel_1;
var ipTel_2;
var ipTel_3;

var id;
var pw;
var pw_re;
var user;
var email;
var birth_y;
var birth_m;
var birth_d;
// var sex;
var tel_1;
var tel_2;
var tel_3;
var sex;
var userInfo;

window.onload = function () {
    id = document.getElementById('id');
    pw = document.getElementById('pw');
    pw_re = document.getElementById('pw_re');
    user = document.getElementById('user');
    email = document.getElementById("email");
    birth_y = document.getElementById("birth_y");
    birth_m = document.getElementById("birth_m");
    birth_d = document.getElementById("birth_d");
    sex = document.getElementsByName("sex");
    tel_1 = document.getElementById("tel_1");
    tel_2 = document.getElementById("tel_2");
    tel_3 = document.getElementById("tel_3");
}

function check() {
    ipId = id.value;
    ipPw = pw.value;
    ipPw_re = pw_re.value;
    ipUser_name = user.value;
    ipEmail = email.value;
    ipBirth_y = birth_y.value;
    ipBirth_m = birth_m.value;
    ipBirth_d = birth_d.value;
    ipTel_1 = tel_1.value;
    ipTel_2 = tel_2.value;
    ipTel_3 = tel_3.value;


    for (var i = 0; i < sex.length; i++) {
        if (sex[i].checked == true) {
            ipSex = sex[i].value;
        }
    }

    userInfo = "id: " + ipId + "\n"
        + "pw: " + ipPw + "\n"
        + "pw_re: " + ipPw_re + "\n"
        + "userName: " + ipUser_name + "\n"
        + "email: " + ipEmail + "\n"
        + "birth_y: " + ipBirth_y + "\n"
        + "birth_m: " + ipBirth_m + "\n"
        + "birth_d: " + ipBirth_d + "\n"
        + "tel_1: " + ipTel_1 + "\n"
        + "tel_2: " + ipTel_2 + "\n"
        + "tel_3: " + ipTel_3 + "\n"
        + "sex: " + ipSex;
        
    alert(userInfo);

    if (checkId() && checkPw() && checkPw_re() && pw_check() && checkUserName() && checkEmail() ) {
        alert("회원가입 완료");
    }
    else {
        alert("회원가입 실패");
    }
}

function checkId() {
    if (ipId.length >= 4 && ipId.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function checkPw() {
    if (ipPw.length >= 4 && ipPw.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function checkPw_re() {
    if (ipPw_re.length >= 4 && ipPw_re.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function pw_check() {
    if (ipPw == ipPw_re) {
        console.log('비밀번호 같음');
        return true;
    } else {
        console.log('비밀번호 다름');
        return false;
    }
}

function checkUserName() {
    if (ipUser_name.length >= 4 && ipUser_name.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function checkEmail() {
    if (ipEmail.length >= 4 && ipEmail.length <= 12) {
        return true;
    } else {
        return false;
    }
}

