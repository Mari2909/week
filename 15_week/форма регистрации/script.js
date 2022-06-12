const firstName = document.getElementById("exampleInputName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password1 = document.getElementById("exampleInputPassword1");
const password2 = document.getElementById("exampleInputPassword2");
const errorMessage = document.getElementById('errorMessage');

function check() {

    errorMessage.innerHTML = "";

    if (firstName.value == '') {
        errorMessage.innerHTML += "Вы не ввели имя<br>";
    }
    if (lastName.value == '') {
        errorMessage.innerHTML += "Вы не ввели фамилию<br>";
    }
    if (email.value == '') {
        errorMessage.innerHTML += "Ваш email не заполнен <br>"
    }
    if (password1.value == '') {
        errorMessage.innerHTML += "Вы не ввели пароль<br>";
    }
    if (password1.value.length < 3) {
        errorMessage.innerHTML += "Ваш пароль слишком короткий<br>";
    }
    if (password2.value == '') {
        errorMessage.innerHTML += "Подтвердите пароль<br>";
    }
    if (password1.value != password2.value || password1.value == '') {
        errorMessage.innerHTML += "Пароли не совпадают. Повторите попытку.<br>";
    }
    else {
        alert('Добро пожаловать, ' + firstName.value + '!');
    }
}
