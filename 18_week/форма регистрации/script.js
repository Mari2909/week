const firstName = document.getElementById("exampleInputName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password1 = document.getElementById("exampleInputPassword1");
const password2 = document.getElementById("exampleInputPassword2");
///const errorMessage = document.getElementById('errorMessage');
const button = document.querySelector(".btn-primary");
const input = document.querySelectorAll("input");
console.log(input);

function ValidateEmail(emailField) {
    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        return false;
    }
}

function ValidatePassword(passwordField) {
    const passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    if (passwordField.value.match(passwordFormat)) {
        return true;
    }
    else {
        return false;
    }
}


function check() {

    const errors = [];

    if (firstName.value == '') {
        errors.push("Вы не ввели имя<br>");
        firstName.classList.add("invalid");
    }
    else { firstName.classList.remove("invalid"); }

    if (lastName.value == '') {
        errors.push("Вы не ввели фамилию<br>");
        lastName.classList.add("invalid");
    }
    else { lastName.classList.remove("invalid"); }

    if (email.value == '') {
        errors.push("Ваш email не заполнен<br>");
        email.classList.add("invalid");
    }
    else { email.classList.remove("invalid"); }

    if (ValidateEmail(email) != true) {
        errors.push("Ваш адрес электронной почты введен неверно!<br>");
        email.classList.add("invalid");
    }
    else { email.classList.remove("invalid"); }

    if (password1.value == '') {
        errors.push("Вы не ввели пароль<br>");
        password1.classList.add("invalid");
    }
    else { password1.classList.remove("invalid"); }

    if (ValidatePassword(password1) != true) {
        errors.push("Ваш пароль недостаточно надежен!<br>");
        password1.classList.add("invalid");
    }
    else { password1.classList.remove("invalid"); }

    if (password2.value == '') {
        errors.push("Подтвердите пароль<br>");
        password2.classList.add("invalid");
    }
    else { password2.classList.remove("invalid"); }

    if (password1.value != password2.value || password1.value == '') {
        errors.push("Пароли не совпадают. Повторите попытку<br>");
        password2.classList.add("invalid");
    }
    else {
        alert('Добро пожаловать, ' + firstName.value + '!');
    }

    let errorsString = errors.join('');

    document.getElementById('errorMessage').innerHTML = errorsString;
}

button.addEventListener("click", check);